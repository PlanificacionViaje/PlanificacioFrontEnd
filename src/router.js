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
        path: '/trips',
        name: 'trips',
        component: TravelPage,
    },
    // {
    //     path: '/trip/:id',
    //     name: 'trip',
    //     component: GreatTrav
    // },
]

const router = createRouter({
    // 4. createWebHashHistory
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router