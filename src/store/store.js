import Vue from "vue";

export const store = Vue.observable({
  searchQuery: ``,
  searchResults: [],
  storeList: []
});

export const actions = {
  updateQuery(searchQuery) {
    store.searchQuery = searchQuery;
  },

  updateResults(searchResults) {
    console.log(searchResults);
    store.searchResults = searchResults;
  },

  setStores(stores) {
    store.stores = stores;
  }
};
