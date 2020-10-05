<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <ShoppingList></ShoppingList>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
