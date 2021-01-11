/*
 * @Author: your name
 * @Date: 2020-12-29 10:16:15
 * @LastEditTime: 2021-01-11 09:41:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test.vue'
import Cycontainer from '../views/cycontainer/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: "/",
      component: () => import(/* webpackChunkName: "about" */ '../views/cycontainer/index.vue')
    }]
  },
  {
    path: '/test',
    name: 'home',
    component: test,
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
