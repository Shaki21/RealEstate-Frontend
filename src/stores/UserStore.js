import { defineStore } from "pinia";

const getInititalUser = () => ({
   username: "",
   isAdmin: "",
});

export const useUserStore = defineStore("userStore", {
   state: () => ({
      currentUser: getInititalUser(),
   }),
   actions: {
      setCurrentUser(user) {
         this.currentUser = { ...user };
      },
      clearCurrentUser() {
         this.currentUser = getInititalUser();
      },
   },
});
