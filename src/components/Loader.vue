<template>
  <div
    class="app-loader fixed left-0 right-0 top-0 h-full flex items-center justify-center z-50"
    :class="{ 'app-loader--hidden': !visible }"
  >
    <img
      class="app-loader__rings absolute w-14 transform-gpu"
      :src="ringIcon"
      alt="Loading"
    />
    <svg class="app-loader__background h-full w-full" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="151"
        r="120%"
        fill="none"
        stroke-width="240%"
      ></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
const ringIcon = new URL("@/assets/images/rings.svg", import.meta.url).href;
defineProps({
  visible: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.app-loader {
  &__background circle {
    stroke: $color-primary;
    transition: stroke-width 1.2s $easing-base;
  }
  &__rings {
    transition: opacity 0.6s ease, transform 0.5s $easing-base;
  }

  &--hidden {
    @apply pointer-events-none;

    .app-loader {
      &__background circle {
        @apply stroke-0;
      }
      &__rings {
        @apply scale-300 opacity-0;
      }
    }
  }
}
</style>
