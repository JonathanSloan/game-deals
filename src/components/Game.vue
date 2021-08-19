<template>
  <q-item>
    <q-item-section middle avatar>
      <q-img :src="img" style="width:90px;" />
    </q-item-section>

    <q-item-section top>
      <q-item-label class="text-body1 q-mb-xs">
        {{ title }}
      </q-item-label>

      <!-- If on sale -->
      <q-item-label v-if="isDeal" class="text-body2 q-py-xs">
        <!-- Savings percentage -->
        <q-badge align="top" color="green-7" class="q-mr-sm">
          {{ savings }}
        </q-badge>

        <span class="q-mr-sm strike-out"> {{ normalPrice }} </span>
        <span class="q-mr-sm">${{ salePrice }}</span>
      </q-item-label>

      <!-- If not on sale -->
      <q-item-label v-else> ${{ normalPrice }} </q-item-label>

      <!-- Ratings -->
      <q-item-label class="flex items-center q-pt-xs" caption>
        <!-- Metacritic Rating -->
        <img src="../../public/metacritic.png" class="rating-icon" />
        <span class="q-mr-md">
          {{
            metacriticScore === `0`
              ? `Metacritic: &mdash;`
              : `Metacritic: ${metacriticScore}%`
          }}
        </span>

        <!-- Steam Rating -->
        <img src="../../public/steam.svg" class="rating-icon" />
        <span class="q-mr-xs">
          {{
            steamRatingPercent === `0`
              ? `Steam: &mdash;`
              : `Steam: ${steamRatingPercent}%`
          }}
        </span>
      </q-item-label>
      <!-- Redirect to deal -->
      <q-item-label class="q-pt-sm row items-center">
        <q-btn
          type="a"
          :href="`${link}`"
          target="_blank"
          class="q-mr-md"
          label="View Deal"
          color="primary"
          size="sm"
        >
          <q-tooltip>View Game Deal</q-tooltip>
        </q-btn>

        <img
          :src="`https://cheapshark.com${storeBanner}`"
          style="height:24px;"
        />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    isDeal: Boolean,
    normalPrice: String,
    salePrice: String,
    savings: String,
    metacriticScore: String,
    steamRatingPercent: String,
    storeName: String,
    storeIcon: String,
    storeBanner: String,
    link: String
  }
};
</script>
