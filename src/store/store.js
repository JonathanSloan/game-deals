import Vue from "vue";

export const store = Vue.observable({
  searchQuery: "",
  searchResults: [],
  spinner: false,
  storeList: []
});

export const actions = {
  updateQuery(searchQuery) {
    store.searchQuery = searchQuery;
  },

  // Updates results, appending store information to deal object
  updateResults(searchResults) {
    store.searchResults = searchResults.map(result => ({
      ...result,
      store: store.stores.data.find(store => store.storeID === result.storeID)
    }));
  },

  setStores(stores) {
    store.stores = stores;
  },

  toggleSpinner(spinner) {
    store.spinner = spinner;
  }
};
