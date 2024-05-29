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
        console.log(from)
        return savedPosition;
    }
    return { left: 0, top: 0 };
}
const base = import.meta.env.BASE_URL;

const routes = [
    {
        path: base,
        name: 'home',
        component: Home
    },
    {
        path: `${base}about`,
        name: 'about',
        component: About
    },
    {
        path: `${base}advertising`,
        name: 'advertising',
        component: Advertising
    },
    {
        path: `${base}services`,
        name: 'services',
        component: Services
    },
    {
        path: `${base}vacancies`,
        name: 'vacancies',
        component: Vacancies
    },
    {
        path: `${base}news`,
        name: 'news',
        component: News
    },
    {
        path: `${base}contacts`,
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
