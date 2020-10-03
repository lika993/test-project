<template>
  <div class="basket-page">
   В вашей корзине {{productsInBasket.length}} товара(ов)
   <v-container class="grey lighten-5">
    <v-row v-if="productsInBasket.length"
    >
      <v-col
      v-for="(product,index) in productsInBasket"
      :key="index" cols="12"
      md="3"
      >
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
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip> Brand {{ product.brand }}</v-chip>

        <v-chip> {{ product.regular_price.value }} {{ product.regular_price.currency }} </v-chip>
</v-chip-group>
    </v-card-text>

        <v-card-actions>
          <v-btn @click="addToBasket(product)"
          color="orange"
          text
          >
          Explore
      </v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
 computed: {
   productsInBasket () {
    console.log(this.$store.getters.getProductsInBasket)
      return this.$store.getters.getProductsInBasket
    }
 },
  filters: {
    makePath: function (value) {
      return require('../assets' + value)
    }
  }
}
</script>

<style scoped>
  .basket-page {
     padding-top: 30px
  }
  
</style>
