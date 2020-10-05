<template>
  <div id="app">
    <h1 class="title">Björn's Vue-Basics-App</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <p class="subtitle is-3" style="padding-top: 2em;">Scroll down!</p>
    <HeroSection msg="Einkaufsliste mit Vue"></HeroSection>
    <ShoppingList></ShoppingList>
    <HeroSection msg="GitHub Component"></HeroSection>
    <GitHub username="bjoernkneisel"></GitHub>
    <HeroSection msg="THE END"></HeroSection>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ShoppingList from '@/components/ShoppingList.vue'
import GitHub from '@/components/GitHub.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    ShoppingList,
    GitHub,
    HeroSection
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
body {
  overflow: hidden; /* Hide scrollbars */
}
</style>
