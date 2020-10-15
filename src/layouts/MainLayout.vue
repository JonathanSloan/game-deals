<template>
  <q-layout view="lHh lpR lFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar class="q-px-sm q-py-xs">
        <q-btn dense flat round icon="fal fa-sliders-h" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar icon="fad fa-gamepad-alt" class="q-ml-none" size="xl" />
          <!-- Title Here -->
        </q-toolbar-title>

        <SearchInput :dense="true" :filled="true" class="lt-sm" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" show-if-above :width="250" bordered>
      <SearchInput :filled="true" class="gt-sm" />

      <q-list>
        <q-item-label header class="row items-center text-body1 q-pb-sm">
          <q-icon name="fal fa-cog" class="q-mr-sm" />
          <span>Search Settings</span>
        </q-item-label>

        <StoreSelector :dense="true" />

        <q-separator />

        <!-- TODO: make this a component -->
        <q-item class="column q-mb-sm">
          <span class="text-body2 q-mb-sm"> Prices </span>

          <q-checkbox
            v-model="fiveOrLess"
            label="$5 or less"
            class="q-mb-sm"
            dense
          />

          <q-checkbox
            v-model="tenOrLess"
            label="$10 or less"
            class="q-mb-sm"
            dense
          />

          <div class="flex row items-center space-between">
            <q-checkbox
              v-model="customPriceRange"
              class="q-mb-xs q-mr-sm"
              dense
            />

            <q-input
              placeholder="Min"
              outlined
              dense
              style="width:75px;"
              class="min-max-input"
            />

            <span>&nbsp;&mdash;&nbsp;</span>

            <q-input
              placeholder="Max"
              outlined
              dense
              style="width:75px;"
              class="min-max-input"
            />
          </div>
        </q-item>

        <q-separator />

        <q-item>
          <q-item-section>
            <q-btn class="bg-primary q-ma-sm"> Apply Settings</q-btn>
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
import { Platform } from "quasar";
import SearchInput from "../components/SearchInput";
import StoreSelector from "../components/StoreSelector";

export default {
  components: {
    SearchInput,
    StoreSelector
  },

  beforeMount() {
    console.log(Platform.is);
  },

  data() {
    return {
      customPriceRange: false,
      left: false,
      fiveOrLess: false,
      tenOrLess: false
    };
  }
};
</script>
