<template>
  <div id="app">
    <MainPageLayout @filtered='test' :isNavbar="true" @showSideBar="show">
        <template v-slot:content>
          <router-view :id="id"></router-view>
        </template>
    </MainPageLayout>
  </div>
</template>

<script>
import MainPageLayout from './components/layouts/MainPageLayout'
export default {
  name: 'App',
  data () {
    return {
      id: null
    }
  },
  components: {
    MainPageLayout
  },
  computed: {
    productsInBasket () {
      let basketProducts = this.$store.getters.getProductsInBasket
      return basketProducts
    }
  },
  methods: {
    show () {
      console.log('this', this)
    },
    test (payload) {
      this.id = payload
    }
  }
}
</script>

<style>
@font-face {
font-family: 'Proxima Nova';
src: url('./assets/fonts/ProximaNova-RegularIt.eot'),
  url('./assets/fonts/ProximaNova-RegularIt.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/ProximaNova-Regular.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}
#app {
  font-family: 'Proxima Nova';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  padding-top: 0;
}
.header {
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
