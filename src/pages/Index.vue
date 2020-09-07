<template>
  <q-page class="flex flex-center">
    <q-card v-for="deal in deals" :key="deal.dealID" class="game-card">
      <q-img :src="`${deal.thumb}`" />

      <q-card-section>
        <div class="text-h6">{{ deal.title }}</div>
        <div class="text-subtitle2">Sale Price: {{ deal.salePrice }}</div>
        <div class="text-subtitle2">Normal Price: {{ deal.normalPrice }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
        <a :href="`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`">
          <q-btn class="text-white">Get This Deal</q-btn>
        </a>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  async mounted() {
    this.getDailyDeals();
  },

  data: () => ({
    apiHost: `https://www.cheapshark.com/api/1.0/`,
    deals: [],
    results: []
  }),

  methods: {
    getDailyDeals() {
      fetch(`${this.apiHost}/deals`)
        .then(response => response.json())
        .then(result => (this.deals = result))
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    },

    searchDeals(gameTitle) {
      fetch(`${this.apiHost}/games?title=${gameTitle}`)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    }
  }
};
</script>

<style lang="scss">
.game-card {
  border-radius: 0.25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 350px;
}
</style>
