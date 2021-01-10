import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Task from '../views/Task.vue'
// import Lifecycle from '../views/Lifecycle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    // component: Lifecycle,
    component: () => import(/* webpackChunkName: "lifecycle" */'../views/Lifecycle')
  },
  {
    path: '/tasks',
    name: 'Task',
    // component: Task,
    component: () => import(/* webpackChunkName: "taskhjs" */'../views/Task')
  },
  {
    path: '/Pelicula',
    name: 'top',
    // component: Task,
    component: () => import(/* webpackChunkName: "tasks" */'../views/Pelicula')
  },
  {
    path: '/Pelicula2',
    name: 'populares',
    // component: Task,
    component: () => import(/* webpackChunkName: "tasks" */'../views/Pelicula2')
  },
  {
    path: '/countries',
    name: 'Countries',
    // Alias
    alias: '/paises',
    component: () => import('../views/Countries')
    // component: () => import(/* webpackChunkName: "countries" */ '../views/Countries')
  },
  {
    path: '/countries/:name',
    name: 'Country',
    component: () => import('../views/Country')
  },
  // Redirect
  {
    path: '/paises/:name', redirect: '/countries/:name'
  },
  {
    path: '*',
    component: () => import('../views/404')
  },
  //‎Rutas anidadas‎
  {
    path: '/auth',
    name: 'AuthLayout',
    component: () => import('../layouts/AuthLayout'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/auth/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/auth/Register'),
      },
      {
        path: '/',
        redirect: 'login'
      },
      {
        path: '*',
        redirect: 'login'
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
