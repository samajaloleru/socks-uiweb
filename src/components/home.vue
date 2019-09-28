<template>
  <section class="">
    <siteheader/>
    <main class="">
      <div class="cf w-100 bg-black-70 fl cover" :style="{backgroundImage:'url('+require('@/assets/img/bg2.jpg')+')'}">
        <div class="dt vh-50 w-70 center">
          <div class="dtc v-mid pt4-ns pt5">
            <h1 class="f3 f2-m f1-l ttu mv0 b white">YOUR NEW FAVORITE <br/>SOCK SUBSCRIPTION.</h1>
            <p class="white-70 f3-ns f4 ">
                Free Shipping Worldwide. Cancel Anytime.
            </p>
            
            <div class="mw6 cf pt2 pb2">
              <div class="fl pt2 w-50-ns">
                <router-link  to="story" class="f6 link ph2 pv3 mb2 dib shadow-1 fw6 tracked ttu br3 bg-navy orange ba b--white-40">
                  Become A Member
                </router-link>
              </div>
              <div class="fl w-50-ns pt2">
                <router-link  to="story" class="f6 link ph2 pv3 mb2 dib shadow-1 fw6 tracked ttu br3 bg-navy orange ba b--white-40">
                  Gift A Subscription
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dt w-100 center pa4 navy pa5-m pa6-l">
        <div class="dtc v-mid">
          <div class="w-60-l w-100 fl pa3">
            <img src="@/assets/img/bg1.jpg" class="dib cover " >
          </div>
          <div class="w-40-l w-100 fl pl5-l pa3">
            <p class="f2 fw6 ">HOW IT WORKS</p>
            <div class="flex items-center lh-copy ">
              <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
              <div class="pl3 flex-auto">
                <span class="f3 db black-70">PICK YOUR SOCK</span>
                <span class="f5 db measure black-70">Gift it or grab a sub for yourself. You can't go wrong either way.</span>
              </div>
            </div>
            <div class="flex mt4 items-center lh-copy ">
              <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
              <div class="pl3 flex-auto">
                <span class="f3 db black-70">CUSTOMIZED TO YOU</span>
                <span class="f5 db measure black-70">Pick your sock size, sub length, and checkout. Leave the rest to us!</span>
              </div>
            </div>
            <div class="flex mt4 items-center lh-copy ">
              <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
              <div class="pl3 flex-auto">
                <span class="f3 db black-70">UNWRAP AWESOME MONTHLY</span>
                <span class="f5 db measure black-70">Kick back and watch your sock game transform from dull to dashing!</span>
              </div>
            </div>
            <div class="pa4 pl4">
              <router-link  to="story" class="f5 link ph4 pv3 mb2 v-mid grow shadow-1 b tracked ttu br2 bg-orange navy ba b--white-40">
                LETS DO THIS
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 center bb b--mid-gray"></div>  

      <div class="cf w-100 tc pa4-ns pa2">
        <article class="dib mw8 tc pa3">
          <h1 class="f1-l f3 b glow navy tracked-light">SOCK SUBSCRIPTION OPTIONS</h1>
          <p class="f4 center washed-yellow measure lh-copy">
            Free worldwide shipping. Easy exchanges. 100% satisfaction guaranteed.
          </p>
        </article>
        <div class="dt center mw8 pa4">
            <div class="fl-ns pa2 tc">
              <article class="br2 ba washed-yellow b--black-10 mv4 mw5 center">
                <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top " >
                <div class="pa2 ph3-ns pb3-ns">
                  <p class="f4 lh-copy measure mt2">GIFT SUBSCRIPTION</p>
                  <p class="f4 lh-copy measure mt2">Starting at $33</p>
                  <div class="">
                    <router-link  to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-navy white-80 ba b--white-40">
                      CHOOSE
                    </router-link>
                  </div>
                </div>
              </article>
            </div>

            <div class="fl-ns pa2 tc ">
              <article class="br2 ba washed-yellow b--black-10 mv4 mw5 center">
                <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top " >
                <div class="pa2 ph3-ns pb3-ns">
                  <p class="f4 lh-copy measure mt2">MONTHLY SUBSCRIPTION</p>
                  <p class="f4 lh-copy measure mt2">$11 Monthly</p>
                  <div class="">
                    <router-link  to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-navy white-80 ba b--white-40">
                      CHOOSE
                    </router-link>
                  </div>
                </div>
              </article>
            </div>

            <div class="fl-ns pa2 tc">
              <article class="br2 ba washed-yellow b--black-10 mv4 mw5 center">
                <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top " >
                <div class="pa2 ph3-ns pb3-ns">
                  <p class="f4 lh-copy measure mt2">6-PACK SUBSCRIPTION</p>
                  <p class="f4 lh-copy measure mt2">$57 Monthly</p>
                  <div class="">
                    <router-link  to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-navy white-80 ba b--white-40">
                      CHOOSE
                    </router-link>
                  </div>
                </div>
              </article>
            </div>            
        </div>
        
        <div class="w-70 center bb b--mid-gray"></div>
      </div>

      <div class="dt mw8 pb5 center pa3">
        <div class="dtc v-mid">
          <div class="w-50-l w-100 fl navy">
            <p class="f2 b">FLEXIBLE SHIPPING</p>
            <p class="pb4 f4">ORDER NOW. SHIP LATER. RELAX.</p>
            <p class="washed-yellow f5 measure">To enjoy flexible gifting, simply pick your custom ship date, and place your order.</p>
          </div>
          <div class="w-50-l w-100 fl">
            <img src="@/assets/img/bg1.jpg" class="dib cover " >
          </div>
        </div>
      </div>
    </main>
    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember: false
    };
  },
  methods: {
    goToPage() {
      if (this.IsCompany) {
        this.$router.push({ name: "companies" });
      } else {
        this.$router.push({ name: "vendors" });
      }
    },
    keyUp(event) {
      if (event.code == "Enter") {
        this.login();
      }
    },
    login() {
      HTTP.post(
        "/api/login",
        {
          username: this.username,
          password: this.password
        },
        {
          withCredentials: true
        }
      )
        .then(response => {
          this.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 2000);
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