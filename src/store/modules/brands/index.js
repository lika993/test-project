import Axios from 'axios'

const state = {
  brands: [

  ]
}

const getters = {
  getBrands: state => state.brands
}

const actions = {
  fetchBrands (context) {
    return new Promise((resolve, reject) => {
      Axios.get('http://localhost:3000/api/brands')
        .then(response => {
          context.commit('setBrands', {listName: 'brands', listValues: response.data})
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  setBrands (state, {listName, listValues}) {
    state[listName] = listValues
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
