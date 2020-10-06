<template>
  <div class="root">
    <h1 class="title">Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.title"> {{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
  import shop from '@/api/shop';
  import store from '@/store/index.js';

  export default {
    // data() {
    //   return {
    //     products: []
    //   }
    // },
    computed: {
      products() {
        return store.state.products
      }
    },
    created() {
      shop.getProducts(products => {
        store.commit('setProducts', products)
      })
    }
  }
</script>
