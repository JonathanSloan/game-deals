<template>
  <q-page class="flex flex-center">
    <!-- TODO: clean this up -->
    <!-- Daily Deals -->
    <q-list separator v-if="searchQuery.length < 3" style="width:100%;">
      <Game
        v-for="deal in deals"
        :key="deal.dealID"
        :img="deal.thumb"
        :title="deal.title"
        :isDeal="deal.isOnSale === `1`"
        :normalPrice="deal.normalPrice"
        :salePrice="deal.salePrice"
        :savings="`${Number(deal.savings).toFixed(0)}% off`"
        :metacriticScore="deal.metacriticScore"
        :steamRatingPercent="deal.steamRatingPercent"
        :dealID="deal.dealID"
        :link="`${redirectURL}${deal.dealID}`"
      />
    </q-list>

    <!-- Search Results -->
    <q-list separator v-else-if="results.length !== 0">
      <Game
        v-for="result in results"
        :key="result.dealID"
        :img="result.thumb"
        :title="result.title"
        :isDeal="result.isOnSale === `1`"
        :normalPrice="result.normalPrice"
        :salePrice="result.salePrice"
        :savings="`${Number(result.savings).toFixed(0)}% off`"
        :metacriticScore="result.metacriticScore"
        :steamRatingPercent="result.steamRatingPercent"
        :dealID="result.dealID"
        :link="`${redirectURL}${result.dealID}`"
      />
    </q-list>

    <section v-else>
      <!-- Searching spinner -->
      <article v-if="searching">
        <q-spinner v-model="searching" size="3rem"></q-spinner>
      </article>

      <!-- If no results -->
      <article v-else>
        0 Results were found matching "{{ searchQuery }}"
      </article>
    </section>
  </q-page>
</template>

<script>
import axios from "axios";
import Game from "../components/Game";
import GameService from "../services/GameService";
import { store, actions } from "../store/store";

export default {
  name: "PageIndex",

  components: { Game },

  async created() {
    // Get store data
    this.setStores(await GameService.getStores());

    // Get top 10 deals
    this.deals = await GameService.getDeals();
  },

  computed: {
    searching() {
      return store.spinner;
    },

    searchQuery() {
      return store.searchQuery;
    },

    searchResults() {
      return store.searchResults;
    }
  },

  data: () => ({
    apiHost: `https://www.cheapshark.com/api/1.0/`,
    deals: [],
    redirectURL: `https://www.cheapshark.com/redirect?dealID=`,
    results: [],
    stores: []
  }),

  methods: {
    setStores: actions.setStores
  },

  watch: {
    deals() {
      if (deals.length === 0) actions.toggleSpinner(true);
      else actions.toggleSpinner(false);
    },

    searchResults() {
      this.results = this.searchResults;
    }
  }
};
</script>

<style lang="scss">
.strike-out {
  opacity: 0.4;
  text-decoration: line-through;
}

.rating-icon {
  height: 1rem;
  margin-right: 0.3rem;
  width: auto;
}
</style>
