<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar class="q-px-sm q-py-xs">
        <q-btn
          dense
          flat
          round
          icon="fal fa-sliders-h"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          <q-avatar icon="fad fa-gamepad-alt" class="q-ml-none" size="xl" />
        </q-toolbar-title>

        <SearchInput :dense="true" :filled="true" class="lt-sm" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" show-if-above :width="250" bordered>
      <SearchInput :filled="true" class="gt-sm" />

      <q-list>
        <q-item-label header class="row items-center text-body1 q-pb-sm">
          <q-icon name="fal fa-cog" class="q-mr-sm" />
          <span>Search Settings</span>
        </q-item-label>

        <StoreSelector :dense="true" />

        <q-separator />

        <PriceSelector />

        <q-separator />

        <q-item class="q-pb-none">
          <q-item-section class="text-center no-margin">
            <q-btn class="bg-primary q-ma-sm" disable> Apply Filter </q-btn>
            <span class="text-weight-light text-italic">
              ( Filtering is currently disabled )
            </span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import PriceSelector from "../components/PriceSelector";
import SearchInput from "../components/SearchInput";
import StoreSelector from "../components/StoreSelector";

export default {
  components: {
    PriceSelector,
    SearchInput,
    StoreSelector
  },

  data: () => ({
    drawer: false
  })
};
</script>
