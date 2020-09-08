<template>
  <q-page class="flex flex-center">
    <article
      v-if="results.length === 0 && query === ''"
      class="flex flex-center"
      style="max-width: 1200px;"
    >
      <!-- TODO: MAKE THIS A COMPONENT -->
      <q-card
        v-for="deal in deals"
        :key="deal.dealID"
        class="game-card flex row items-center"
      >
        <q-img
          :src="`${deal.thumb}`"
          style="height:120px; background-position: 100% 0;"
        />

        <q-card-section class="ellipsis">
          <div class="text-h6 ellipsis">{{ deal.title }}</div>
          <div class="text-subtitle2">Sale Price: {{ deal.salePrice }}</div>
          <div class="text-subtitle2">Normal Price: {{ deal.normalPrice }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-card-actions>
          <a
            :href="`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`"
            target="_blank"
          >
            <q-btn class="bg-primary text-white">View Deal</q-btn>
          </a>
        </q-card-actions>
      </q-card>
    </article>

    <article v-else class="flex flex-center" style="max-width: 1200px;">
      <!-- TODO: MAKE THIS A COMPONENT -->
      <q-card
        v-for="result in results"
        :key="result.dealID"
        class="game-card flex row items-center"
      >
        <q-img
          :src="`${result.thumb}`"
          style="height:120px; background-position: 100% 0;"
        />

        <q-card-section class="ellipsis">
          <div class="text-h6 ellipsis">{{ result.title }}</div>
          <div class="text-subtitle2">Sale Price: {{ result.salePrice }}</div>
          <div class="text-subtitle2">
            Normal Price: {{ result.normalPrice }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-card-actions>
          <a
            :href="
              `https://www.cheapshark.com/redirect?dealID=${result.dealID}`
            "
            target="_blank"
          >
            <q-btn class="bg-primary text-white">Get This Deal</q-btn>
          </a>
        </q-card-actions>
      </q-card>
    </article>
  </q-page>
</template>

<script>
import { store } from "../store/store";

export default {
  name: "PageIndex",

  async mounted() {
    this.getDailyDeals();
  },

  computed: {
    query() {
      return store.query;
    }
  },

  data: () => ({
    apiHost: `https://www.cheapshark.com/api/1.0/`,
    deals: [],
    results: []
  }),

  methods: {
    // TODO: Make these into a service or mixin!

    getDailyDeals() {
      fetch(`${this.apiHost}/deals`)
        .then(response => response.json())
        .then(result => (this.deals = result))
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    },

    searchDeals(gameTitle) {
      fetch(`${this.apiHost}/deals?title=${gameTitle}`)
        .then(response => response.json())
        .then(result => (this.results = result))
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    }
  },

  watch: {
    query() {
      this.searchDeals(this.query);
    }
  }
};
</script>

<style lang="scss">
.game-card {
  border-radius: 0.25rem;
  margin: 0.5rem;
  padding: 0rem;
  width: 350px;
}

.q-img__image {
  background-size: contain;
  background-position: 50% 10% !important;
}
</style>
