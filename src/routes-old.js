import Vue from "vue"
import Router from "vue-router"

//splash-screen
// import loadingComponent from "@/components/loading"

//sign-up&in
import signinComponent from "@/components/auth/signin"
import forgotComponent from "@/components/auth/forgot"

//dashboard
import menuBasedComponent from "@/components/menuBased"

import messagesRoutes from "@/components/dashboard/messages/routes.vue"

import dashboardRoutes from "@/components/dashboard/dashboard"

import profilesRoutes from "@/components/dashboard/profiles/routes.vue"
import ordersRoutes from "@/components/dashboard/orders/routes.vue"
import productionsRoutes from "@/components/dashboard/productions/routes.vue"
import inventoryRoutes from "@/components/dashboard/inventory/routes.vue"



// import reportsRoutes from "@/components/dashboard/reports/routes.vue"
// import supplychainRoutes from "@/components/dashboard/supplychain/routes.vue"
// import pointofsaleRoutes from "@/components/dashboard/pointofsale/routes.vue"
// import maintenanceRoutes from "@/components/dashboard/maintenance/routes.vue"

import marketingsRoutes from "@/components/dashboard/marketings/routes.vue"
import communicationsRoutes from "@/components/dashboard/communications/routes.vue"
import securityRoutes from "@/components/dashboard/security/routes.vue"


import {
  checkPermissions
} from "@/common.js"

Vue.use(Router)
const router =  new Router({
    mode: "hash",
    routes: [
      { path: '', component: signinComponent },
      { path: '/signin', component: signinComponent },
      { path: '/forgot', component: forgotComponent },

      { path: '/admin', component: menuBasedComponent,
        children: [
			{
			    path: '',
                name: 'dashboard',
			    component: dashboardRoutes,
                children: dashboardRoutes.children,
			},
            
            {
                path: 'messages',
                component: messagesRoutes,
                children: messagesRoutes.children
            },

			{
				path: 'profiles',
				component: profilesRoutes,
				children: profilesRoutes.children
			}, 
			
			{
				path: 'orders',
				component: ordersRoutes,
				children: ordersRoutes.children
			},
			
			{
				path: 'inventory',
				component: inventoryRoutes,
				children: inventoryRoutes.children
			},
			
			{
				path: 'marketings',
				component: marketingsRoutes,
				children: marketingsRoutes.children
            },
            

			
			{
				path: 'communications',
				component: communicationsRoutes,
				children: communicationsRoutes.children
			},
			
			{
                path: 'security',
                component: securityRoutes,
                children: securityRoutes.children
			},
      ] }

    ]
  })

router.beforeResolve((to, from, next) => {
//   checkPermissions();
  setTimeout(function () {
    next();
  }, 150);
  
})

export {router}