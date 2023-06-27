<template>
  <div id="app" class="flex flex-col min-h-screen overflow-x-hidden">
    <Loader :visible="loading" />
    <Header :routeName="routeName" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer, Loader } from "@/components";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loader,
  },
  data() {
    return {
      loading: true,
      routeName: this.$route.name,
      transition: {
        name: "slide-top",
        mode: "out-in",
      },
    };
  },
  mounted() {
    // Simulating the first loading
    setTimeout(() => {
      this.loading = false;
    }, 700);
  },
  watch: {
    // Setting route transition effects
    $route(to, from) {
      this.routeName = to.name;
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;

      if (to.meta.transition) {
        const { name, mode } = to.meta.transition;
        this.transition = {
          name: name,
          mode: mode || mode === "" ? mode : "out-in",
        };
      } else {
        this.transition = {
          name: toDepth < fromDepth ? "slide-bottom" : "slide-top",
          mode: "out-in",
        };
      }
    },
  },
};
</script>
<style>
@font-face {
  font-family: "Pacifico";
  src: local("Pacifico"),
    url(./assets/fonts/Pacifico/Pacifico-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
    url(./assets/fonts/Poppins/Poppins-Medium.ttf) format("truetype");
  font-weight: medium;
}
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
    url(./assets/fonts/Poppins/Poppins-Bold.ttf) format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
    url(./assets/fonts/Poppins/Poppins-Regular.ttf) format("truetype");
}
</style>
