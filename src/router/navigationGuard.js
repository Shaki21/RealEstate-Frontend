import authService from "@/services/authService";
import { useUserStore } from "@/stores/UserStore";

const forbidUnauthenticated = async () => {
   const userStore = useUserStore();

   if (userStore.currentUser.username) return true;

   try {
      const { data: user } = await authService.getMe();
      userStore.setCurrentUser(user);
      return true;
   } catch (err) {
      console.log(err);
      return { name: "LoginPage" };
   }
};

const forbidAuthenticated = async (_to, from) => {
   const userStore = useUserStore();

   if (userStore.currentUser.username)
      return from.name ? false : { name: "HomePage" };

   try {
      const { data: user } = await authService.getMe();
      userStore.setCurrentUser(user);
      return from.name ? false : { name: "HomePage" };
   } catch (err) {
      console.log(err);
      return true;
   }
};

export default {
   forbidUnauthenticated,
   forbidAuthenticated,
};
