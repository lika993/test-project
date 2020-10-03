import Axios from 'axios'

const state = {
  products: [

  ]
}

const getters = {
  getProducts: state => state.products
}

const actions = {
  fetchProducts (context) {
    return new Promise((resolve, reject) => {
      Axios.get('http://localhost:3000/api/products')
        .then(response => {
          context.commit('setProducts', {listName: 'products', listValues: response.data})
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  setProducts (state, {listName, listValues}) {
    state[listName] = listValues
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
