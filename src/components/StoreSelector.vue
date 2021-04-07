<template>
  <q-expansion-item v-model="storePanel">
    <template v-slot:header>
      <q-item-section class="q-pa-xs">
        <span>
          <span class="text-body2">Stores</span>
          <span class="text-weight-light">{{ storeSelection }}</span>
        </span>
      </q-item-section>
    </template>

    <q-separator />

    <q-scroll-area style="height: 200px; max-width: 249px;" class="q-ml-md">
      <q-checkbox
        v-model="selectedStores"
        v-for="store in allStores"
        :key="store.storeID"
        :val="store.storeID"
        :label="store.storeName"
        class="q-mb-sm"
        style="width:230px;"
        dense
      />
    </q-scroll-area>
  </q-expansion-item>
</template>

<script>
import GameService from "../services/GameService";

export default {
  name: "StoreSelector",

  computed: {
    storeSelection() {
      return `( ${this.selectedStores.length}/${this.allStores.length} Selected )`;
    }
  },

  mounted() {
    // Get list of available stores
    GameService.getStores()
      .then(res => (this.allStores = res.data))
      .then(this.selectAllStores());
  },

  data: () => ({
    allStores: [],
    selectedStores: [],
    storePanel: true,
    stores: []
  }),

  methods: {
    selectAllStores() {
      for (let n = 1; n < 32; n++) {
        this.selectedStores.push(String(n));
      }
    }
  }
};
</script>
