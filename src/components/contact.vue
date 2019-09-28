<template>
	<section class="bg-dark-red">
		<siteheader/>
            <section class="mw9-l cf light-red center pa5-l pa4 tc">
                <div class="v-mid tc black ph3 ph4-l">
                    <h1 class="f2 f1-l b washed-yellow tc">Contact Us</h1>
                </div>
                <section class="mw8-l mw9 tc center  pa5-l flex flex-row-ns flex-column">
                    <div class="fl w-100 w-50-l">
                        <div class="dt w-100 tracked " style="max-height:800px">
                            <div class="dtc v-mid pv3 ph4">
                                <legend class="pa0 ph2 f4 fw6 f3-ns mb3 tl ttu tracked w-100">CHAT WITH US</legend>
                                <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">
                                    You can call us:<br/>
                                    <a class = "link red" href = "tel:2348064259556" > (234) 806 425 9556 </a>
                                </legend>


                                <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pt1 pb3 lh-landing">Or send us an email: <br/> info@mamatbakery.com</legend>
                                <div class="cf w-100 pv3"></div>
                                <legend class="pa0 ph2 f4 fw6 f3-ns mb3 tl ttu tracked w-100">VISIT OUR OFFICE</legend>
                                <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">Still have questions?</legend>
                                <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tl tracked w-100 pv1 lh-landing">
                                    We are available <br/>
                                    Mon - Fri from 9am - 5pm <br/><br/>

                                    #7 Akinbo Street, Makoko, <br/>

                                    Yaba, Lagos, <br/>Nigeria <br/>
                                </legend>
                            </div>
                        </div>
                    </div>
                    <div class="fl w-100 w-50-l ph2">
                        <div class="dt w-100 tracked">
                            <div class="dtc v-mid tl">
                                <legend class="pa0 ph2 f5 fw6 f4-ns mv3 ttu tracked w-100">SEND US A MESSAGE:</legend>
                                <legend class="pa0 ph2 f6 fw4 f5-ns mb3 tracked w-100 pb2">
                                    <small>Someone from our team will be in touch within 24 hours.</small>
                                </legend>

                                <div class="cf w-100 pv2">
                                    <div class="fl w-100 ph2">
                                        <label class="db fw4 lh-copy f6">FIRST NAME</label>
                                        <input class="fl w-100 f6 input-reset bn black bg-washed-yellow pa2 lh-solid" type="text" placeholder=""  v-model="contact.frstname" />
                                    </div>
                                </div>

                                <div class="cf w-100 pv2">
                                    

                                    <div class="fl w-40 ph2">
                                        <label class="db fw4 lh-copy f6">MOBILE</label>
                                        <input class="fl w-100 f6 input-reset bn black bg-washed-yellow pa2 lh-solid" type="text" placeholder=""  v-model="contact.mobile" />
                                    </div>

                                    <div class="fl w-60 ph2">
                                        <label class="db fw4 lh-copy f6">EMAIL</label>
                                        <input class="fl w-100 f6 input-reset bn black bg-washed-yellow pa2 lh-solid" type="email" placeholder=""  v-model="contact.email" />
                                    </div>
                                </div>

                                <div class="cf w-100 pv2">
                                    <div class="fl w-100 ph2">
                                        <label class="db fw4 lh-copy f5">How would you prefer that we get in touch with you?</label>
                                        <label class="pa0 ma0  f6 pointer"><input type="checkbox"> Mobile</label>
                                        <br/><label class="pa0 ma0  f6 pointer"><input type="checkbox"> Email</label>
                                    </div>
                                </div>

                                <div class="cf w-100 pv2">
                                    <div class="fl w-100 ph2">
                                        <label class="db fw4 lh-copy f6">COMMENTS / QUESTIONS</label>
                                        <textarea class="h4 w-100 f6 input-reset bn black bg-washed-yellow pa2 lh-solid" v-model="contact.message"></textarea>
                                    </div>

                                    <div class="fl w-100 pa2">
                                        <span @click="submitContact" class="f6 button-reset fl pa3 tc bn bg-animate ttu tracked bg-light-red br1 hover-bg-green washed-yellow b pointer">SUBMIT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        <sitefooter/>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
	components: {notify, siteheader, sitefooter},
	data(){ return { contact:{firstname:"",lastname:"", email:""}, notifications:[]}},
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
    }
}
</script>
