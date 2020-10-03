<template>
  <v-container class="grey lighten-5">
    <v-row
    >
      <v-col
      v-for="(product,index) in products"
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
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout'
export default {
  props: ["id"],
  components: {
    MainLayout
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  filters: {
    makePath: function (value) {
      return require('../assets' + value)
    }
  },
  computed: {
    products () {
      let products = this.$store.getters.getProducts
      if (this.id) {
        return products.filter(product => product.brand == this.id)
      }
      return products
    }
  },
  methods: {
    addToBasket (product) {
      this.$store.commit('setToBasket', product)
    }
  }
}
</script>

<style>
  .v-card{
    margin-bottom: 20px;
  }
</style>
