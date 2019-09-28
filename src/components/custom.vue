<template>
  <section class="fl w-100 bg-dark-red">
    <siteheader/>

    <div class="cf w-100 bg-black-70 fl cover" style="background-attachment:fixed" :style="{backgroundImage:'url('+require('@/assets/img/bg2.jpg')+')'}">
      <div class="dt vh-50 w-70 center">
        <div class="dtc v-mid pt4">
          <p class="orange f1 b">
              Order Your Custom Socks
          </p>
        </div>
      </div>
    </div>

    <div class="mw8 center pa2 dt ">
      <div class="w-100">
        <div class="mw6 mid-gray center pa4 v-mid ">
          <legend class="pa0 ph2 f4 b orange mv3 ttu tracked w-100">NEED A FREE CUSTOM SOCK MOCKUP?</legend>
          <div class="cf w-100 pv2">
            <div class="fl w-100 ph2">
              <label class="db fw4 lh-copy f6">FIRST NAME</label>
              <input class="fl w-100 f6 input-reset bn mid-gray bg-washed-yellow pa2 lh-solid" type="text" placeholder=""  v-model="contact.firstname" />
            </div>
          </div>
          <div class="cf w-100 pv2">
            <div class="fl w-100 ph2">
              <label class="db fw4 lh-copy f6">FIRST NAME</label>
              <input class="fl w-100 f6 input-reset bn mid-gray bg-washed-yellow pa2 lh-solid" type="text" placeholder=""  v-model="contact.frstname" />
            </div>
          </div>
          <div class="cf w-100 pv2">
            <div class="fl w-100 ph2">
              <label class="db fw4 lh-copy f6">EMAIL</label>
              <input class="fl w-100 f6 input-reset bn mid-gray bg-washed-yellow pa2 lh-solid" type="email" placeholder=""  v-model="contact.email" />
            </div>
          </div>
          <div class="fl w-100 pa2">
            <span @click="submitContact" class="f6 button-reset fl pa3 tc bn bg-animate ttu tracked bg-navy br1 hover-bg-dark-green washed-yellow b pointer">SUBMIT</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pa4 tc">
      <h1 class="f2 navy">CUSTOM SOCK PRICING</h1>
      <h1 class="f4  b washed-yellow">*100 pair minimum order required</h1>
      <div class="orange f5 overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr class="stripe-dark mid-gray">
              <th class="fw6 pa3 bg-white">Pairs</th>
              <th class="fw6 pa3 bg-white">100-299</th>
              <th class="fw6 pa3 bg-white">300-499</th>
              <th class="fw6 pa3 bg-white">500-899</th>
              <th class="fw6 pa3 bg-white">900+</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">Crew Socks</td>
              <td class="pa3">$10.15 /pair</td>
              <td class="pa3">$7.75 /pair</td>
              <td class="pa3">$7.15 /pair</td>
              <td class="pa3">$6.65 /pair</td>
            </tr>
          </tbody>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">Crew Socks</td>
              <td class="pa3">$8.75 /pair</td>
              <td class="pa3">$6.68 /pair</td>
              <td class="pa3">$5.90 /pair</td>
              <td class="pa3">$5.00 /pair</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="f4">
        Custom Sock Lead Time: 30 days   |   Custom Sock Minimums: 100 pairs per design, size, and color
      </p>
    </div>
    <div class="w-80  center bb b--mid-gray"></div>

    <div class="cf ph3 ph5-ns washed-yellow pv5">
      <h2 class="f2 navy tc mt0 mb3">WHY DOES EVERYONE LOVE SOCK FANCY CUSTOM SOCKS?</h2>
      <article class="pa4">
        <h2 class="f3 orange">HIGHEST QUALITY MATERIALS</h2>
        <p class="f4 lh-copy mid-gray">
            In a Sock Fancy custom sock, we use the finest combed cotton combined with a unique blend of spandex, 
            nylon, and polyester to ensure the most comfortable, durable, and universally fitting socks.
            <br/><br/>Our socks are woven using state of the art, 200 needle-point industrial sewing machines that
             can incorporate finely stitched custom designs with incredible detail into your organization’s custom socks.
             <br/><br/>Because our custom socks are woven instead of screen-printed, we are able to incorporate 6 different thread
              colors of any kind, including your organization’s customized PMS colors. This ensures that your socks’ colors will neither fade or run.
        </p>
      </article>
      <article class="pa4">
        <h2 class="f3 orange">ALL-PURPOSE</h2>
        <p class="f4 lh-copy mid-gray">
           Because Sock Fancy socks are so durable, our multi-functional custom socks can be used in any setting!
            <br/><br/>Whether you are wearing a company uniform or our custom socks with your suits, these socks 
            add a pop of color and fashionable designs that the whole team will love!
             <br/><br/>Our 200 needle-point sewing machine ensures high-breathability, a weave that will eliminate pixelated designs. 
             We guarantee fine detail no matter how intricate your custom sock designs may be. 
             Boost your marketing, promotion, or employee gift baskets by showing how much detail matters to you!
        </p>
      </article>
      <article class="pa4">
        <h2 class="f3 orange">YOU’RE IN TOTAL CONTROL</h2>
        <p class="f4 lh-copy mid-gray">
            Our design team does so much more in the sock design process than paste your logo or image on a sock.
            <br/><br/>At Sock Fancy, we strive to have each of our custom socks designed to directly reflect your companies’ culture.
             <br/><br/>Our designs incorporate your brand image/logo into unique and eye-catching styles.
             <br/><br/>Send us your logo or PMS color image files that you would like on your organization’s custom socks, 
             as well as any notes detailing what type of pattern/design that you would like to see on your socks. 
             We will then send you virtual mock-ups of your socks before we make them, 
             you can make countless customizations until your custom sock is exactly how you need it to be..
        </p>
      </article>
      <article class="pa4">
        <h2 class="f3 orange">BEST CUSTOMER SERVICE IN THE GAME</h2>
        <p class="f4 lh-copy mid-gray">
            When ordering your custom socks, our team guarantees a seamless process from start to finish.
            <br/><br/>Sock Fancy also offers a super speedy turnaround time, perfect for any deadline. 
            Sock Fancy has the best components to ensure your custom sock order is quick, easy, precise, and the highest quality around.
        </p>
      </article>
      
    </div>
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
      contact:{firstname:"",lastname:"", email:""},
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember:false,
    };
  },
  methods: {
    submitContact() {
      const app = this;
      app.notifications = [];
      HTTP.post("https://cp.essentials.ng/api/signup-newsletter", app.contact,{withCredentials: true}).then((response) => {
          console.log(response.data);
          app.notifications.push(response.data)
      }).catch((e) => {
          app.status = {}
          console.log(e)
      })
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