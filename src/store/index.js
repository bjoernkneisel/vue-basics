import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = Unique source of truth
    products: [],
    // {id, quantity}
    cart: [],
    checkoutStatus: null
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
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.cart = [];
    }
  },
  getters: { // = computed properties, component-access
    availableProducts(state) {
      return state.products.filter(products => products.inventory > 0);
    },
    cartItems(state) {
      return state.cart;
    },
    subTotal (state, getters) {
      return getters.cartItems.reduce((total, product)=> total + product.price * product.quantity, 0);
    },
    productIsInStock() {
      return (product) => {
        return product.inventory > 0;
      }
    },
    getProductById(state) {
      return id => {
        return state.products.find(product => product.id === id);
      }
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
      if (context.getters.productIsInStock(product)) {
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
    },
    // Action to proceed to checkout/payment processing
    checkoutCart({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart');
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'failure')
        }
      )
    } 
  }
});