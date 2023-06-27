<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import COUNTRIES from "../data/countries.json";
import { ICountry } from "../interfaces";

defineProps({
  activeCode: {
    type: String,
  },
});

const router = useRouter();

function setActiveCountry(country?: ICountry) {
  router.push({ query: { country: country?.code } });
}
</script>
<template>
  <swiper slides-per-view="auto" :space-between="12">
    <swiper-slide
      v-for="country in COUNTRIES"
      :key="country.code"
      class="!w-auto cursor-default"
    >
      <div
        class="p-4 text-center rounded-lg h-[60px] flex flex-col items-center justify-center transition-colors"
        :class="
          activeCode === country.code || (country.code === 'WW' && !activeCode)
            ? 'bg-white'
            : 'grayscale-0 opacity-50'
        "
        @click="setActiveCountry(country)"
      >
        <img class="max-w-[40px]" :src="country.flag" />
        <div class="mt-1 text-sm">{{ country.name }}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>
