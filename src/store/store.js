import Vue from "vue";

export const store = Vue.observable({
  searchQuery: "",
  searchResults: [],
  selectedStores: [],
  spinner: false,
  stores: []
});

export const actions = {
  setSelectedStores(selected) {
    store.selectedStores = selected.toString();
  },

  setStores(stores) {
    store.stores = stores.data.sort((a, b) =>
      a.storeName !== b.storeName ? (a.storeName < b.storeName ? -1 : 1) : 0
    );
  },

  toggleSpinner(spinner) {
    store.spinner = spinner;
  },

  updateQuery(searchQuery) {
    store.searchQuery = searchQuery;
  },

  // Updates results, appending store information to deal object
  updateResults(searchResults) {
    store.searchResults = searchResults.map(result => ({
      ...result,
      store: store.stores.find(store => store.storeID === result.storeID)
    }));
  }
};
