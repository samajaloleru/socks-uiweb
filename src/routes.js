import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home"
import story from "@/components/story"
import product from "@/components/product"
import process from "@/components/process"
import custom from "@/components/custom"
import about from "@/components/about"
import login from "@/components/login"
import blog from "@/components/blog"
import forgot from "@/components/forgot"



Vue.use(Router)
export const router =  new Router({
    mode: "hash", 
    routes: [ 
        {
            name: "home",
            path: '/',
            component: home
        },
        {
            name: "story",
            path: '/story',
            component: story,
        },
        {
            name: "product",
            path: '/product',
            component: product,
        },
        {
            name: "process",
            path: '/process',
            component: process,
        },
        {
            name: "custom",
            path: '/custom',
            component: custom,
        },
        {
            name: "about",
            path: '/about',
            component: about,
        },   
        {
          name: "login",
          path: "/login",
          component: login
        },   
        {
          name: "blog",
          path: "/blog",
          component: blog
        },
        {  
          name: "forgot",
          path: "/forgot",
          component: forgot
        }   
    ]
})