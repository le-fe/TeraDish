<script setup lang="ts">
defineProps({
  dish: Object,
});
</script>
<template>
  <div
    class="Card bg-white rounded-md cursor-pointer shadow-lg flex h-full transition duration-300 ease-in-out hover:shadow-md"
  >
    <div class="flex w-2/5">
      <div
        class="w-full rounded-bl-md rounded-tl-md rounded-br-1/2 block h-full bg-red-100 p-4"
      >
        <img :src="dish.img" class="" :alt="dish.name" />
      </div>
    </div>
    <div class="pl-6 md:pl-4 pr-2 flex flex-col justify-center w-3/5 pt-3 pb-3">
      <div class="flex items-center mb-1">
        <h3 class="block font-bold text-2xl">{{ dish.name }}</h3>
        <div class="ml-2">
          <img
            :src="`/flags/${dish.country_code}.png`"
            alt="Dish country"
            class="h-5 block"
          />
        </div>
      </div>
      <div class="block mb-1 text-black leading-4">
        {{ dish.desc }}
      </div>
      <div class="flex flex-wrap mt-4">
        <div
          v-for="culinary in dish.culinary_list"
          :key="culinary.code"
          class="flex items-center mr-2 mb-1 px-2 py-1 bg-slate-200 rounded-full"
        >
          <img class="h-[20px] w-auto" :src="culinary.icon" alt="" />
          <div class="ml-1 text-sm">{{ culinary.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
