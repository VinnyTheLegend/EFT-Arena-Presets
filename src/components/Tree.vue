<script setup lang="ts">
import Tile from './Tile.vue'
import { ref, onMounted, onUpdated } from 'vue';

interface Props {
  CURR_TREE: string
}

let props = defineProps<Props>()

let presets: { [key: string]: (Preset|{}[])[] } = {
  'assault': [],
  'cqb': [],
  'scout': [],
  'marksman': [],
  'collection': []
}

let tier_1 = ref<Preset|{}[]>([])
let tier_2 = ref<Preset|{}[]>([])
let tier_3 = ref<Preset|{}[]>([])


async function fetchJson() {
  const preset_names = ['assault']
  const tiers = [2,3]
  for (let preset in preset_names) {
    for (let tier in tiers) {
      console.log(`/src/assets/${preset_names[preset]}/t${tiers[tier]}.json`)
      await fetch(new URL(`/src/assets/${preset_names[preset]}/t${tiers[tier]}.json`, import.meta.url).href)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          presets[preset_names[preset]].push(data)
        })
        .catch(error => console.log(error));
    }
  }
}

(async () => {
  await fetchJson()

  tier_1.value = presets[props.CURR_TREE][0]
  tier_2.value = presets[props.CURR_TREE][0]
  tier_3.value = presets[props.CURR_TREE][2]
})()




onUpdated(() => {
    tier_1.value = presets[props.CURR_TREE][0]
    tier_2.value = presets[props.CURR_TREE][0]
    tier_3.value = presets[props.CURR_TREE][1]
})


</script>

<template>
<div class="border-solid border-2 border-sky-500 mx-6 overflow-auto relative"  style="height: 90vh">

  <!-- tier 1 -->
  <div class="border-2 border-green-500 sticky w-full left-0 h-20 flex items-center pl-5 bg-gray-900">
    <h1 class="font-extrabold text-3xl">Tier 2</h1>
  </div>
  <div class="flex">
    <div class="ml-auto self-center"></div>
    <div>
      <div class="grid gap-24 grid-cols-4 place-items-center justify-around content-around border-2 border-pink-500 mt-4 mb-4" style="width:1500px">
        <Tile v-for="(preset, i) in tier_2" :CURR_TREE="CURR_TREE" :preset="preset" :tier="2" :index="i" :key="i"/>
      </div>
    </div>
    <div class="mr-auto self-center"></div>
  </div>

  <!-- tier 2 -->
  <div class="border-2 border-green-500 sticky w-full left-0 h-20 flex items-center pl-5 bg-gray-900 -z-10">
    <h1 class="font-extrabold text-3xl">Tier 3</h1>
  </div>
  <div class="flex">
    <div class="ml-auto self-center"></div>
    <div>
      <div class="grid gap-24 grid-cols-4 place-items-center justify-around content-around border-2 border-pink-500 mt-4" style="width:1500px">
        <Tile v-for="(preset, i) in tier_3" :CURR_TREE="CURR_TREE" :preset="preset" :tier="3" :index="i" :key="i"/>
      </div>
    </div>
    <div class="mr-auto self-center"></div>
  </div>

</div>
</template>

<style scoped>


</style>
