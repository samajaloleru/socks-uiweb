
import Vue from "vue"
import {router} from "@/routes"
import App from "./app.vue"

window.$ = require('jquery')

import 'bootstrap';

require("@/assets/js/now-ui-kit.js")

new Vue ({
  el: "#app",
  router,
  render: h => h(App)
})
