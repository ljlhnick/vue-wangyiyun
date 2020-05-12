import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axois from "axios";
Vue.prototype.$http = Axois;
import ElmentUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElmentUI);

Vue.config.productionTip = false;

export const vm: Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
