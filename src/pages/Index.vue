<template>
  <q-page class="column">
    <div v-for="t in test" :key="t.storeID">{{ t.storeName }}</div>

    <q-list separator>
      <q-item v-for="deal in deals" :key="deal.dealID">
        <q-item-section middle avatar>
          <q-img :src="`${deal.thumb}`" style="width:90px;" />
        </q-item-section>

        <q-item-section top>
          <q-item-label class="q-mb-xs">
            {{ deal.title }}
          </q-item-label>

          <!-- If on sale -->
          <q-item-label v-if="deal.isOnSale === `1`">
            <span class="q-mr-sm strike-out"> ${{ deal.normalPrice }} </span>
            <span class="q-mr-sm">${{ deal.salePrice }}</span>

            <!-- Savings percentage -->
            <q-badge v-if="deal.isOnSale === `1`" align="top">
              {{ `${Number(deal.savings).toFixed(0)}% off` }}
            </q-badge>
          </q-item-label>

          <!-- If not on sale -->
          <q-item-label v-else> ${{ deal.normalPrice }} </q-item-label>

          <!-- Ratings -->
          <q-item-label class="flex items-center q-pt-xs" caption>
            <!-- Metacritic Rating -->
            <img src="../../public/metacritic.png" class="rating-icon" />
            <span class="q-mr-md">
              {{
                deal.metacriticScore === `0`
                  ? `Metacritic: &mdash;`
                  : `Metacritic: ${deal.metacriticScore}%`
              }}
            </span>

            <!-- Steam Rating -->
            <img src="../../public/steam.svg" class="rating-icon" />
            <span class="q-mr-xs">
              {{
                deal.steamRatingPercent === `0`
                  ? `Steam: &mdash;`
                  : `Steam: ${deal.steamRatingPercent}%`
              }}
            </span>
          </q-item-label>

          <!-- Redirect to deal -->
          <q-item-label class="q-pt-sm">
            <q-btn
              type="a"
              :href="`${redirectURL}${deal.dealID}`"
              target="_blank"
              label="View Deal"
              color="primary"
              size="sm"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import axios from "axios";
import GameService from "../services/GameService";
import { store, actions } from "../store/store";

export default {
  name: "PageIndex",

  async created() {
    // Get store data
    this.setStores(await GameService.getStores());

    // Get top 10 deals
    this.deals = await GameService.getDeals();
  },

  computed: {
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
    stores: [],
    test: []
  }),

  methods: {
    setStores: actions.setStores
  },

  watch: {
    searchResults() {
      this.deals = this.searchResults;
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
// .game-card {
//   border-radius: 0.25rem;
//   margin: 0.5rem;
//   padding: 0rem;
//   width: 350px;
// }

// .q-img__image {
//   background-size: contain;
//   background-position: 50% 10% !important;
// }
</style>
