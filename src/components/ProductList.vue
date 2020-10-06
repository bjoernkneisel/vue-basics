<template>
  <div class="root">
    <h1 class="title">Product List</h1>
    <img v-if="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
    <ul v-else>
      <li v-for="product in products" :key="product.title"> {{product.title}} - {{product.price}} €</li>
    </ul>
  </div>
</template>

<script>
  import store from '@/store/index.js';

  export default {
    data() {
      return {
        loading: false
      }
    },
    computed: {
      products() {
        return store.getters.availableProducts;
      }
    },
    created() {
      this.loading = true;
      store.dispatch('fetchProducts').then(()=> this.loading = false);
    }
  }
</script>
