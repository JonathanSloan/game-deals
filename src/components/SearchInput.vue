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
import { store, actions } from "../store/store";

export default {
  name: "SearchInput",

  props: {
    dense: Boolean,
    filled: Boolean
  },

  data: () => ({
    emptyResults: [],
    search: ""
  }),

  methods: {
    updateQuery: actions.updateQuery,
    updateResults: actions.updateResults
  },

  watch: {
    async search() {
      // update query in store
      actions.updateQuery(this.search);

      // If query is longer than 2 characters, search
      if (this.search.length > 2) {
        actions.updateResults(await GameService.findDeals(this.search));
      }
      if (this.search.length < 2) {
        console.log(`less than 2`);
        actions.updateResults(this.emptyResults);
      }
    }
  }
};
</script>
