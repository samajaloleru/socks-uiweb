<template>
	<section class="fl w-100 bg-dark-red">
		<siteheader/>
        
            <div class="cf w-100 bg-black-70 fl cover" style="background-attachment:fixed" :style="{backgroundImage:'url('+require('@/assets/img/bg2.jpg')+')'}">
                <div class="dt vh-50 w-70 center">
                    <div class="dtc v-mid pt4">
                        <h2 class="f2 i mb2 washed-yellow">Who We Are</h2>
                        <h1 class="f1 f-headline-l ttu mv0 b washed-yellow">About Us</h1>
                        <p class="washed-yellow f4">
                            Mama T's Bakery is a true full service bakery.
                        </p>
                    </div>
                </div>
            </div>

            <div class="cf w-100 tc light-red pa4">
                <article class="dib mw8 tc pa3">
                    <h1 class="f1 glow tracked-light">Our Services </h1>
                </article>
                <div class="dt w-100 pa4">
                    <div class="fl pa2 tc w-100 w-50-m w-third-l">
                        <article class="mw6-l center">
                            <div class="tc">
                                <img src="@/assets/img/customcakes.jpg" class="h3 w3 dib br3" title="">
                            </div>
                            <div class="br3 pa2">
                                <h1 class="f3">Custom Cakes</h1>
                                <p class="lh-copy measure red center f4">
                                    Wedding, anniversaries, birthdays and parties are perfect occasions for cake.  Talk with our cake designer to make the perfect cake for your special day!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="fl pa2 tc w-100 w-50-m w-third-l">
                        <article class="mw6-l center">
                            <div class="tc">
                                <img src="@/assets/img/pasteries.jpg" class="h3 w3 dib br3" title="">
                            </div>
                            <div class="br3 pa2">
                                <h1 class="f3">Pastries</h1>
                                <p class="lh-copy measure red center f4">
                                    From fresh, handmade croissants to scones and cinnamon rolls, we offer a full line of pastries to meet your every need!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="fl pa2 tc w-100 w-third-l">
                        <article class="mw6-l center">
                            <div class="tc">
                                <img src="@/assets/img/cheesecakes.jpg" class="h3 w3 dib br3" title="">
                            </div>
                            <div class="br3 pa2">
                                <h1 class="f3">Cheesecakes</h1>
                                <p class="lh-copy measure red center f4">
                                    Made from scratch with no added preservatives, additives, or fillers.  Try our traditional cheesecakes, or go on the wild side for a creative, 
                                    one-of-a-kind flavor creation with our custom cheesecakes, like our S’mores Cheesecake!
                                </p>
                            </div>
                        </article>
                    </div>            
                </div>
            </div>
            
            <div class="dt w-100 center tc pt0  pa5-ns">
                <div class="dtc v-mid">
                    <div class="w-50-l w-100 fl washed-yellow f4 ph4">
                        <p class="f1 b tl-m">Our Bakery</p>
                        <p class="pb4 measure light-red tj lh-copy pl5-l ">We offer a wide range of tasty baked goods including breads, cookies, pies, pastries, cakes,
                             cupcakes, custom cakes, wedding cakes, and so much more! 
                            Our menu changes daily so be sure to stop in to see what is new or call for your favorite products!
                        </p>
                    </div>
                    <div class="w-50-l w-100 fl">
                        <img src="@/assets/img/whinsprus.jpeg" alt="What inspires us?" class="br-100 h5 w5 dib ba b--black">
                    </div>
                </div>
            </div>

            <div class="dt w-100 center tc pa4 pa5-ns">
                <div class="dtc v-mid">
                    <div class="w-50-l w-100 fr light-red f4 ph4">
                        <p class="f1 b tl">Everything from Scratch</p>
                        <p class="pb4 measure tj lh-copy red">What gives our products their great flavors?
                            <br/><br/>Everything is made from scratch with no added chemicals or mixes. 
                            When the baked goods are not full of overpowering fake flavors you get to taste real and pure ingredients. 
                            Nothing but the best is used in our products!
                        </p>
                    </div>
                    <div class="w-50-l w-100 fl">
                        <img src="@/assets/img/whrwenw.jpeg" alt="Where are we now?" class="br-100 h5 w5 dib ba b--black">
                    </div>
                </div>
            </div>

        <sitefooter></sitefooter>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from '@/components/generic/siteheader';
import sitefooter from "@/components/sitefooter";

export default {
	components: {notify, siteheader, sitefooter},
	data(){ return { formSignup:{Username:"x",Password:"x",Email:""}, notifications:[]}},
	methods: {
      signup() {
		const app = this;
		if (app.formSignup.Email !== "") {
			app.formSignup.Username = app.formSignup.Email;
			app.formSignup.Password = app.formSignup.Email;
		}
        HTTP.post('/api/signup', app.formSignup ,{withCredentials: true}).then(response => {
          console.log(response)
          app.notifications.push(response.data)
		  setTimeout(checkRedirect(response.data),1500)
          if (response.data.Code == 200) {
			  app.formSignup.Username = "x";
			  app.formSignup.Password = "x";
			  app.formSignup.Email = "";
		  }
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
}
</script>
