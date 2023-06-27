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
      <div class="">
        <a
          href="https://timle.me/"
          target="_blank"
          class="text-sm mt-2 underline"
        >
          {{ `www.timle.me` }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>
