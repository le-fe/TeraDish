<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { CulinarySlider, DishCard, CountrySlider } from "@/components";
import { fetchDishes } from "../services/dishes";
import { getCulinaryDetail } from "../services/culinaries";

const route = useRoute();

const activeCountryCode = computed(() => route.query.country);
const activeCulCode = computed(() => route.query.culinary);
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
  return fetchDishes();
});
</script>
<template>
  <main class="Home bg-gray-100">
    <div class="container pt-20 pb-10">
      <section class="px-4 my-4">
        <CountrySlider :activeCode="activeCountryCode" />
      </section>
      <section class="px-4 mt-8 mb-4">
        <CulinarySlider />
      </section>

      <section v-if="activeCulinary">
        {{ activeCulinary }}
      </section>

      <transition name="slide-top" mode="out-in">
        <section v-if="dishList.length > 0" key="result">
          <transition-group
            name="card"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-5 pr-5"
            enter-active-class="transform-gpu"
            enter-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
            @before-leave="beforeLeave"
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
          </transition-group>
        </section>

        <section v-else key="nodata">
          <div class="container text-sm text-center px-5 pt-16 pb-16">
            <img
              src="@/assets/images/icons/sad.svg"
              alt="Sad emoji"
              class="w-20 mx-auto mb-4"
            />
            <p class="text-base pb-2">
              No animals registered for this category yet
            </p>
            <strong class="text-sm">How about trying later?</strong>
          </div>
        </section>
      </transition>
    </div>
  </main>
</template>
