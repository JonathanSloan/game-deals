<template>
  <q-input
    v-model="search"
    type="search"
    debounce="300"
    placeholder="Search Games..."
    borderless
    :dense="dense"
    :filled="filled"
  >
    <template v-slot:append>
      <q-icon
        v-if="search !== ''"
        name="close"
        @click="search = ''"
        class="cursor-pointer"
      />
      <q-icon v-if="search === ''" name="search" />
    </template>
  </q-input>
</template>

<script>
import GameService from "../services/GameService";
import { store, mutations } from "../store/store";

export default {
  name: "SearchInput",

  props: {
    dense: Boolean,
    filled: Boolean
  },

  computed: {
    query() {
      return store.query;
    }
  },

  data: () => ({
    search: ""
  }),

  methods: {
    setQuery: mutations.setQuery
  },

  watch: {
    query() {
      if (this.query.length > 2) {
      }
    },

    search() {
      if (this.search.length > 2) {
        GameService.getDeals(this.search).then(response =>
          console.log(response.data)
        );
      }
      //   this.setQuery(this.search);
    }
  }
};
</script>

<style></style>
