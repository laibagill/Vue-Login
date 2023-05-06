import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import NotFound from "@/views/NotFound.vue";


const routes = [
     {
        path: "/home",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;