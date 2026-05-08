import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import AlimentosView from "@/views/AlimentosView.vue"

const routes = [
    {path: '/', component: HomeView },
    {path: '/alimentos', component: AlimentosView},
]

const router = createRouter({
    history: createWebHistory(), 
    routes, 
})

export default router
