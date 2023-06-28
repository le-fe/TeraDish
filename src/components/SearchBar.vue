<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon/Icon.vue";
const emit = defineEmits(["input"]);

const inputValue = ref("");

function handleButtonIconClicked() {
  if (inputValue.value.length) {
    inputValue.value = "";
    emit("input", "");
  } else {
    emit("input", inputValue.value);
  }
}
</script>
<template>
  <form class="relative w-full overflow-hidden">
    <input
      type="text"
      name="search"
      spellcheck="false"
      placeholder="Search your Cuisine"
      class="w-full rounded-lg border border-slate-300 bg-white py-[14px] pl-6 pr-[50px] text-base text-dark outline-none duration-300 placeholder:text-body-color focus:border-primary focus-visible:shadow-none"
      v-model="inputValue"
      @input="$emit('input', $event.target?.value)"
    />
    <button
      type="button"
      class="absolute right-0 top-0 flex h-full w-[46px] items-center justify-center text-dark dark:text-white"
      @click="handleButtonIconClicked"
    >
      <Icon v-if="inputValue.length" name="close" />
      <Icon v-else name="search" />
    </button>
  </form>
</template>
