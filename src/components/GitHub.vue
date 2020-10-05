<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column">
      <div class="header">
        <h1 class="title">GitHub-Component</h1>
        <p class="subtitle is-6">Fetches Data from GitHub Api.</p>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-256x256">
            <img :src="user.avatar_url" alt="Placeholder">
          </figure>
        </div>
        <div class="card-content">
          <a class="header" v-bind:href="userUrl">{{ user.name}}</a>
          <div class="media">
            <time datetime="user.created_at">Beigetreten in: {{user.created_at}}</time>
          </div>
          <div class="content">
            <p class="subtitle is-5">Nutzerbeschreibung:</p>
            {{user.bio}}
          </div>
          <div class="extra-content">
            <a><i class="user-icon"></i>{{user.followers}} Follower</a>
          </div>
      </div>
    </div>
    </div>
    <div class="column"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      userUrl: ''
    }
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
  created () {
    console.log("Trying to fetch data from github.com for User:" + this.username +"!");
    this.$axios.get(`https://api.github.com/users/${this.username}`)
      .then(response => {
        this.user = response.data;
        console.log(response.data);
        this.userUrl = response.data.html_url;
      })
  }
}
</script>
<style>

</style>