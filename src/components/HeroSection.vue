<template>
<div class="root">
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ msg }}
        </h1>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
    } 
  },
  props: {
    msg: String
  }
}
</script>
<style>
.root {
  margin-top: 5em;
  margin-bottom: 3em;
}
</style>