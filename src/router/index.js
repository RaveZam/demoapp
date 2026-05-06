import { createRouter, createWebHistory } from 'vue-router'
import CarPage from '../features/cars/carPage.vue'

const routes = [
  { path: '/cars', component: CarPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
