<template>
  <div class="root">
    <h1 class="title">Product List</h1>
    <img v-if="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
    <ul v-else>
      <li v-for="product in products" :key="product.title"> {{product.title}} - {{product.price}} € - {{product.inventory}}
      <span class="tag is-primary" @click="addProductToCart(product)">In den Wagen legen</span>
      </li>
    </ul>
    <br>
    <h2 class="subtitle">Einkaufswagen</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">{{item.quantity}} - {{item.title}} - {{item.price}} €</li> 
    </ul>
    <p class="subtitle is-6 subtotal">Summe: {{subtotal}} {{subTotal}} €</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        subTotal: 0
      }
    },
    computed: {
      products() {
        return this.$store.getters.availableProducts;
      },
      cart() {
        return this.$store.getters.cartItems;
      },
      subtotal() {
        console.log(this.$store.getters.cartItems);
        return this.$store.getters.cartItems.forEach(element => {
          console.log("SubTotal:" + this.subTotal);
          this.subTotal = this.subTotal + (element.price * element.quantity)
        });
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
