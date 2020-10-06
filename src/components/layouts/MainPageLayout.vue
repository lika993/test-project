<template>
  <v-app>
    <v-app-bar app clipped-left>
      <header class="header header-flex">
        <a href="/" class="logo" @click.prevent="resetFilter"><img src="../../assets/images/logo.png" alt=""></a>
        <div class="content">
            <v-container>
              <div class="content-flex">
                <span>
                  <router-link to="/basket"> count: {{this.$parent.productsInBasket.length}}</router-link>
                </span>
              </div>
            </v-container>
        </div>
      </header>
    </v-app-bar>
    <v-navigation-drawer app v-if="$route.name === 'MainPage'" style="top: 90px">
      <v-list dense>
        <a href="" v-for="brand in brands" @click.prevent="filter(brand.id)"
           :key="brand.title">
          <v-list-item>
            <v-list-item-content>
              {{ brand.title }}
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ['id', 'isNavbar'],
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ]
    }
  },
  created () {
    this.$store.dispatch('fetchBrands')
  },
  computed: {
    brands () {
      return this.$store.getters.getBrands
    }
  },
  methods: {
    filter (id) {
      console.log(id)
      this.$emit('filtered', id)
    },
    resetFilter () {
      console.log(this.$route)
      if (this.$route.path !== '/ ') {
        this.$router.push('/')
      }
      this.filter(null)
    }
  }
}
</script>

<style>
</style>
