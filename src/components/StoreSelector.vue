<template>
  <q-expansion-item v-model="storePanel">
    <template v-slot:header>
      <q-item-section class="no-padding text-body2">
        Stores {{ storeSelection }}
      </q-item-section>
    </template>

    <q-separator />

    <q-scroll-area style="height: calc(100vh - 425px);" class="q-ml-md">
      <q-checkbox
        v-model="selectedStores"
        v-for="store in allStores"
        :key="store.storeID"
        :val="store.storeID"
        :label="store.storeName"
        class="q-mb-sm full-width"
        dense
      />
    </q-scroll-area>
  </q-expansion-item>
</template>

<script>
import GameService from "../services/GameService";
import { store, actions } from "../store/store";

export default {
  name: "StoreSelector",

  computed: {
    storeSelection() {
      return `( ${this.selectedStores.length}/${this.allStores.length} Selected )`;
    }
  },

  mounted: async function() {
    // Get all available store data
    await GameService.getStores();

    // Set retrieved data
    this.allStores = store.stores.map(store => store);

    // Select all stores by default
    this.selectedStores = this.allStores.map(store => store.storeID);
  },

  data: () => ({
    allStores: [],
    selectedStores: [],
    storePanel: true,
    stores: []
  }),

  watch: {
    // Update Selected Stores
    async selectedStores() {
      actions.setSelectedStores(this.selectedStores);
      actions.updateResults(await GameService.findDeals(store.searchQuery));
    }
  }
};
</script>
