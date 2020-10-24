<template>
  <q-item>
    <q-item-section middle avatar>
      <q-img :src="img" style="width:90px;" />
    </q-item-section>

    <q-item-section top>
      <q-item-label class="q-mb-xs">
        {{ title }}
      </q-item-label>

      <!-- If on sale -->
      <q-item-label v-if="isDeal">
        <span class="q-mr-sm strike-out"> {{ normalPrice }} </span>
        <span class="q-mr-sm">${{ salePrice }}</span>

        <!-- Savings percentage -->
        <q-badge align="top">
          {{ savings }}
        </q-badge>
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
      <q-item-label class="q-pt-sm">
        <q-btn
          type="a"
          :href="`${link}`"
          target="_blank"
          label="View Deal"
          color="primary"
          size="sm"
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
    link: String
  }
};
</script>
