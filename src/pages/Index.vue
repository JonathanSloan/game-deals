<template>
  <q-page :class="pageLayout">
    <!-- Daily Deals - Default View -->
    <q-list separator v-if="searchQuery.length < 3" class="full-width">
      <Game
        v-for="deal in deals"
        :key="deal.dealID"
        :img="deal.thumb"
        :title="deal.title"
        :isDeal="deal.isOnSale === `1`"
        :normalPrice="deal.normalPrice"
        :salePrice="deal.salePrice"
        :savings="`${Number(deal.savings).toFixed(0)}% off`"
        :storeName="deal.store.storeName"
        :storeIcon="deal.store.images.icon"
        :storeBanner="deal.store.images.banner"
        :metacriticScore="deal.metacriticScore"
        :steamRatingPercent="deal.steamRatingPercent"
        :dealID="deal.dealID"
        :link="`${redirectURL}${deal.dealID}`"
      />
    </q-list>

    <!-- Search Results -->
    <q-list separator v-else-if="results.length !== 0" class="full-width">
      <Game
        v-for="result in results"
        :key="result.dealID"
        :img="result.thumb"
        :title="result.title"
        :isDeal="result.isOnSale === `1`"
        :normalPrice="result.normalPrice"
        :salePrice="result.salePrice"
        :savings="`${Number(result.savings).toFixed(0)}% off`"
        :storeName="result.store.storeName"
        :storeIcon="result.store.images.icon"
        :storeBanner="result.store.images.banner"
        :metacriticScore="result.metacriticScore"
        :steamRatingPercent="result.steamRatingPercent"
        :dealID="result.dealID"
        :link="`${redirectURL}${result.dealID}`"
      />
    </q-list>

    <section v-else>
      <!-- Searching spinner -->
      <article v-if="searching">
        <q-spinner v-model="searching" size="3rem" />
      </article>

      <!-- If no results -->
      <article v-else class="ellipsis">
        0 Results were found matching "{{ searchQuery }}"
      </article>
    </section>
  </q-page>
</template>

<script>
import Game from "../components/Game";
import GameService from "../services/GameService";
import { store, actions } from "../store/store";

export default {
  name: "PageIndex",

  components: { Game },

  async created() {
    // Get store data
    const allStores = await GameService.getStores();
    actions.setStores(allStores);

    // Get top 10 deals
    this.deals = await GameService.getDeals();
  },

  computed: {
    pageLayout() {
      if (this.searchQuery.length < 3 || this.results.length !== 0) {
        return "flex items-start justify-center";
      } else {
        return "flex flex-center justify-center";
      }
    },

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
    deals: [],
    redirectURL: `https://www.cheapshark.com/redirect?dealID=`,
    results: [],
    stores: []
  }),

  watch: {
    deals() {
      if (!this.deals.length) actions.toggleSpinner(true);
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
