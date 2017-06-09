import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Button from './components/Button.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "/home",
            component: Button
        }
    ],

    linkActiveClass: 'active'

    
})

export default router