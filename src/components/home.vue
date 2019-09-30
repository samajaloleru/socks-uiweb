<template>
  <section class>
    <siteheader />
    <div class="fl h3 dn-l dib w-100"></div>
    <div class="cf w-100 cover" :style="{backgroundImage:'url('+require('@/assets/img/background5.png')+')'}">
      <div class="dt vh-50 w-70 center">
        <div class="dtc v-mid">
          <div class="fl w-100 h2-m"></div>
          <h1 class="f3 f2-m f1-l ttu mv0 b gray">
            YOUR NEW FAVORITE
            <br />SOCK SUBSCRIPTION.
          </h1>
          <p class="white f3-ns f4">Free Shipping Worldwide. Cancel Anytime.</p>

          <div class="mw6 cf pt2 pb2">
            <div class="fl pt2 w-50-ns">
              <router-link to="story" class="f6 link ph2 pv3 mb2 dib shadow-1 fw6 tracked ttu br3 bg-washed-yellow mid-gray ba b--white-40">
                Become A Member
              </router-link>
            </div>
            <div class="fl w-50-ns pt2">
              <router-link to="story" class="f6 link ph2 pv3 mb2 dib shadow-1 fw6 tracked ttu br3 bg-washed-yellow mid-gray ba b--white-40">
                Gift A Subscription
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cf mw8 center tc pv3">
      <div class="fl w-100 pa2">
        <div class="w-50-l w-100 fl pa3">
          <img src="@/assets/img/background4.png" class="dib cover"/>
        </div>
        <div class="w-50-l w-100 fl pa3">
          <div class="f2 tl pb3 fw6">HOW IT WORKS</div>
          <div class="fl w-100 pv2">
            <div class="fl w-20">
              <img class="w2 h2 tl w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
            </div>
            
            <div class="fl tl w-80">
              <span class="f3-ns f5 db black-70">PICK YOUR SOCK</span>
              <span class="f6-ns f7 db black-70">Gift it or grab a sub for yourself. You can't go wrong either way.</span>
            </div>
          </div>

          <div class="fl w-100 pv2">
            <div class="fl w-20">
              <img class="w2 h2 tl w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
            </div>
            
            <div class="fl tl w-80">
              <span class="f3-ns f5 db black-70">CUSTOMIZED TO YOU</span>
              <span class="f6-ns f7 db black-70">Pick your sock size, sub length, and checkout. Leave the rest to us!</span>
            </div>
          </div>

          <div class="fl w-100 pv2">
            <div class="fl w-20">
              <img class="w2 h2 tl w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
            </div>
            
            <div class="fl tl w-80">
              <span class="f3-ns f5 db black-70">UNWRAP AWESOME MONTHLY</span>
              <span class="f6-ns f7 db black-70">Kick back and watch your sock game transform from dull to dashing!</span>
            </div>
          </div>

          <div class="fl pl4">
            <router-link to="story" class="f5 link ph4 pv3 mb2 v-mid fl shadow-1 b tracked ttu br2 bg-orange navy ba b--white-40">
              LETS DO THIS
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="cf bg- w-100 tc pa4-ns pa2">
      <article class="dib mw8 tc pa3">
        <h1 class="f1-l f3 b glow navy tracked-light">SOCK SUBSCRIPTION OPTIONS</h1>
        <p class="f4 center mid-gray measure lh-copy">
          Free worldwide shipping. Easy exchanges. 100% satisfaction guaranteed.
        </p>
      </article>
      <div class="dt center mw8 pa4">
        <div class="fl-ns pa2 tc">
          <article class="br2 bg-washed-yellow ba dark-gray shadow-2 b--black-20 mv4 mw5 center">
            <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <p class="f4 lh-copy measure mt2">MONTHLY SUBSCRIPTION</p>
              <p class="f4 lh-copy measure mt2">$11 Monthly</p>
              <div class>
                <router-link to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                  CHOOSE
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div class="fl-ns pa2 tc">
          <article class="br2 ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw5 center">
            <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <p class="f4 lh-copy measure mt2">GIFT SUBSCRIPTION</p>
              <p class="f4 lh-copy measure mt2">Starting at $33</p>
              <div class>
                <router-link to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                  CHOOSE
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div class="fl-ns pa2 tc">
          <article class="br2 ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw5 center">
            <img src="@/assets/img/bg3.jpg" class="dib w-100 br2 br--top" />
            <div class="pa2 ph3-ns pb3-ns">
              <p class="f4 lh-copy measure mt2">6-PACK SUBSCRIPTION</p>
              <p class="f4 lh-copy measure mt2">$57 Monthly</p>
              <div class>
                <router-link to="story" class="f5 link ph4 pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                  CHOOSE
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="w-70 center bb b--gray"></div>
    </div>

    <div class="dt mw8 pb5 center pa3">
      <div class="dtc v-mid">
        <div class="w-50-l w-100 fl mid-gray">
          <div class="f2 b">FLEXIBLE SHIPPING</div>
          <div class="pb4 f4">ORDER NOW. SHIP LATER. RELAX.</div>
          <div class="dark-gray f5 measure">
            To enjoy flexible gifting, simply pick your custom ship date, and place your order.
          </div>
        </div>
        <div class="w-50-l w-100 fl">
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