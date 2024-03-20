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
  const tiers = [1]
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

async function getPresetData() {
  await fetchJson()

  console.log('setting ref')
  tier_1.value = presets[props.CURR_TREE][0]
  tier_2.value = presets[props.CURR_TREE][1]
  tier_3.value = presets[props.CURR_TREE][2]
}

console.log('setup')
getPresetData()
onMounted(() => {
  console.log('mounted')
})

onUpdated(() => {
    tier_1.value = presets[props.CURR_TREE][0]
    tier_2.value = presets[props.CURR_TREE][1]
    tier_3.value = presets[props.CURR_TREE][2]
    console.log(props.CURR_TREE)
})


</script>

<template>
<div class="border-solid border-2 border-sky-500 mt-5 mx-6 p-5 flex overflow-auto"  style="height: 90vh">
  <div class="ml-auto self-center"></div>
  <div>
    <div class="grid gap-24 grid-cols-4 place-items-center justify-around content-around border-2 border-pink-500" style="width:1500px">
      <Tile v-for="(preset, i) in tier_1" :CURR_TREE="CURR_TREE" :preset="preset" :key="i"/>
    </div>
    <div class="grid gap-24 grid-cols-4 place-items-center justify-around content-around border-2 border-pink-500" style="width:1500px">
      <Tile v-for="(preset, i) in tier_2" :CURR_TREE="CURR_TREE" :preset="preset" :key="i"/>
    </div>
  </div>
  <div class="mr-auto self-center"></div>
</div>
</template>

<style scoped>


</style>
