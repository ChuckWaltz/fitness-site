import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretRight,
  faPhoneSquareAlt,
  faClock,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCaretRight,
  faPhoneSquareAlt,
  faClock,
  faEnvelope,
  faTwitter,
  faFacebookSquare,
  faInstagram
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
