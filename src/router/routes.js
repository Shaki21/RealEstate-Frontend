import navigationGuard from '@/router/navigationGuard.js';

const routes = [
   {
      path: '/auth',
      component: () => import('@/layouts/BlankLayout.vue'),
      children: [
         {
            path: 'login',
            name: 'LoginPage',
            beforeEnter: navigationGuard.forbidAuthenticated,
            component: () => import('@/pages/LoginPage.vue'),
         },
         {
            path: 'register',
            name: 'RegisterPage',
            beforeEnter: navigationGuard.forbidAuthenticated,
            component: () => import('@/pages/RegisterPage.vue'),
         },
      ],
   },
   {
      path: '/',
      redirect: (to) => {
         return 'home';
      },
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
         {
            path: 'home',
            name: 'HomePage',
            component: () => import('@/pages/HomePage.vue'),
         },
         {
            path: '/houses-list/:page?',
            name: 'HousesPage',
            component: () => import('@/pages/HousesPage.vue'),
         },
         {
            path: 'house-details/:id',
            name: 'HouseDetailsPage',
            beforeEnter: navigationGuard.forbidUnauthenticated,
            component: () => import('@/pages/HouseDetailsPage.vue'),
            meta: {
               item: null,
               module: {
                  id: null,
               },
               title: 'house-details',
            },
            props: {
               id: null,
            },
         },
         {
            path: 'advertise-house',
            name: 'AdvertiseHousePage',
            component: () => import('@/pages/AdvertiseHousePage.vue'),
         },
      ],
   },
   {
      path: '/:catchAll(.*)',
      component: () => import('@/pages/NotFoundPage.vue'),
   },
];

export default routes;
