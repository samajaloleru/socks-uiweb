<template>
  <section class="fl w-100">
    <siteheader/>
    <main class="">
        <div class="cf">
            <div class="cf w-100 bg-black-70 fl cover" style="background-attachment:fixed" :style="{backgroundImage:'url('+require('@/assets/img/bg2.jpg')+')'}">
                    <div class="dt vh-50 w-70 center">
                        <div class="dtc v-mid pt4">
                            
                        </div>
                    </div>
                </div>
        </div>
        
        <div class="cf ph3 ph5-ns center mid-gray tc pv5">
            <h1 class="f1 navy mt0 mb3">OUR STORY</h1>
            <article class="pa4">
                <p class="f5 f4-ns lh-copy measure center">
                    Sock Fancy launched in 2013 as a simple solution to a growing frustration. 
                    Finding the perfect pair of comfortable, durable, and awesomely-designed socks was often too difficult, too expensive, and too inconvenient.
                </p>
                <p class="f5 f4-ns lh-copy measure center">
                    Stefan Lewinger and Futhum Tewolde are lifelong friends, who later became roommates when they both moved to Atlanta in 2011. 
                    Futhum always showed off his socks around their house, but lamented the fact that he often had to settle for poorly made socks 
                    from big box stores or pay an arm and a leg for a decent pair from the small selections at specialty shops. 
                    They saw a big opportunity to team up and create something better. Within a few weeks, Stefan launched the site, 
                    Futhum placed the first sock order, and they began shipping from their living room ping pong table.
                </p>
                <p class="f5 f4-ns lh-copy measure center">
                    Today, Sock Fancy has relocated into a 5,000-sq. ft. warehouse and office space in the Cabbagetown neighborhood of 
                    Atlanta where they have shipped over 500,000 pairs of socks to over 85 countries around the world.
                </p>
            </article>
        </div>

        <div class="dt-ns navy dt--fixed-ns bg-mid-gray">
            <div class="dtc-ns v-mid tc pv4">
                <h1 class="b f2">STEFAN LEWINGER</h1>
                <h1 class="b f4 washed-yellow">Co-Founder | CEO</h1>

            </div>
            <div class="dtc-ns v-mid tc pv4 ">
                <img src="@/assets/img/logo.png" class="dib h4 h3-m " >
            </div>
            <div class="dtc-ns v-mid tc pv4">
                <h1 class="b f2">FUTHUM TEWOLDE</h1>
                <h1 class="b f4 washed-yellow">Co-Founder | COO</h1>
            </div>
        </div>

        
        <div class=" w-100 center pa4 pa5-m pa6-l">
            
            <div class="dtc v-mid pt5">
                <div class="w-50-l w-100 fl">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
                <div class="w-50-l pl4-l mid-gray w-100 fl">
                    <p class="f3 navy b">FEED YOUR ADDICTION WITH A SOCK SUBSCRIPTION.</p>
                    <p class="pb4 lh-copy f5">A Sock Fancy sock subscription features a huge selection of unique, awe-inspiring, and sometimes bizarre socks. 
                        But don’t let our whimsical nature fool you - we take quality and comfort very seriously. All our socks are made from high
                        quality cotton blends on a 200-count needle machine, guaranteed to last numerous slides down the hallway, Tom Cruise style. 
                        These soft cotton blends ensure a more comfortable fit and a sock that won’t shrink after a few washes.
                    </p>
                    
                    <div class="pb4 pt2">
                        <router-link  to="membership" class="f5 link ph4 pv3 mb2 dib shadow-1 fw7 tracked bb bw3 ttu navy br3  b--washed-yellow">
                            Become A Member
                        </router-link>
                    </div>
                    <div class="w-100  bw2 bb b--orange"></div>
                    
                    <div class="dt w-100 center">
                        <div class="fl pa2 tc w-third pv4-ns pv2">
                            <div class="tc washed-yellow">
                                <i class="fas f1 fa-socks"></i>
                            </div>
                            <div class="tc pa2">
                                <h1 class="f5 navy">1. Pick Your Subscription</h1>
                            </div>
                        </div>

                        <div class="fl pa2 tc w-third pv4-ns pv2">
                            <div class="tc washed-yellow">
                                <i class="fas f1 fa-sliders-h"></i>
                            </div>
                            <div class="tc pa2">
                                <h1 class="f5 navy">2. Customize</h1>
                            </div>
                        </div>

                        <div class="fl tc w-third pv4-ns pv2">
                            <div class="tc washed-yellow">
                                <i class="fas f1 fa-box-open"></i>
                            </div>
                            <div class="tc pa2">
                                <h1 class="f5 navy">3. Unwrap Awesome</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>

        <div class="dt w-100 center pa4 pa5-m pa6-l bg-near-white">
            <div class="dtc v-mid">
                <div class="w-50-l w-100 tc fl mid-gray ph4">
                    <p class="f2 ttu orange fw6">Our Sock Tech</p>
                    <div class="pb4 navy">
                        <h1 class="b f4">NO-SLIP CUFF</h1>
                        <p class="tc center measure-narrow">
                            Socks guaranteed to stay put all day under the toughest circumstances. 
                        </p>
                    </div>
                    <div class="pb4 navy">
                        <h1 class="b f4">HIGH QUALITY COMBED COTTON</h1>
                        <p class="tc center measure-narrow">
                            Constructed from 70% combed cotton for an ultra-soft yet durable fit every time.
                        </p>
                    </div>
                    <div class="pb4 navy">
                        <h1 class="b f4">200 NEEDLE CONSTRUCTION</h1>
                        <p class="tc center measure-narrow">
                            200 needle machine yield brighter, softer, more detailed, and longer lasting socks.
                        </p>
                    </div>
                    <div class="pb4 navy">
                        <h1 class="b f4">REINFORCED HEEL AND TOE</h1>
                        <p class="tc center measure-narrow">
                            Strong fibers to give you the durability you need without the added bulk.
                        </p>
                    </div>
                </div>
                <div class="w-50-l w-100 fl">
                    <div class="aspect-ratio aspect-ratio--16x9 ">
                        <div class="aspect-ratio--object cover" style="background:url(http://mrmrs.github.io/photos/001.jpg) center;"></div>
                    </div>
                    <div class="aspect-ratio aspect-ratio--16x9">
                        <div class="aspect-ratio--object cover" style="background:url(http://mrmrs.github.io/photos/001.jpg) center;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" w-100 center pa4 pa5-m pa6-l">
            <h1 class="b ttu navy tc f1">Our Social</h1>
            <div class="w-80 bw2 center bb b--orange"></div>
            
            <h1 class="ttu tc mid-gray pt4 f4"># F i T S O C K</h1>
            
            <div class="pa2 tc">
                <i class="mr2 mr3-l f2 orange fab fa-facebook-f"></i> 
                <i class="mr2 mr3-l f2 orange fab fa-twitter"></i> 
                <i class="mr2 mr3-l f2 orange fab fa-linkedin-in"></i> 
                <i class="f2 orange fab fa-instagram"></i>
            </div>
            
            <main class="cf mt4 w-100">
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0006.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0002.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0003.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0004.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0007.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0008.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0008.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                <div class="fl w-50 w-third-m w-25-ns">
                    <div class="aspect-ratio aspect-ratio--16x9">
                    <div style="background-image:url(http://mrmrs.github.io/images/0008.jpg);"
                        class="bg-center cover aspect-ratio--object"></div>
                    </div>
                </div>
                
            </main>
        </div>
        <p class="tc center f4 orange b">
            Join Us on Instagram
        </p>
        
      
    </main>
    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import notify from "@/components/notify";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
    created(){},
        data() {return{
        url: "/api/customers",
        record: {Image:""},
        notifications:[],
        isSave:true,
        tabProps:{},
        }},
        components: { notify,siteheader, sitefooter },
        methods: {
        uploadImageDisplay(field) {
            displayImage(event, this, field)
        },
        uploadImage(imageRef) {
            this.$refs[imageRef].click()
        },
        save () {
            const app = this;
            app.isSave = false;
            HTTP.post(app.url, app.record, {withCredentials: true})
            .then((response) => {
                this.notifications.push(response.data)
                setTimeout(checkRedirect(response.data),1500)

                app.isSave = true;
                if(response.data.Body !== null && response.data.Code == 200){
                    app.$refs.settinglines.saveLines(response.data.Body);
                    app.$refs.documentlines.saveLines(response.data.Body);
                }

            }).catch((e) => {
            console.log(e)
            })
        }
    }
};
</script>
<style>
    input {
        border-left : none!important;
        border-right : none!important;
        border-top : none!important;
    }
    input:focus{
        color : black!important;
        outline: none!important;
        border-bottom : 2px solid black;
    }
</style>