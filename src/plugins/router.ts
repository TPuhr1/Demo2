import { createRouter, createWebHistory } from 'vue-router'
// Defines the routs for my router
const routes = [
    {path: '/', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path: '/game', name: 'game', component: () => import('@/components/Game.vue')},
    {path: '/catalog', name: 'catalog', component: () => import('@/components/Catalog.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue')},
    {path: '/settings', name: 'settings', component: () => import('@/views/Settings.vue')},
]
// Creates a router instance
const router = createRouter({
    routes,                         // Routes for the router instance
    history: createWebHistory(),    // Enables history
})
// Exports the router
export default router