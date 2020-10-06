import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop';

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
    availableProducts(state) {
      return state.products.filter(products => products.inventory > 0);
    }
  },
  actions: { // make API calls here, but never alter our state.
    fetchProducts ({commit}) {
      return new Promise((resolve) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve();
        })
      });
    }
  }
});