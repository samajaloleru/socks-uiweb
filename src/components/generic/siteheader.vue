<template>
    <header class="">
      <nav class="bg-dark-gray dn dib-l w-100 tc pv2">
        <div class="dib ">
          <img src="@/assets/img/logo.png" class="dib h4 " >

        </div>
        <nav class="tc mw8 center mt3">
          <router-link to="/"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Home</router-link>
          <router-link to="/story"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Our Story</router-link>
          <router-link to="/product"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Products</router-link>
          <router-link to="/process"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Our Process</router-link>
          <router-link to="/blog"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Blog</router-link>
          <router-link to="/custom"  class="no-underline dim light-gray b f6 f3-l dib pa3 ph4-l" >Custom Socks</router-link>
        </nav>
      </nav>

      <nav class="w-100 center dn-l dib cf f6 f5-ns inline-flex items-center fw5 h3 " :class="bgMenu" >
            <nav class="dt w-100 border-box ph3-l fixed bg-dark-gray">
                <div class="dtc v-mid w-70  tl pa3">
                    <router-link to="/" class="dtc v-mid mid-gray link dim" title="Home">
                        <img src="@/assets/img/logo.png" class="dib h3 " alt="DTCoop">
                    </router-link>
                </div>
                <div class="dtc v-mid w-30 tr pa3">
                    <span class="dn-l dib" @click="toggleMenu" >
                        <i class="fa fa-bars f2 tr washed-yellow"></i>
                    </span>
                </div>
            </nav>
        </nav>
      <div class="top-0 right-0 vh-100 dib dn-l bg-black-10 fixed w-100 z-max" :class="{'slideInRight':lShow, 'slideOutRight':!lShow}" @click="toggleMenu">
          <nav class="vh-100 bg-gray fr">
              <ul class="list pt0 ph0 pr4 mt0 overflow-y-scroll dn-l w5" style="height:100vh">
                  <li class="ph2 dim pointer tr right-2" >
                      <p class="h3 f7 inline-flex items-center pr4 mv0 dark-gray">
                          <i class="fa fa-sign-out-alt f2"></i>
                      </p>
                  </li>
                  <menulistitem :to="sub.to" :icon="sub.icon" :title="sub.title" v-for="(sub, index) in submenu" :key="index" />
              </ul>
          </nav>
      </div>
    </header>
</template>
<script type="text/javascript">
import menulistitem from "@/components/generic/menulistitem";
import menulistgroup from "@/components/generic/menulistgroup";
const submenu = [
    { to: "/", icon: "", title:"Home" },
    { to: "/story", icon: "", title: "Our Story" },
    { to: "/product", icon: "", title: "Products" },
    { to: "/process", icon: "", title: "Our Process" },
    { to: "/blog", icon: "", title: "Blog" },
    { to: "/custom", icon: "", title: "Custom Socks" },

];

export default {
  data() {
    return {
      submenu,
      lShow: false,
      hideMenu: "",
      bgMenu: "bg-white-90"
    };
  },
  methods: {
    toggleMenu() {
      this.lShow = !this.lShow;
      //document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
    },
    hideMenuOnScroll() {
      var hideMenu;
      var shrinkOn = 100;
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      if (distanceY < shrinkOn) {
        hideMenu = "dn";
      } else {
        hideMenu = "";
      }
      if (hideMenu !== this.hideMenu) {
        this.hideMenu = hideMenu;
      }
    }
  },
  components: {
    menulistgroup,
    menulistitem
  },
  beforeMount() {
    if (this.$route.fullPath == "/") {
      this.hideMenu = "dn";
      window.addEventListener("scroll", this.hideMenuOnScroll, false);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideMenuOnScroll, false);
  }
};
</script>
