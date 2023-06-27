<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import COUNTRIES from "../data/countries.json";
import { ICountry } from "../interfaces";

defineProps({
  activeCode: {
    type: String,
  },
});

const router = useRouter();
const route = useRoute();

function setActiveCountry(country?: ICountry) {
  if (!country) {
    router.push({ query: { ...(route.query || {}), country: null } });
  } else {
    router.push({ query: { ...(route.query || {}), country: country.code } });
  }
}
</script>
<template>
  <swiper-container slides-per-view="auto" speed="500" :space-between="12">
    <swiper-slide class="w-auto cursor-default">
      <div
        class="p-4 text-center rounded-lg h-[60px] flex flex-col items-center justify-center transition-colors font-semibold text-lg"
        :class="{ 'bg-white': !activeCode }"
        @click="setActiveCountry(null)"
      >
        All
      </div>
    </swiper-slide>
    <swiper-slide
      v-for="country in COUNTRIES"
      :key="country.code"
      class="w-auto cursor-default"
    >
      <div
        class="p-4 text-center rounded-lg h-[60px] flex flex-col items-center justify-center transition-colors"
        :class="
          activeCode === country.code ? 'bg-white' : 'grayscale-0 opacity-50'
        "
        @click="setActiveCountry(country)"
      >
        <img class="max-w-[40px]" :src="country.flag" />
        <div class="mt-1 text-sm">{{ country.name }}</div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
