<template>
  <header
    class="app-header flex items-center justify-center bg-white absolute top-0 left-0 right-0 z-20 h-20"
    :class="{ 'Header--hidden': routeName !== 'Home' }"
  >
    <Logo class="transition ease-in-out duration-300" />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
  props: {
    routeName: String,
  },
};
</script>

<style scoped lang="scss">
// .Header {
//   transition: height 0.6s $easing-base;

//   &.Header--hidden {
//     @apply h-0;
//     .Logo {
//       @apply opacity-0 transform scale-75;
//     }
//   }
// }
</style>
