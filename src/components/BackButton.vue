<template>
  <button
    type="button"
    class="p-2 flex items-center justify-center transition duration-300 hover:bg-white hover:bg-opacity-20 cursor-default"
    @click.prevent="to ? $router.push(to) : $router.back(-1)"
  >
    <img :src="backIcon" alt="Go back" class="block w-6 h-6" />
    <span class="ml-2 font-semibold">Back</span>
  </button>
</template>

<script setup lang="ts">
const backIcon = new URL("@/assets/back.svg", import.meta.url).href;
defineProps({
  to: String,
});
</script>
