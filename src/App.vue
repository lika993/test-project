<template>
  <div id="app">
    <header class="header header-flex">
      <a href="/" class="logo"><img src="./assets/images/logo.png" alt=""></a>
      <div class="content">
        <v-container>
          <div class="content-flex">
               <span>
     <router-link to="/basket"> count: {{productsInBasket.length}}</router-link>
    </span>
          </div>
        </v-container>
      </div>
    </header>
    <MainLayout @filtered='test'>
        <template v-slot:content>
          <router-view :id="id"></router-view>
        </template>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from './components/layouts/MainLayout'
export default {
  name: 'App',
  data () {
   return {
      id: null
   }
  },
  components: {
    MainLayout
  },
  computed: {
    productsInBasket () {
      return this.$store.getters.getProductsInBasket
    }
  },
  methods: {
    test (payload) {
      this.id = payload
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  padding-top: 0;
}
.header {
  height: 120px;
  border-bottom: #dadada 1px solid;
  position: relative;
}
.header-flex {
  display: flex;
  min-width: 100%;
  align-items: center;
}
.logo{
  position: absolute;
}
.right {

}
.content{
  min-width: 100%;
}
.content-flex {
  display: flex;
  justify-content: flex-end;
}
</style>
