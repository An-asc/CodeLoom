import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ServicesPage from '../views/ServicesPage.vue';
import PricingPage from '../views/PricingPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/servicios', component: ServicesPage },
  { path: '/precios', component: PricingPage },
  { path: '/contacto', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;