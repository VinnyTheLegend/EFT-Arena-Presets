<script setup lang="ts">

defineProps(['linetype'])

</script>

<template>
    <div v-if="(linetype === 'top')" class="h-24 border-l-4 border-gray-500 absolute w-0 ml-36 -translate-y-full"></div>

    <div v-if="(linetype === 'top2')" style="height: 500px" class="border-l-4 border-gray-500 absolute w-0 ml-36 -translate-y-full"></div>


    <div v-if="(linetype === 'topleft')">
        <div class="h-12 border-l-4 border-gray-500 absolute w-0 ml-36 -translate-y-full"></div>
        <div class="h-0 border-b-4 border-gray-500 absolute ml-36" style="width: 399px; transform: translate(-398px, -48px);"></div>
    </div>

    <div v-if="(linetype === 'topright')">
        <div class="h-12 border-l-4 border-gray-500 absolute w-0 ml-36 -translate-y-full"></div>
        <div class="h-0 border-b-4 border-gray-500 absolute ml-36" style="width: 398px; transform: translate(0, -48px);"></div>
    </div>

    <div v-if="(linetype === 'right')">
        <div class="h-0 border-b-4 border-gray-500 absolute ml-36" style="width: 275px; transform: translate(0, 150px);"></div>
    </div>

    <div v-if="(linetype === 'left')">
        <div class="h-0 border-b-4 border-gray-500 absolute ml-36" style="width: 275px; transform: translate(-245px, 150px);"></div>
    </div>
</template>

<style scoped>

div {
    z-index: -1;
}

</style>
