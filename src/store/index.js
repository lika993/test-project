import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import brands from './modules/brands'
import basket from './modules/basket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    products,
    brands,
    basket
  }
})
