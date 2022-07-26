import { createRouter, createWebHistory } from 'vue-router'

import Profile from './Components/Profile.vue';
import TravelPage from "./Components/TravelPage.vue";
import HomeView from "./Views/HomeView.vue"
import ProfileView from "./Views/ProfileView.vue"


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        props: true,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        props: true,
    },
    {
        path: '/viajes',
        name: 'viajes',
        component: TravelPage,
    },
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