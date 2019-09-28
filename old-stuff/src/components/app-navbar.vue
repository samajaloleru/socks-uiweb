<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top">
    <div class="container">
      <div class="navbar-translate">
        <a
          class="navbar-brand"
          href="#"
          rel="tooltip"
          title="Digital Tribe Cooperative Multipurpose Society"
          data-placement="bottom"
          target="_blank"
        >
          <img src="../assets/img/logo.png" alt>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse "
      >
        <ul class="navbar-nav ml-auto">
          <router-link to="/">
            <li class="nav-item ">
              <a class="nav-link">
                <i class="fas fa-2x fa-home red" aria-hidden="true"></i>
                <p style="font-size: 12px">Home</p>
              </a>
            </li>
          </router-link>
          <router-link to="/membership">
            <li class="nav-item ">
              <a class="nav-link">
                <i class="fa fa-users red"></i>
                <p style="font-size: 12px">Membership</p>
              </a>
            </li>
          </router-link>
          <router-link to="/team">
            <li class="nav-item ">
              <a class="nav-link">
                <i class="fas fa-users red"></i>
                <p style="font-size: 12px">Team</p>
              </a>
            </li>
          </router-link>
          <router-link to="/contact">
            <li class="nav-item ">
              <a class="nav-link">
                <i class="fas fa-headset red"></i>
                <p style="font-size: 12px">Contact Us</p>
              </a>
            </li>
          </router-link>
          <router-link to="/register">
            <li class="nav-item">
              <a class="nav-link btn btn-round bg-default" >
                <p class="red" style="font-size: 18px">Register Now</p>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { HTTP } from "@/common";
import notify from "@/components/notify";
import appnavbar from "@/components/app-navbar";
import appfooter from "@/components/app-footer";
const submenu = [
  { to: "/", icon: "", title: "Home" },
  { to: "/membership", icon: "", title: "Membership" },
  { to: "/team", icon: "", title: "Team" },
  { to: "/contact", icon: "", title: "Contact Us" },
  { to: "/register", icon: "", title: "Register Now" }
];

export default {
  components: { notify, appnavbar, appfooter },
  data() {
    return {
      formSignup: { Username: "x", Password: "x", Email: "" },
      notifications: []
    };
  },
  methods: {
    signup() {
      const app = this;
      if (app.formSignup.Email !== "") {
        app.formSignup.Username = app.formSignup.Email;
        app.formSignup.Password = app.formSignup.Email;
      }
      HTTP.post("/api/signup", app.formSignup, { withCredentials: true })
        .then(response => {
          console.log(response);
          app.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 1500);
          if (response.data.Code == 200) {
            app.formSignup.Username = "x";
            app.formSignup.Password = "x";
            app.formSignup.Email = "";
          }
        })
        .catch(e => {
          console.log(e);
          this.error = e;
          // this.errors.push(e)
        });
    }
  }
};
</script>