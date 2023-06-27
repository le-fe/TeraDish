<script setup lang="ts">
import { onMounted, computed } from "vue";
import CULINARIES from "@/data/culinaries.json";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const activeCulCode = computed(() => route.query.culinary);

onMounted(() => {
  const { culinary } = route.query;
  if (culinary) setCategory(culinary);
});

function setCategory(culinary) {
  router.push({ path: "/", query: { culinary } }).catch(() => {});
}
</script>

<template>
  <swiper-container ref="swiperCategory" slides-per-view="auto" speed="500">
    <div
      class="culinary-item inline-flex justify-center items-center flex-col px-4 font-semibold"
    >
      {{ `All` }}
    </div>
    <swiper-slide
      v-for="{ name, icon, code } in CULINARIES"
      :key="name"
      class="w-auto"
    >
      <div
        class="culinary-item text-center inline-flex items-center flex-col px-4"
        @click.native="setCategory(name)"
      >
        <div class="mb-1 flex items-center justify-center cursor-pointer">
          <div :class="code === activeCulCode ? '' : 'grayscale opacity-50'">
            <img
              :src="icon"
              :alt="name"
              class="-scale-x-1 transform max-h-[60px] max-w-[36px] w-auto"
            />
          </div>
        </div>
        <div
          class="block cursor-pointer capitalize overflow-dots whitespace-nowrap text-sm"
        >
          {{ name }}
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
