<script setup lang="ts">
import { ref } from 'vue'
import Tree from './components/Tree.vue'

let CURR_TREE = ref('assault')

function NavButton(event: Event) {
  const target = event.target as HTMLButtonElement
  CURR_TREE.value = target.id
}

</script>

<template>
  <div class="nav-bar">
    <button class="class-button" id="assault" v-on:click="NavButton" :class="{selected: (CURR_TREE === 'assault')}">ASSAULT</button>
    <button class="class-button" id="cqb" v-on:click="NavButton" :class="{selected: (CURR_TREE === 'cqb')}">CQB</button>
    <button class="class-button" id="scout" v-on:click="NavButton" :class="{selected: (CURR_TREE === 'scout')}">SCOUT</button>
    <button class="class-button" id="marksman" v-on:click="NavButton" :class="{selected: (CURR_TREE === 'marksman')}">MARKSMAN</button>
    <button class="class-button" id="collection" v-on:click="NavButton" :class="{selected: (CURR_TREE === 'collection')}">COLLECTION</button>
  </div>


  <Tree :CURR_TREE="CURR_TREE" />
</template>

<style scoped>
.class-button {
  background-color: gray;
  padding: 8px 0px 8px 0px;
  margin-right: 2px;
  margin-bottom: 2px;
  width: 125px;
}
.class-button:hover {
  background-color: darkgray;
}

.class-button.selected {
  background-color: darkslategray;
}

</style>
