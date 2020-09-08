import Vue from "vue";

export const store = Vue.observable({
  query: ""
});

export const mutations = {
  setQuery(query) {
    store.query = query;
  }
};
