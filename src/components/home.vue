<template>
  <section class>
    <siteheader />

      <slider :images="imagelist" delay="2" class="dt w-100 vh-50 vh-75-m">
        <template>
          <div class="dtc bg-black-40 w-100 v-mid ph6-l ph4-m ph2">
            <div class="f2-m f3 fw6 f1-l ttu pb2 b washed-yellow">
              YOUR NEW FAVORITE
              <br />SOCK SUBSCRIPTION.
            </div>
            <div class="white f3-l pb2 f5">Free Shipping Worldwide. Cancel Anytime.</div>

            <div class="mw6 cf pr5 pr0-ns">
              <div class="fl pt2 w-50-ns">
                <router-link
                  to="story"
                  class="f6-ns f8 link ph2 pv3-ns pv2 mb2 dib shadow-1 fw6 tracked ttu br3 bg-mid-gray white ba b--white-40"
                >Become A Member</router-link>
              </div>
              <div class="fl-ns fr w-50-ns pt2">
                <router-link
                  to="story"
                  class="f6-ns f8 link ph2 pv3-ns pv2 mb2 dib shadow-1 fw6 tracked ttu br3 bg-mid-gray white ba b--white-40"
                >Gift A Subscription</router-link>
              </div>
            </div>
          </div>
        </template>
      </slider>

    <div class="dt mw8 center tc pv3">
      <div class="fl w-100 pa2">
        <div class="w-50-ns w-100 fl pa3">
          <img src="@/assets/img/background4.png" class="dib cover" />
        </div>
        <div class="w-50-ns w-100 fl pa3">
          <div class="f2-l f3 tl pb3 fw6">HOW IT WORKS</div>
          <div class="fl w-100 pv2">
            <a class="fl pr2">
              <img class="w2 h2 tl w3-l h3-l br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
            </a>

            <div class="fl tl w-80">
              <span class="f3-l b f5 db black-70">PICK YOUR SOCK</span>
              <span
                class="f6-l f7 db black-70"
              >Gift it or grab a sub for yourself. You can't go wrong either way.</span>
            </div>
          </div>

          <div class="fl w-100 pv2">
            <a class="fl pr2">
              <img class="w2 h2 tl w3-l h3-l br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
            </a>

            <div class="fl tl w-80">
              <span class="f3-l f5 b db black-70">CUSTOMIZED TO YOU</span>
              <span
                class="f6-l f7 db black-70"
              >Pick your sock size, sub length, and checkout. Leave the rest to us!</span>
            </div>
          </div>

          <div class="fl w-100 pv2">
            <a class="fl pr2">
              <img class="w2 h2 tl w3-l h3-l br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
            </a>

            <div class="fl tl w-80">
              <span class="f3-l b f5 db black-70">UNWRAP AWESOME MONTHLY</span>
              <span
                class="f6-l f7 db black-70"
              >Kick back and watch your sock game transform from dull to dashing!</span>
            </div>
          </div>

          <div class="fl pl2">
            <router-link
              to="story"
              class="f5 link ph4 pv3 mb2 v-mid fl shadow-1 fw6 tracked ttu br2 bg-gray white ba b--white-40"
            >LETS DO THIS</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="cf bg-moon-gray w-100 tc pa4-ns pa2">
      <article class="dib mw8 tc pa3">
        <h1 class="f1-l f3 b glow navy tracked-light">SOCK SUBSCRIPTION OPTIONS</h1>
        <p
          class="f4 center white measure lh-copy"
        >Free worldwide shipping. Easy exchanges. 100% satisfaction guaranteed.</p>
      </article>
      <div class="cf center mw8 pa4-l">
        <div class="fl w-100">
          <div class="fl-ns w-third-ns w-100 pa2 tc">
            <article class="br2 bg-washed-yellow ba dark-gray shadow-2 b--black-20 mv4 mw5 center">
              <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
              <div class="pa2 ph3-ns pb3-ns">
                <p class="f4 f6-m lh-copy b measure mt2">MONTHLY SUBSCRIPTION</p>
                <p class="f4 f6-m lh-copy b measure mt2">$11 Monthly</p>
                <div class>
                  <router-link
                    to="story"
                    class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40"
                  >CHOOSE</router-link>
                </div>
              </div>
            </article>
          </div>

          <div class="fl-ns w-third-ns w-100 pa2 tc">
            <article class="br2 ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw5 center">
              <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
              <div class="pa2 ph3-ns pb3-ns">
                <p class="f4 f6-m lh-copy b measure mt2">GIFT SUBSCRIPTION</p>
                <p class="f4 f6-m lh-copy b measure mt2">Starting at $33</p>
                <div class>
                  <router-link
                    to="story"
                    class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40"
                  >CHOOSE</router-link>
                </div>
              </div>
            </article>
          </div>

          <div class="fl-ns w-third-ns w-100 pa2 tc">
            <article class="br2 ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw5 center">
              <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
              <div class="pa2 ph3-ns pb3-ns">
                <p class="f4 f6-m lh-copy b measure mt2">6-PACK SUBSCRIPTION</p>
                <p class="f4 f6-m lh-copy b measure mt2">$57 Monthly</p>
                <div class>
                  <router-link
                    to="story"
                    class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40"
                  >CHOOSE</router-link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="w-70 center bb b--washed-yellow"></div>
    </div>

    <div class="dt mw8 pb5 center pa3">
      <div class="dtc v-mid">
        <div class="w-50-l w-100 fl mid-gray">
          <div class="f2 b">FLEXIBLE SHIPPING</div>
          <div class="pb4 f4">ORDER NOW. SHIP LATER. RELAX.</div>
          <div
            class="dark-gray f5 measure"
          >To enjoy flexible gifting, simply pick your custom ship date, and place your order.</div>
        </div>
        <div class="w-50-l w-100 fl pa2">
          <img src="@/assets/img/bg1.jpg" class="dib cover" />
        </div>
      </div>
    </div>
    <sitefooter />
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import slider from "@/components/generic/slider";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter,
    slider
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember: false,
      imagelist: [
        "assets/background6.png",
        "assets/background2.png",
        "assets/background5.png"
      ]
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