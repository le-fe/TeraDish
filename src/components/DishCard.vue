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
        class="w-full rounded-bl-md rounded-tl-md rounded-br-1/2 block h-full bg-red-100 py-4 px-2"
      >
        <img :src="dish.img" class="" :alt="dish.name" />
      </div>
    </div>
    <div class="pl-6 md:pl-4 pr-2 flex flex-col justify-center w-3/5 pt-3 pb-3">
      <div class="flex items-start mb-1">
        <div class="flex-1">
          <h3 class="block font-bold text-xl leading-none">{{ dish.name }}</h3>
        </div>
      </div>
      <div class="flex items-center mb-2" v-if="dish.country">
        <img
          :src="`/flags/${dish.country_code}.png`"
          alt="Dish country"
          class="h-3 w-3 block"
        />
        <span class="text-xs ml-1">{{ `${dish.country.name} cuisine` }}</span>
      </div>
      <div class="line-clamp-2 text-sm">
        {{ dish.desc }}
      </div>
      <div class="flex flex-wrap mt-4" v-if="dish.culinary_list?.length > 0">
        <div
          class="flex items-center mr-2 mb-1 px-2 py-1 bg-slate-200 rounded-full"
        >
          <img
            class="h-[20px] w-auto"
            :src="dish.culinary_list[0].icon"
            alt=""
          />
          <div class="ml-1 text-sm">{{ dish.culinary_list[0].name }}</div>
        </div>
        <div
          v-if="dish.culinary_list.length - 1 > 0"
          class="px-2 py-1 bg-slate-200 rounded-lg text-sm h-[28px] font-semibold"
        >
          +{{ dish.culinary_list.length - 1 }}
        </div>
      </div>
    </div>
  </div>
</template>
