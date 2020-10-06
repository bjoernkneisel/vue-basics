<template>
  <div class="root">
    <h1 class="title">Product List</h1>
    
    <div class="columns">
      <div class="column -is-one-fifth"></div>
      <div class="column">
        <img v-if="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
        <ul v-else>
      <li v-for="product in products" :key="product.title"> {{product.title}} - {{product.price}} € - {{product.inventory}}
      </li>
    </ul>
      </div>
      <div class="column">
        <ul v-for="product in products" :key="product.title">
          <li>
            <span class="tag is-black" @click="addProductToCart(product)">In den Wagen legen</span>
          </li>
        </ul>
      </div>
      <div class="column is-one-fifth"></div>
    </div>
    <br>
    <hr>
    <br>
    <section v-if="cart.length != 0">
      <h2 class="subtitle">Einkaufswagen</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">{{item.quantity}} - {{item.title}} - {{item.price}} €</li> 
      </ul>
      <p  class="subtitle is-6 subtotal">Summe: {{subtotal}} €</p>
      <button class="button is-primary" @click="$store.dispatch('checkoutCart')">Bezahlen</button>
    </section>
      <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
      }
    },
    computed: {
      products() {
        return this.$store.getters.availableProducts;
      },
      cart() {
        console.log(this.$store.getters.cartItems);
        return this.$store.getters.cartItems;
      },
      subtotal() {
        return this.$store.getters.subTotal;
      },
      productIsInStock() {
        return this.$store.getters.productIsInStock;
      }
    },
    methods: {
      addProductToCart(product) {
        console.log('Calling addProductToCartAction');
        this.$store.dispatch('addProductToCart', product);
      }
    },
    created() {
      this.loading = true;
      this.$store.dispatch('fetchProducts').then(()=> this.loading = false);
    }
  }
</script>
