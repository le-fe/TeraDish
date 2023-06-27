<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { fetchDishes } from "../services/dishes";
import { getCulinaryDetail } from "../services/culinaries";
import { getCountryDetail } from "../services/countries";
import { CulinarySlider, DishCard, CountrySlider } from "@/components";

const route = useRoute();

const activeCountryCode = computed(() => route.query.country);
const activeCulinaryCode = computed(() => route.query.culinary);
const activeCountry = computed(() =>
  route.query.country ? getCountryDetail(route.query.country) : null
);
const activeCulinary = computed(() =>
  route.query.culinary ? getCulinaryDetail(route.query.culinary) : null
);

function beforeLeave(el) {
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el);
  el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
  el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
  el.style.width = width;
  el.style.height = height;
}
const dishList = computed(() => {
  const country_code =
    activeCountryCode.value === "WW" ? null : activeCountryCode.value;
  const culinary_code =
    activeCulinaryCode.value === "all" ? null : activeCulinaryCode.value;
  return fetchDishes(country_code, culinary_code);
});
</script>
<template>
  <main class="bg-gray-100">
    <div class="container pt-20 pb-10">
      <section class="px-4 my-4">
        <CountrySlider :activeCode="activeCountryCode" />
      </section>
      <section class="px-4 mt-8 mb-4">
        <CulinarySlider />
      </section>

      <section
        v-if="activeCountry && activeCountry.code !== 'WW'"
        class="px-4 my-6"
      >
        <div class="p-4 bg-white rounded-xl flex items-start">
          <div class="mt-2 w-[60px]">
            <img class="w-full" :src="activeCountry.flag" />
          </div>
          <div class="ml-4 flex-1">
            <span class="text-lg font-semibold">
              {{ activeCountry.name }}
            </span>
            <p class="text-sm">{{ activeCountry.desc }}</p>
          </div>
        </div>
      </section>
      <section
        v-if="activeCulinary && activeCulinary.code !== 'all'"
        class="px-4 my-6"
      >
        <div class="p-4 bg-white rounded-xl">
          <div class="flex items-center">
            <h3 class="font-semibold text-lg">{{ activeCulinary.name }}</h3>
            <img class="ml-2 h-[20px]" :src="activeCulinary.icon" />
          </div>
          {{ activeCulinary.desc }}
        </div>
      </section>

      <transition name="fade" mode="out-in">
        <section
          v-if="dishList.length > 0"
          key="result"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pl-5 pr-5"
        >
          <div
            v-for="dish in dishList"
            :key="dish.id"
            class="transition-all duration-300 mt-4"
          >
            <router-link
              :to="{ name: 'dish-detail', params: { dishId: dish.id } }"
              class="no-underline"
            >
              <DishCard :dish="dish" />
            </router-link>
          </div>
        </section>

        <section v-else key="nodata">
          <div class="container text-sm text-center px-5 pt-16 pb-16">
            <img src="/img/sad.png" alt="Sad emoji" class="w-20 mx-auto mb-4" />
            <p class="text-base pb-2">No dish existed!</p>
            <strong class="text-sm">How about trying later?</strong>
          </div>
        </section>
      </transition>
    </div>
  </main>
</template>
