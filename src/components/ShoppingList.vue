<template>
  <div class="shoppingList">
    <h2 class="title is-1"> {{ header.toLocaleUpperCase() }} </h2>
    <p class="title is-4" v-if="shoppingItems.length === 0">Glückwunsch, du hast keine Sachen auf dem Einkaufszettel!</p>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <input class="subtitle" v-model="newItem.count" type="text" placeholder="Menge">
      </div>
      <div class="column">
        <input class="subtitle" v-model="newItem.name" type="text" placeholder="Füge eine Sache hinzu">
      </div>
      <div class="column">
        <button class="button is-primary" :disabled="newItem.length === 0" @click="saveItem()">Sache speichern</button>
      </div>
      <div class="column"></div>
    </div>
    <div class="columns" id="nichtMarkierbar" v-for="item in shoppingItems" :key="item.name">
      <div class="column is-one-third"></div>
      <div class="column">
        <p class="subtitle is-6 has-text-right" :class="{strikeout: item.purchased}"> {{ item.count }} x</p>
      </div>
      <div class="column" @click="item.purchased = !item.purchased">
        <p class="subtitle is-6 has-text-left" :class="{strikeout: item.purchased}"> {{ item.name}}</p>
        
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
        // { count: '20', name: 'Partyhüte'},
        // { count: '20', name: 'Plastikbecher'},
        // { count: '2', name: 'Brettspiele'},
    ],
    newItem: [
      { id: '', count: '', name: ''}
    ],
    header: 'Einkaufsliste'
    }
  },
  methods: {
    saveItem: function() {
      this.newItem.id = this.shoppingItems.length;
      this.shoppingItems.push({id: this.newItem.id, count: this.newItem.count, name: this.newItem.name, purchased: false});
      this.newItem = [ { count: '', name: ''} ];
    },
  }
}
</script>

<style>
.strikeout {
  text-decoration: line-through;
}

#nichtMarkierbar {
  -ms-user-select: None;
  -moz-user-select: None;
  -webkit-user-select: None;
  user-select: None;
}
</style>