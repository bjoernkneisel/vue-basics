import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = Unique source of truth
    products: []
  },
  mutations: { // change state only with mutations (history)
    setProducts(state, products) {
      state.products = products;
    }
  },
  getters: { // = computed properties, component-access
    productsCount() {
      // ...
    }
  },
  actions: { // make API calls here, but never alter our state.
    fetchProducts() {

    }
  }
});