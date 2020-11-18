import React from 'react';
import axios from 'axios';
import {Promise} from 'bluebird';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

import TabBar from './TabBar.jsx';
import Display from './Display.jsx';
import TourModal from './TourModal.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
  }
  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1225px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.fetchRecommendedTours(this.props.listingId)
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
          this.fetchToursByCategory(this.props.listingId, category.id)
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
      .then(() => this.fetchCategories(this.props.listingId))
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

  toggleModal(item) {
    this.setState({
      showModal: !this.state.showModal,
      currentItem: item || null
    });
  }

  render() {
    return (
      <div onClick={this.state.showModal ? this.toggleModal : null}>
        <GlobalStyle />
        <Container>
          {this.state.showModal ? <TourModal item={this.state.currentItem} toggleModal={this.toggleModal}/> : null}
          <h1>Get the full experience and book a tour</h1>
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
        </Container>
      </div>
    );
  }
}


export default App;