const state = {
  productsInBasket: [
  ]
}

const getters = {
  getProductsInBasket: (state) => {
    let products = state.productsInBasket
    return products
  }
}

const actions = {
}

const mutations = {
  setToBasket (state, product) {
    state.productsInBasket.push(product)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
