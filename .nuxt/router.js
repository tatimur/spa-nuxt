import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01d892af = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _298fdeea = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5ace32a6 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _42ca9f56 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _21906d74 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _01d892af,
    name: "about"
  }, {
    path: "/login",
    component: _298fdeea,
    name: "login"
  }, {
    path: "/users",
    component: _5ace32a6,
    name: "users"
  }, {
    path: "/users/:id",
    component: _42ca9f56,
    name: "users-id"
  }, {
    path: "/",
    component: _21906d74,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
