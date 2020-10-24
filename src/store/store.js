import Vue from "vue";

export const store = Vue.observable({
  searchQuery: ``,
  searchResults: [],
  spinner: false,
  storeList: []
});

export const actions = {
  updateQuery(searchQuery) {
    store.searchQuery = searchQuery;
  },

  updateResults(searchResults) {
    store.searchResults = searchResults;
  },

  setStores(stores) {
    store.stores = stores;
  },

  toggleSpinner(spinner) {
    store.spinner = spinner;
  }
};
