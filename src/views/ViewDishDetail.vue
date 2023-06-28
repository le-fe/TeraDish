<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { fetchDishDetail } from "../services/dishes";
import BackButton from "../components/BackButton.vue";

const route = useRoute();
const dishId = route.params.dishId;

const dishDetail = computed(() => fetchDishDetail(dishId));
</script>
<template>
  <div class="container pt-20 pb-10">
    <div class="fixed top-0 z-50 right-0 w-full h-20 bg-white">
      <div class="container mx-auto flex items-center h-full px-4">
        <BackButton />
      </div>
    </div>
    <div v-if="dishDetail" class="px-5">
      <h1 class="font-bold text-2xl">{{ dishDetail.name }}</h1>
      <p>{{ dishDetail.desc }}</p>
      <div
        v-if="dishDetail.country"
        class="mt-2 items-center px-4 py-1 bg-slate-200 hover:bg-slate-300 transition-colors inline-flex rounded-xl"
        @click="
          $router.push({
            name: 'home',
            query: { country: dishDetail.country.code },
          })
        "
      >
        <img class="h-[28px]" :src="dishDetail.country.flag" />
        <div class="ml-2">{{ dishDetail.country.name }}</div>
      </div>
      <div class="flex items-center justify-center p-8">
        <img class="max-w-[300px] max-h-[300px]" :src="dishDetail.img" />
      </div>
      <div class="p-4 bg-slate-200 rounded-xl">
        {{ dishDetail.intro }}
      </div>
      <div class="mt-4 p-4 bg-slate-100 rounded-xl">
        <h2 class="font-semibold">{{ `Culinaries` }}</h2>
        <div>
          <ul>
            <template
              v-for="culinary in dishDetail.culinary_list"
              :key="culinary.code"
            >
              <div class="flex items-start my-4">
                <img class="h-[40px] w-auto" :src="culinary.icon" />
                <div class="flex flex-col ml-4">
                  <div class="font-semibold">{{ culinary.name }}</div>
                  <div class="line-clamp-2 text-sm">{{ culinary.desc }}</div>
                </div>
              </div>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>{{ `No dish found!` }}</div>
  </div>
</template>
