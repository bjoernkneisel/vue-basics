import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = Unique source of truth
    products: [],
    // {id, quantity}
    cart: []
  },
  mutations: { // change state only with mutations (history)
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, product) {
      console.log('Running mutation');
      console.log(product.id);
      state.cart.push({
        id: product.id,
        quantity: 1,
        title: product.title,
        price: product.price
      });
    },
    incrementItemQuantity(state, cartItem) {
      console.log(cartItem);
      cartItem.quantity++;
    },
    decreaseProductInventory(state, product) {
      console.log('X.X'+product.inventory);
      product.inventory--;
      console.log('Fehler coming in!');
      console.log('X.-x'+product.inventory);
    }
  },
  getters: { // = computed properties, component-access
    availableProducts(state) {
      return state.products.filter(products => products.inventory > 0);
    },
    cartItems(state) {
      return state.cart;
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
    },
    addProductToCart (context, product) {
      console.log(product.inventory);
      console.log('Running addProductToCart');
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id);
        if (!cartItem) {
          // push Product to cart
          console.log('Trying to run mutation pushProductToCart');
          context.commit('pushProductToCart', product);
        } else {
          // increment cart quantity
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decreaseProductInventory', product);
      }

    } 
  }
});