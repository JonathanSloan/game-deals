<template>
  <q-page class="column">
    <q-card class="col-4">
      <!-- {{ test }} -->
      <!-- <div v-for="t in test" :key="t.storeID">{{ t.storeName }}</div> -->
      <!-- <q-list>
        <q-item v-for="deal in deals" :key="deal.dealID">
          <q-item-section top avatar>
            <q-img :src="`${deal.thumb}`" style="width:75px;" />
          </q-item-section>

          <q-item-section top>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>meta</q-item-label>
          </q-item-section>
        </q-item> -->
      <!-- </q-list> -->
    </q-card>
  </q-page>
</template>

<script>
// import axios from "axios";
// import GameService from "../services/GameService";
import { store } from "../store/store";

export default {
  name: "PageIndex",

  // created() {
  // this.test = GameService.getStores()
  //   .then(response => (this.test = response.data))
  //   .catch(error => console.log(`There was an error: ${error.response}`));
  // GameService.getDeals(`Skyrim`).then(response => response.data);
  // },

  async mounted() {
    // this.getDailyDeals();
  },

  computed: {
    query() {
      return store.query;
    }
  },

  data: () => ({
    apiHost: `https://www.cheapshark.com/api/1.0/`,
    deals: [],
    results: [],
    test: []
  }),

  methods: {
    // TODO: Make these into a service or mixin!
    // getDailyDeals() {
    //   fetch(`${this.apiHost}/deals`)
    //     .then(response => response.json())
    //     .then(result => (this.deals = result))
    //     // .then(result => console.log(result))
    //     .catch(error => console.log("error", error));
    // },
    // searchDeals(gameTitle) {
    //   fetch(`${this.apiHost}/deals?title=${gameTitle}`)
    //     .then(response => response.json())
    //     .then(result => (this.results = result))
    //     .then(result => console.log(result))
    //     .catch(error => console.log("error", error));
    // }
  },

  watch: {
    // query() {
    //   GameService.getDeals(this.query).then(response =>
    //     console.log(response.data)
    //   );
    // }
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
