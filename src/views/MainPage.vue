<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
        v-for="(product,index) in products"
        :key="index" cols="12"
        md="3"
        >
          <product :product="product"></product>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainPageLayout from '@/components/layouts/MainPageLayout'
import Product from '@/components/Product'

export default {
  props: ['id', 'isNavbar'],
  components: {
    MainPageLayout, Product
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      let products = this.$store.getters.getProducts
      if (this.id) {
        return products.filter(product => product.brand === this.id)
      }
      return products
    }
  },
  methods: {

  }
}
</script>

<style>
  .v-card{
    margin-bottom: 20px;
  }
</style>
