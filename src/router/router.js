import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes.js";

const router = createRouter({
   routes,
   history: createWebHistory(),
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active",
   scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
         return {
            el: to.hash,
            behavior: "smooth",
         };
      } else if (savedPosition) {
         return savedPosition;
      } else {
         return { top: 0 };
      }
   },
});
export default router;
