<template>
  <div class="shoppingList">
    <h2 class="title is-1"> {{ header.toLocaleUpperCase() }} </h2>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <input class="subtitle" v-model="newItem.count" type="text" placeholder="Menge">
      </div>
      <div class="column">
        <input class="subtitle" v-model="newItem.name" type="text" placeholder="Füge eine Sache hinzu">
      </div>
      <div class="column">
        <button class="button is-primary" @click="saveItem()">Sache speichern</button>
      </div>
      <div class="column"></div>
    </div>
    <div class="columns" v-for="item in shoppingItems" :key="item.name">
      <div class="column is-one-third"></div>
      <div class="column">
        <p class="subtitle is-6 has-text-right"> {{ item.count }} x</p>
      </div>
      <div class="column">
        <p class="subtitle is-6 has-text-left"> {{ item.name}}</p>
      </div>
      <div class="column is-one-third"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingItems: [
        { count: '20', name: 'Partyhüte'},
        { count: '20', name: 'Plastikbecher'},
        { count: '2', name: 'Brettspiele'},
    ],
    newItem: [
      { count: '', name: ''}
    ],
    header: 'Einkaufsliste'
    }
  },
  methods: {
    saveItem: function() {
      this.shoppingItems.push({count: this.newItem.count, name: this.newItem.name});
      this.newItem = [ { count: '', name: ''} ];
    }
  }
}
</script>