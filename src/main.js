import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import element from "element-ui";
import "../mockjs/index";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(element);

// 将element-ui的 $message 方法挂载到window上，以实现在store中调用
window.$message = Vue.prototype.$message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
