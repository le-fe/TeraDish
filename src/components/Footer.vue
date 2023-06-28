<script setup lang="ts">
import Logo from "./Logo.vue";
import { fetchCounts } from "../services/dishes";

const dataCounts = fetchCounts();
</script>

<template>
  <footer class="bg-white overflow-hidden relative z-10">
    <div
      class="container px-5 py-3 mx-auto flex items-center sm:flex-row justify-between flex-col"
    >
      <div class="sm:ml-4 sm:py-2 sm:mt-0 mt-2">
        <Logo class="" />
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} TimLe
        </p>
      </div>
      <div class="flex flex-col items-center md:items-start">
        <div
          class="flex flex-row md:flex-col items-center md:items-start leading-tight my-2"
        >
          <div>
            <span class="font-semibold text-orange-500">
              {{ dataCounts.dish_count }}
            </span>
            <span class="ml-2 text-sm">dishes</span>
          </div>
          <div class="ml-2 md:ml-0">
            <span class="font-semibold text-orange-500">
              {{ dataCounts.culinary_count }}
            </span>
            <span class="ml-2 text-sm">culinaries</span>
          </div>
        </div>
        <a href="https://timle.me/" target="_blank" class="text-sm underline">
          {{ `www.timle.me` }}
        </a>
      </div>
    </div>
  </footer>
</template>
