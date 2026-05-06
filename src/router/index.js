import { createRouter, createWebHistory } from 'vue-router'
import CarPage from '../features/cars/carPage.vue'
import ViewCarPage from '../features/cars/viewCarPage.vue'

const routes = [
  { path: '/cars', component: CarPage },
  { path: '/cars/:id', component: ViewCarPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
