<template>
  <div class="basket-page">
   В вашей корзине {{countProductsInProducts}} товара(ов)
   <v-container class="lighten-5" v-if="countProductsInProducts">
    <v-row>
      <v-col
      v-for="(product,index) in productsInBasket" :key="index" cols="12"  md="3">
        <product :product="product" :isBasket="false"></product>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import {groupBy} from 'lodash'
import Product from '@/components/Product'

export default {
  components: {
    Product
  },
  computed: {
    countProductsInProducts () {
      return this.$store.getters.getProductsInBasket.length
    },
    productsInBasket () {
      let basketProducts = groupBy(this.$store.getters.getProductsInBasket, 'id')
      let arr = []
      for (var a in basketProducts) {
        basketProducts[a][0].count = basketProducts[a].length
        arr.push(basketProducts[a][0])
      }
      return arr
    }
  },
  created () {
    this.$emit('showSideBar', false)
  }
}
</script>

<style scoped>
  .basket-page {
     padding-top: 30px
  }
</style>
