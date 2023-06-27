<script setup lang="ts">
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import CULINARIES from "@/data/culinaries.json";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const activeCulCode = computed(() => route.query.culinary);

function setCategory(culinary) {
  if (!culinary) router.push({ path: "/" });
  router.push({ path: "/", query: { ...(route.query || {}), culinary } });
}
</script>

<template>
  <swiper slides-per-view="auto" class="select-none">
    <swiper-slide
      v-for="{ name, icon, code } in CULINARIES"
      :key="name"
      class="!w-auto cursor-default"
    >
      <div
        class="culinary-item text-center inline-flex items-center flex-col px-4 cursor-default"
        @click="setCategory(code)"
      >
        <div class="mb-1 flex items-center justify-center">
          <div
            :class="
              code === activeCulCode || (code === 'all' && !activeCulCode)
                ? ''
                : 'grayscale opacity-50'
            "
          >
            <img
              :src="icon"
              :alt="name"
              class="-scale-x-1 transform max-h-[60px] max-w-[36px] w-auto"
            />
          </div>
        </div>
        <div
          class="block capitalize overflow-dots whitespace-nowrap text-sm"
          :class="{
            'font-semibold':
              code === activeCulCode || (code === 'all' && !activeCulCode),
          }"
        >
          {{ name }}
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
