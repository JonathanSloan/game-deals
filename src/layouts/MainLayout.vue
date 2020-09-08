<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="fal fa-sliders-h" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar icon="fas fa-gamepad-alt" class="q-ml-none" size="xl" />
          <!-- Title Here -->
        </q-toolbar-title>

        <q-input v-model="search" type="search" debounce="500" filled dense>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered> </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { store, mutations } from "../store/store";

export default {
  computed: {
    query() {
      return store.query;
    }
  },

  data() {
    return {
      left: false,
      search: ""
    };
  },

  methods: {
    setQuery: mutations.setQuery
  },

  watch: {
    search() {
      this.setQuery(this.search);
    }
  }
};
</script>
