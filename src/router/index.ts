import { createRouter, createWebHistory, RouterScrollBehavior } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/news/Main.vue'
import Vacancies from '@/pages/vacancies/Main.vue'
import Services from '@/pages/services/Main.vue'
import Advertising from '@/pages/advertising/Main.vue'
import Contacts from '@/pages/contacts/Index.vue'


const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return { el: to.hash };
    }
    if (savedPosition) {
        return savedPosition;
    }
    return { left: 0, top: 0 };
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/advertising',
        name: 'advertising',
        component: Advertising
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/vacancies',
        name: 'vacancies',
        component: Vacancies
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior,
    routes
})

export default router
