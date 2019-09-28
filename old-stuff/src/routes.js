import Vue from "vue"
import Router from "vue-router"

import home from "@/components/home"
import membership from "@/components/membership"
import team from "@/components/team"
import contact from "@/components/contact"
import register from "@/components/register"

Vue.use(Router)
export const router =  new Router({
    mode: "history",
    routes: [ { path: '/', component: home, },
            { path: '/membership', component: membership, },
            { path: '/team', component: team, },
            { path: '/contact', component: contact, },
            { path: '/register', component: register, }
    ]
})
