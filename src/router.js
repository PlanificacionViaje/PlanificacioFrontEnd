import { createRouter, createWebHistory } from 'vue-router'

import Profile from './Components/Profile.vue';


const routes = [
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    // {
    //     path: '/viajes',
    //     name: 'viajes',
    //     component: Viajes
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
]

const router = createRouter({
    // 4. createWebHashHistory
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router