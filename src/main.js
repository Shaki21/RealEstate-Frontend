import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import pinia from "@/stores/store.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
   faLock,
   faBars,
   faPhone,
   faBed,
   faBath,
   faHouse,
   faBarcode,
   faCircleDown,
   faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import {
   faFacebook,
   faInstagram,
   faLinkedin,
   faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
   faUser,
   faLock,
   faBars,
   faFacebook,
   faInstagram,
   faLinkedin,
   faGithub,
   faPhone,
   faEnvelope,
   faMap,
   faBed,
   faBath,
   faHouse,
   faBarcode,
   faCircleDown,
   faUpRightAndDownLeftFromCenter
);

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.use(VueSweetalert2);

app.mount("#app");
