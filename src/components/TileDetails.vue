<script setup lang="ts">
import { ref } from 'vue';
import no_helmet from '/src/assets/no_helmet.webp'
import no_secondary from '/src/assets/no_secondary.webp'
import no_armor from '/src/assets/no_armor.webp'
import no_grenades from '/src/assets/no_grenades.webp'
import no_comms from '/src/assets/no_comms.webp'

interface Props {
    CURR_TREE: string,
    preset: Preset,
    details_visible: boolean
}

const props = defineProps<Props>()

let tooltip = ref('right')

function getImageUrl(img: string): string {
    return new URL(`/src/assets/${props.CURR_TREE}/${props.preset.name}/${img}.webp`, import.meta.url).href
}

function getItemImageUrl(folder: string, img: string): string {
    let new_string: string = img.replace(/ /g, "_")
    console.log(`/src/assets/${folder}/${new_string.toLowerCase()}.webp`)
    return new URL(`/src/assets/${folder}/${new_string.toLowerCase()}.webp`, import.meta.url).href
}

function updateTooltip(event: MouseEvent): void {
    if (event.clientX > (window.innerWidth / 2)) {
        tooltip.value = 'left'
    } else {
        tooltip.value = 'right'
    }
}

</script>

<template>
    <div class="left-0 top-7 absolute w-full" style="height: 90%" :class="{ hidden: !props.details_visible }">
        <div class="flex h-1/3 justify-evenly items-end">
            <div class="border-2 border-gray-500 primary relative">
                <img :src="getImageUrl('primary')" alt="">
                <div v-if="preset.primary" class="item-info-container" @mousemove="updateTooltip">
                    <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                        <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 text-nowrap px-2">{{ preset.primary.name }}</h1>
                        <div class="flex justify-between">
                            <span class="text-nowrap pl-2 pr-5">Types of fire</span>
                            <div class="pr-2 pl-5">
                                <span v-for="(mode, index) in preset.primary.modes" :key="mode" class="text-nowrap">
                                    <span>{{ mode }}</span>
                                    <span v-if="index + 1 < preset.primary.modes.length">, </span>
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-5">Fire rate</span><span class="pr-2">{{ preset.primary.rpm }}rpm</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-5">Ergonomics</span><span class="pr-2">{{ preset.primary.ergo }}</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-5">Vertical recoil</span><span class="pr-2">{{ preset.primary.vertical }}</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-5">Horizontal recoil</span><span class="pr-2">{{ preset.primary.horizontal }}</span></div>
                    </div>
                </div>
            </div>
            <div class="border-2 border-gray-500 square">
                <img v-if="preset.secondary" :src="getImageUrl('secondary')" alt="">
                <img v-else :src="no_secondary" alt="">
                <div v-if="preset.secondary" class="item-info-container" @mousemove="updateTooltip">
                    <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                        <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 text-nowrap px-2">{{ preset.secondary.name }}</h1>
                        <div class="flex justify-between">
                            <span class="text-nowrap pl-2 pr-5">Types of fire</span>
                            <div class="pr-2 pl-5">
                                <span v-for="(mode, index) in preset.secondary.modes" :key="mode" class="text-nowrap">
                                    <span>{{ mode }}</span>
                                    <span v-if="index + 1 < preset.secondary.modes.length">, </span>
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Fire rate</span><span class="pr-2">{{ preset.secondary.rpm }}rpm</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Ergonomics</span><span class="pr-2">{{ preset.secondary.ergo }}</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Vertical recoil</span><span class="pr-2">{{ preset.secondary.vertical }}</span></div>
                        <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Horizontal recoil</span><span class="pr-2">{{ preset.secondary.horizontal }}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-1 w-fill" style="height: 65%">
            <div class="flex h-1/2 content-around justify-around items-center">
                <div class="border-2 border-gray-500 small-square">
                    <img :src="getImageUrl('ammo')" alt="">
                    <div class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <div v-if="preset.primary">
                                <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 text-nowrap px-2">{{ preset.primary.ammo.name }}</h1>
                                <div v-for="(magazine) in preset.primary.ammo.magazines" :key="magazine.name" class="flex justify-between">
                                    <span class="text-nowrap pl-2 pr-10">{{ magazine.name }}</span><span class="pr-2 text-nowrap">x{{ magazine.count }}</span>
                                </div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Ammo type</span><span class="pr-2 text-nowrap">{{ preset.primary.ammo.type }}</span></div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Damage</span><span class="pr-2 text-nowrap">{{ preset.primary.ammo.damage }}</span></div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Ammo type</span><span class="pr-2 text-nowrap">{{ preset.primary.ammo.penetration }}</span></div>
                            </div>
                            <div v-if="preset.secondary">
                                <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 border-t-2 text-nowrap px-2">{{ preset.secondary.ammo.name }}</h1>
                                <div v-for="(magazine) in preset.secondary.ammo.magazines" :key="magazine.name" class="flex justify-between">
                                    <span class="text-nowrap pl-2 pr-10">{{ magazine.name }}</span><span class="pr-2 text-nowrap">x{{ magazine.count }}</span>
                                </div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Ammo type</span><span class="pr-2 text-nowrap">{{ preset.secondary.ammo.type }}</span></div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Damage</span><span class="pr-2 text-nowrap">{{ preset.secondary.ammo.damage }}</span></div>
                                <div class="flex justify-between"><span class="text-nowrap pl-2 pr-10">Ammo type</span><span class="pr-2 text-nowrap">{{ preset.secondary.ammo.penetration }}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-2 border-gray-500 small-square">
                    <img v-if="preset.armor" :src="getImageUrl('armor')" alt="">
                    <img v-else :src="no_armor" alt="">
                    <div v-if="preset.armor" class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 text-nowrap px-2">{{ preset.armor.name }}</h1>
                            <div v-for="(area) in preset.armor.areas" class="grid grid-cols-3 justify-between">
                                <span class="pl-2 text-nowrap">{{ area.name }}</span>
                                <span class="text-nowrap text-center">Lvl: {{ area.level }}</span>
                                <span class="pr-2 text-nowrap text-end"> {{ area.points }}/{{ area.pointsmax }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-2 border-gray-500 small-square">
                    <img v-if="preset.helmet" :src="getImageUrl('helmet')" alt="">
                    <img v-else :src="no_helmet" alt="">
                    <div v-if="preset.helmet" class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <h1 class="text-center bg-slate-950 font-bold border-gray-500 border-b-2 text-nowrap px-2">{{ preset.helmet.name }}</h1>
                            <div class="grid grid-cols-2 justify-between">
                                <span class="pl-2 text-nowrap">Lvl: {{ preset.helmet.level }}</span>
                                <span class="pr-2 text-nowrap text-end">Ricochet: {{ preset.helmet.ricochet }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-1/2 content-around justify-around items-start">
                <div class="w-1"></div>
                <div class="border-2 border-gray-500 small-square">
                    <img :src="getItemImageUrl('meds/black', preset.meds[0].name)" alt="">
                    <div class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <div v-for="(med) in preset.meds" class="flex justify-between items-center">
                                <div class="item-info-img"><img :src="getItemImageUrl('meds', med.name)" alt=""></div>
                                <span class="pl-10 pr-2 text-nowrap">{{ med.name }} x{{ med.uses }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-2 border-gray-500 small-square">
                    <img v-if="preset.grenades" :src="getImageUrl('grenades')" alt="">
                    <img v-else :src="no_grenades" alt="">
                    <div v-if="preset.grenades" class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <div v-for="(grenade) in preset.grenades" class="flex justify-between items-center">
                                <div class="item-info-img"><img :src="getItemImageUrl('grenades', grenade.name)" alt=""></div>
                                <span class="pl-10 pr-2 text-nowrap">{{ grenade.name }} x{{ grenade.count }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-2 border-gray-500 small-square">
                    <img v-if="preset.comms" :src="getItemImageUrl('comms', preset.comms)" alt="">
                    <img v-else :src="no_comms" alt="">
                    <div v-if="preset.comms" class="item-info-container" @mousemove="updateTooltip">
                        <div class="item-info" :class="{'tooltip-left': (tooltip === 'left'), 'tooltip-right': (tooltip === 'right')}">
                            <h1 class="text-center bg-slate-950 font-bold text-nowrap px-2 pb-1">{{ preset.comms }}</h1>  
                        </div>
                    </div>
                </div>
                <div class="w-1"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.primary {
    position: relative;
    height: 93%;
    width: 59%;
}

.square {
    position: relative;
    height: 93%; 
    width: 28%;
}

.small-square {
    position: relative;
    height: 90%; 
    width: 27.04%;
}

.small-square>img,
.primary>img,
.square>img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    height: 100%;
    width: 99%;
}

.item-info-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}

.item-info {
    position: absolute;
    visibility: hidden;
    background-color: rgb(27, 33, 39);
    z-index: 1;
    top: -2px;
    border-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(107 114 128 / var(--tw-border-opacity));
    pointer-events: none;
}

.item-info-container:hover .item-info {
    visibility: visible;
}


.tooltip-left {
    right: 100%;
}

.tooltip-right {
    left: 100%;
}

.item-info-img {
    position: relative;
    height: 50px;
    width: 50px;
    margin: 5px;
    border-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(107 114 128 / var(--tw-border-opacity));
    pointer-events: none;
}

.item-info-img>img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    height: 100%;
    width: 100%;
}

</style>
