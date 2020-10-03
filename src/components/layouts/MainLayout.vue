<template>
    <v-card style="min-height:100vh">
        <v-navigation-drawer
        absolute
        permanent
        left
        >
        <v-list dense>
          <a href="" v-for="brand in brands" @click.prevent="filter(brand.id)"
            :key="brand.title">
              <v-list-item
        >
            <v-list-item-content>
           {{ brand.title }}
            </v-list-item-content>
        </v-list-item>
          </a>
        </v-list>
        </v-navigation-drawer>
        <div class="content">
            <slot name="content"></slot>
        </div>
  </v-card>
</template>

<script>
export default {
  props: ["id"],
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
    }
  }
}
</script>

<style>
  .content{
    padding-left: 290px;
  }
</style>
