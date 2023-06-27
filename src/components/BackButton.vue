<template>
  <button
    type="button"
    class="text-4xl text-white rounded-full w-10 h-10 p-2 flex items-center justify-center transition duration-300 hover:bg-white hover:bg-opacity-20"
    @click.prevent="to ? $router.push(to) : $router.back(-1)"
  >
    <img :src="backIcon" alt="Go back" class="block transform rotate-180" />
  </button>
</template>

<script setup lang="ts">
const backIcon = new URL("@/assets/icons/arrow.svg", import.meta.url).href;
defineProps({
  to: String,
});
</script>
