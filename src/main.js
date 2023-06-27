import { createApp } from "vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/style.scss";
import App from "./App.vue";
import { register } from "swiper/element/bundle";
register();
import "swiper/swiper.min.css";

import router from "./router";

const app = createApp(App);
app.use(router);

app.mount("#app");
