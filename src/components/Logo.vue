<template>
  <div class="Logo">
    <router-link to="/">
      <h1 class="font-pacifico text-2xl tracking-wider">
        Tera<span class="text-orange-500 ml-[2px]">
          {{ AppConfig.appName.replace("Tera", "") }}
        </span>
      </h1>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import AppConfig from "@/app-config.ts";
</script>
