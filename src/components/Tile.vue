<script setup lang="ts">
import { ref } from 'vue';

import TileDetails from './TileDetails.vue';
import Line from './Line.vue'

import mp_img from '/src/assets/mp.webp'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEye)

interface Props {
    preset: Preset,
    CURR_TREE: string,
    tier: number
}

const props = defineProps<Props>()

let details_visible = ref(false)

// console.log(props.preset.name)

function getImageUrl(img: string): string {
    return new URL(`/src/assets/${props.CURR_TREE}/tier${props.tier}/${props.preset.name}/${img}.webp`, import.meta.url).href
}

</script>

<template>
    <div class="relative" v-if="props.preset.name != undefined">
        <Line v-if="preset.connection" :linetype="preset.connection"/>
        <div class="tile-bg">
            <div class="preset-tile relative bg-gradient-to-t from-black to-gray-800">
                <div class="w-full flex bg-slate-950 pl-7 pt-1 font-bold pb-1 border-b-2 border-gray-500" style="height:10%">
                    {{ props.preset.name }}
                    <div class="ml-auto pr-2 z-10" @click="() => { details_visible = !details_visible; console.log(details_visible) }">
                        <font-awesome-icon :icon="['fas', 'eye']" />
                    </div>
                </div>
                <div class="relative" style="height:90%">
                    <div class="h-full w-full overflow-clip">
                        <img :src="getImageUrl('character')" alt="" class="translate-x-10 -translate-y-7 scale-125 object-contain h-full w-full">
                    </div>
                    <div class="absolute top-10 left-5 flex">
                        <img :src="mp_img" alt="" class="object-none translate-y-0.5">
                        <span class="font-bold pl-2">{{ preset.mp }}</span>
                    </div>
                    <div class="left-0 top-0 absolute h-full w-full bg-black bg-opacity-80" :class="{ hidden: !details_visible }"></div>
                </div>
            </div>
        </div>
        <TileDetails :details_visible="details_visible" :CURR_TREE="props.CURR_TREE" :preset="props.preset" :tier="props.tier"/>
    </div>
    <div class="relative preset-tile" v-else></div>
</template>

<style scoped>
.preset-tile {
    height: 300px;
    width: 300px;
    /* border: solid grey 2px; */
    box-sizing: border-box;
    clip-path: polygon(10% 1%, 99% 1%, 99% 90%, 90% 99%, 1% 99%, 1% 10%);
}

.tile-bg {
    clip-path: polygon(10% 0%, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 10%);
    background-color: grey;
}



</style>
