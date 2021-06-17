import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:'/login',
    component: ()=> import("../views/Login.vue")

  },
  {
    path:"/cart",
    component: ()=> import("../views/Cart.vue"),
  },
  {
    path:'/products',
    component: ()=> import("../views/Products.vue")
  },
  {
    path:'/admin',
    component:() => import('../views/admin/dashBoard.vue'),
    children:[
      {path:'products',
    component:()=>import('../views/admin/dashboardProducts.vue')
  }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
