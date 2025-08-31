import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Trainers from '../views/Trainers.vue'
import About from '../views/About.vue'
import MakeAnAppointment from '../views/MakeAnAppointment.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/trainers', name: 'Trainers', component: Trainers },
  { path: '/about', name: 'About', component: About },
 { path: '/makeAnAppointment', name: 'Appointment', component: MakeAnAppointment },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
