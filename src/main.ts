import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from 'vee-validate';
import store from "@/store/index.ts";
import * as svgicon from 'vue-svgicon';

//import "./registerServiceWorker";
import './global';
import './directives';
import './firebase';

// Validation
Vue.use(VeeValidate);

// Icons
Vue.use(svgicon, {
  classPrefix: 'Icon-',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
