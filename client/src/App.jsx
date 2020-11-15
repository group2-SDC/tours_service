import React from 'react';
import axios from 'axios';
import * as Promise from 'bluebird';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
      tabs: []
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchRecommendedTours = this.fetchRecommendedTours.bind(this);
    this.fetchToursByCategory = this.fetchToursByCategory.bind(this);
    this.populateTabs = this.populateTabs.bind(this);
    this.createRecommendedTab = this.createRecommendedTab.bind(this);
    this.fillCategories = this.fillCategories.bind(this);
  }

  componentDidMount() {
    this.populateTabs();
  }

  fetchRecommendedTours(listingId) {
    return axios.get(`/api/listings/${listingId}/tours/categories/recommended`);
  }

  createRecommendedTab() {
    return new Promise((resolve, reject) => {
      this.fetchRecommendedTours(this.props.listingId)
        .then(recommendedTours => {
          const recTab = {
            name: 'Recommended',
            description: 'Our most popular tours and activities',
            displayNumber: 4,
            tours: recommendedTours.data
          }
          resolve(recTab);
        })
        .catch(err => reject(err));
    });
  }

  fetchCategories(listingId) {
    return axios.get(`/api/listings/${listingId}/tours/categories`);
  }

  fetchToursByCategory(listingId, categoryId) {
    return axios.get(`/api/listings/${listingId}/tours/categories/${categoryId}`);
  }

  fillCategories() {
    return new Promise((resolve, reject) => {
      this.fetchCategories(this.props.listingId)
        .then(categories => {
          const categoryPromises = categories.data.map(category => {
            return new Promise((resolve, reject) => {
              this.fetchToursByCategory(this.props.listingId, category.id)
                .then(toursForCategory => {
                  category.tours = toursForCategory.data,
                  category.displayNumber = 4
                  resolve(category)
                })
                .catch(err => reject(err));
            })
          });
          return Promise.all(categoryPromises)
        })
        .then(filledCategories => resolve(filledCategories))
        .catch(err => reject(err))
    }) 
  }

  populateTabs() {
    const populatedTabs = [];
    this.createRecommendedTab()
      .then(recTab => {
        populatedTabs.push(recTab);
      })
      .then(() => this.fillCategories())
      .then(filledCategories => {
        const categoryTabs = filledCategories.slice(0, 4);
        const categoriesForBrowse = filledCategories.slice(4);
        categoryTabs.forEach(categoryTab => populatedTabs.push(categoryTab));
        const browseTab = {
          name: 'Browse',
          displayNumber: 6,
          categories: categoriesForBrowse
        };
        populatedTabs.push(browseTab);
        this.setState({
          tabs: populatedTabs
        });
      })
      .catch(err => console.log(err));     
  }

  render() {
    return (
      <div>
        Testing React!
      </div>
    );
  }
}

export default App;