<template>
  <q-layout view="lHh lpR lFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar class="q-pa-xs ">
        <q-btn dense flat round icon="fad fa-sliders-h" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar icon="fad fa-gamepad-alt" class="q-ml-none" size="xl" />
          <!-- Title Here -->
        </q-toolbar-title>

        <SearchInput :dense="true" :filled="true" class="lt-sm" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" show-if-above bordered>
      <SearchInput :filled="true" class="gt-sm" />

      <q-list bordered>
        <q-item-label header class="row items-center text-body1 q-pb-sm">
          <q-icon name="fal fa-cog" class="q-mr-sm" />
          <span>Search Settings</span>
        </q-item-label>

        <StoreSelector :dense="true" />

        <q-separator />

        <!-- TODO: make this a component -->
        <q-item class="column">
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
            class="q-mb-xs"
            dense
          />

          <div class="flex row items-center space-between">
            <q-checkbox v-model="tenOrLess" class="q-mb-xs q-mr-sm" dense />

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
      left: false,
      fiveOrLess: false,
      tenOrLess: false
    };
  }
};
</script>

<style lang="scss">
.min-mac-input
  > .q-field__inner
  > .q-field__control
  > .q-field__control-container
  > input.q-field__natives {
  .q-field__native,
  .q-field__prefix,
  .q-field__suffix,
  .q-field__input {
    padding: 0 !important;
  }
}
</style>
