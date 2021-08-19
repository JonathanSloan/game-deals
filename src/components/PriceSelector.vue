<template>
  <q-item class="column q-mb-sm">
    <span class="text-body2 q-mb-sm"> Prices </span>

    <q-checkbox v-model="tenOrLess" label="$10 or less" class="q-mb-sm" dense />

    <q-checkbox v-model="fiveOrLess" label="$5 or less" class="q-mb-sm" dense />

    <q-checkbox v-model="free" label="Free" class="q-mb-sm" dense />

    <div class="flex row items-center space-between">
      <q-checkbox v-model="customPriceRange" class="q-mb-xs q-mr-sm" dense />

      <q-input placeholder="Min" outlined dense style="width:75px;" />

      <span>&nbsp;&mdash;&nbsp;</span>

      <q-input placeholder="Max" outlined dense style="width:75px;" />
    </div>
  </q-item>
</template>

<script>
export default {
  name: "PriceSelector",

  data: () => ({
    customPriceRange: false,
    fiveOrLess: false,
    free: false,
    tenOrLess: false
  })
};
</script>
