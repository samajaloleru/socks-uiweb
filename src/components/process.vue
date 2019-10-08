<template>
  <section class="fl w-100">
    <siteheader/>
        <div class="fl h3 dn-l dib w-100"></div>
        <div class="cf w-100 cover" :style="{backgroundImage:'url('+require('@/assets/img/background5.png')+')'}">
            <div class="dt vh-50 w-70 center">
                <div class="dtc v-mid">
                    
                </div>
            </div>
        </div>
        
        <div class="cf ph3 ph5-ns mw8 center mid-gray tc pv5">
            <div class="f5 f2-ns tracked b lh-copy measure center">
                <span class="fw6 red">5</span> simple steps to get your custom design idea from your head to the socks.
            </div>
        </div>

        
        <div class="cf w-100 bt ">
            <div class="mw8 center v-mid pt5">
                <div class="w-50-l w-100 fl pa2 pa0-l">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
                <div class="w-50-l pl4-l pa2 pa0-l v-mid mid-gray w-100 fl">
                    <div class="dtc pt3">
                        <div class="tr w-100 f2">
                            Step <br/> <span class="f-headline">1</span>
                        </div>

                         <div class="tr ">
                            <div class="f3 navy measure">Choose your product type, category and sock.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cf w-100 bt ">
            <div class="mw8 center v-mid pt5">
                <div class="w-50-l pa2 pa0-l v-mid mid-gray w-100 fl">
                    <div class="dtc pt3">
                        <div class="tl w-100 f2">
                            Step <br/> <span class="f-headline">2</span>
                        </div>

                         <div class="tr ">
                            <div class="f3 navy measure">Customize your sock colors and graphics and even upload your own custom logo.</div>
                        </div>
                    </div>
                </div>
                <div class="w-50-l w-100 fl pl4-l pa2 pa0-l">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
            </div>
        </div>
        <div class="cf w-100 bt bg-gray ">
            <div class="mw8 center v-mid pt5">
                <div class="w-50-l w-100 fl pa2 pa0-l">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
                <div class="w-50-l pl4-l pa2 pa0-l v-mid w-100 fl">
                    <div class="dtc pt3">
                        <div class="tr white w-100 f2">
                            Step <br/> <span class="f-headline">3</span>
                        </div>

                         <div class="tr ">
                            <div class="f3 navy measure">Finalize your order and complete checkout.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cf w-100 bt ">
            <div class="mw8 center v-mid pt5">
                <div class="w-50-l pa2 pa0-l v-mid mid-gray w-100 fl">
                    <div class="dtc pt3">
                        <div class="tl w-100 f2">
                            Step <br/> <span class="f-headline">4</span>
                        </div>

                         <div class="tr ">
                            <div class="f3 navy measure">Receive your art proof within 48 hours and approve or revise your artwork.</div>
                        </div>
                    </div>
                </div>
                <div class="w-50-l w-100 fl pl4-l pa2 pa0-l">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
            </div>
        </div>
        <div class="cf w-100 bt ">
            <div class="mw8 center v-mid pt5">
                <div class="w-50-l w-100 fl pa2 pa0-l">
                    <img src="@/assets/img/bg1.jpg" class="dib  " >          
                </div>
                <div class="w-50-l pl4-l pa2 pa0-l v-mid mid-gray w-100 fl">
                    <div class="dtc pt3">
                        <div class="tr w-100 f2">
                            Step <br/> <span class="f-headline">5</span>
                        </div>

                         <div class="tr ">
                            <div class="f3 navy measure">Receive and enjoy your awesome custom socks!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dt w-100 center pa4 bg-dark-gray">
            <div class="dtc v-mid">
                <div class="cf center mw8">
                    <div class="f1-l f2-m f3 white pv2 b tc">You look like you're ready.</div>
                    <div class="f4-l f5 f6 white-70 tc">{CLICK ONE OF THE LINKS BELOW TO START YOUR EPIC CUSTOM SOCK JOURNEY}</div>
                    <div class="fl w-100">
                        <div class="fl-ns w-third-ns w-100 pa2 tc">
                            <article class="bg-washed-yellow ba dark-gray shadow-2 b--black-20 mv4 mw9 center">
                                <div class="pa2 pb3-ns">
                                    <p class="f3 f6-m lh-copy measure mt2">Shop Custom Athletic Socks</p>
                                    <div class>
                                        <router-link to="story" class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                                            CHOOSE
                                        </router-link>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="fl-ns w-third-ns w-100 pa2 tc">
                            <article class="ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw9 center">
                                <div class="pa2 pb3-ns">
                                    <p class="f3 f6-m lh-copy measure mt2">Shop Custom Dress Socks</p>
                                    <div class>
                                        <router-link to="story" class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                                            CHOOSE
                                        </router-link>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="fl-ns w-third-ns w-100 pa2 tc">
                            <article class="ba bg-washed-yellow dark-gray shadow-2 b--black-20 mv4 mw9 center">
                                <div class="pa2 pb3-ns">
                                    <p class="f3 f6-m lh-copy measure mt2">Shop Custom Marketing Socks</p>
                                    <div class>
                                        <router-link to="story" class="f5 link ph4 ph2-m pv1-m pv3 mb2 dib shadow-1 fw6 tracked ttu br2 bg-mid-gray white-80 ba b--white-40">
                                            CHOOSE
                                        </router-link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white pa4-l pa2 pv3 cf w-100">
            <div class="cf mw8 center">
                <div class="fl tc w-50-l w-30-m w-100">
                    <div class="f2-l pt2-m f4 fw6 navy measure">Still have questions?</div>
                </div>
                <div class="fl w-50-l w-70-m w-100">
                    <div class="cf pt2 pt0-ns">
                        <div class="fl pl2-m w-40">
                            <router-link to="story" class="f6 link ph2 tc w-100 pv3 dib shadow-1 fw6 tracked ttu br1 bg-mid-gray white ba b--white-40">
                                READ OUR FAQ
                            </router-link>
                        </div>
                        <div class="fl w-20-ns w-10 tc f3 pt2">OR</div>
                        <div class="fl w-40-ns w-50">
                            <div class="f6 ph2 pv3 dib shadow-1 w-100 tc fw6 tracked ttu br1 bg-mid-gray white ba b--white-40">
                                Call (888) 557-9185
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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