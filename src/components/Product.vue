<template>
  <v-card
    class="mx-auto">
    <v-img
      :src="product.image | makePath"
      height="200px"
    ></v-img>
    <v-card-title>
      {{ product.title }}
    </v-card-title>
    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip> Brand {{ product.brand }}</v-chip>
        <v-chip> {{ product.regular_price.value }} {{ product.regular_price.currency }} </v-chip>
        <v-chip v-if="product.count > 1"> {{ product.count }} </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="addToBasket(product)" v-if="isBasket"
             color="orange"
             text
      >
        Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      required: true
    },
    isBasket: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    addToBasket (product) {
      this.$store.commit('setToBasket', product)
    }
  }
}
</script>
