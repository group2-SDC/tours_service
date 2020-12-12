import React from 'react';
import axios from 'axios';
import {Promise} from 'bluebird';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

import TabBar from './TabBar.jsx';
import Display from './Display.jsx';
import Modal from './Modal.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    background-color: #f2f2f2;
  }
  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
  html, body {
    overflow: ${props => props.showModal ? 'hidden' : 'scroll'};
    height: 100%;
    width: 100%;
  }
`

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
`
BodyContainer.displayName = 'BodyContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1225px;
  margin: auto;
`

const TabsAndDisplayContainer = styled.div`
  background-color: white;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, .3);
  position: absolute;
  z-index: 2;
`
Overlay.displayName = 'Overlay';

const Heading = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin: 20px 0;
`
Heading.displayName = 'Heading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: window.location.pathname.slice(1, (window.location.pathname.length - 1)),
      view: 0,
      dataLoaded: false,
      tabs: [],
      showModal: false,
      currentItem: null
    };

    this.updateView = this.updateView.bind(this);
    this.showAllItems = this.showAllItems.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    // Make all get requests for this listing's tours/categories when the page is loaded, so we can store the relevant information to display, already sorted, in state, and then just switch which tours/categories are displayed depending on the tab user clicks
    this.populateTabs();
  }

  fetchRecommendedTours(listingId) {
    return axios.get(`/api/listings/${listingId}/tours/categories/recommended`);
  }

  fetchCategories(listingId) {
    return axios.get(`/api/listings/${listingId}/tours/categories`);
  }

  fetchToursByCategory(listingId, categoryId) {
    return axios.get(`/api/listings/${listingId}/tours/categories/${categoryId}`);
  }

  createRecommendedTab() {
    return new Promise((resolve, reject) => {
      this.fetchRecommendedTours(this.state.listingId)
        .then(recommendedTours => {
          const recTab = {
            name: 'Recommended',
            description: 'Our most popular tours and activities',
            displayMax: 4,
            items: recommendedTours.data,
            showAll: false
          }
          resolve(recTab);
        })
        .catch(err => reject(err));
    });
  }

  createCategoryTabs(categories) {
      const categoryPromises = categories.map(category => {
        return new Promise((resolve, reject) => {
          this.fetchToursByCategory(this.state.listingId, category.id)
            .then(toursForCategory => {
              category.items = toursForCategory.data;
              category.displayMax = 4;
              category.showAll = false;
              resolve(category);
            })
            .catch(err => reject(err));
        })
      });
      return Promise.all(categoryPromises)
  }

  populateTabs() {
    const populatedTabs = [];
    const browseTab = {
      name: 'Browse',
      displayMax: 6,
      showAll: false
    };
    this.createRecommendedTab()
      .then(recTab => populatedTabs.push(recTab))
      .then(() => this.fetchCategories(this.state.listingId))
      .then(categories => {
        const topCategories = categories.data.slice(0, 4);
        browseTab.items = categories.data.slice(4);
        return this.createCategoryTabs(topCategories);
      })
      .then(categoryTabs => {
        categoryTabs.forEach(categoryTab => populatedTabs.push(categoryTab));
        populatedTabs.push(browseTab);
        this.setState({
          tabs: populatedTabs,
          dataLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  updateView(newTab) {
    this.setState({
      view: newTab
    });
  }

  showAllItems() {
    const updatedTabs = this.state.tabs.slice();
    updatedTabs[this.state.view].showAll = true;
    this.setState({
      tabs: updatedTabs
    });
  }

  toggleModal(e, item) {
    this.setState({
      showModal: !this.state.showModal,
      currentItem: item || null
    });
  }

  render() {
    return (
      <BodyContainer onClick={this.state.showModal ? this.toggleModal : null}>
        <GlobalStyle showModal={this.state.showModal}/>
        {this.state.showModal ? <Overlay /> : null}
        <Container>
          <Heading>Get the full experience and book a tour</Heading>
          {this.state.showModal ? <Modal item={this.state.currentItem} toggleModal={this.toggleModal}/> : null}
          <TabsAndDisplayContainer>
            <TabBar
              tabs={this.state.tabs}
              currentTab={this.state.view}
              updateView={this.updateView}
            />
            {this.state.dataLoaded ?
              <Display
                tab={this.state.tabs[this.state.view]}
                showAllItems={this.showAllItems}
                toggleModal={this.toggleModal}
              />
            : null}
          </TabsAndDisplayContainer>
        </Container>
      </BodyContainer>
    );
  }
}


export default App;