<template>
	<section>
        <span class="dib absolute pa3">
            <router-link to="/"  class="ph2 pv2 link br2 navy bg-orange shadow-1 f6 inline-flex items-center fr"> 
                <i class="fa fa-arrow-alt-left f6 tr navy mr2"></i> BACK
            </router-link>
        </span>

        <div class="cf tc w-100 bg-near-white pv2">
            <router-link to="/"  class=""> 
                <article class="dib mw8 tc">
                    <img src="@/assets/img/logo.png" class="dib" style="height:3.5em" alt="DTCoop" />
                    <h4 class="center measure mv1 f4 mid-gray" >Official Community Blog</h4>
                </article>
            </router-link>
        </div>
            
        <div class="fl w-100" style="">
            <div class="w-100 cover white">
                <div class=" w-100 fl cover relative bg-near-white">

                    <div class="flex flex-column flex-row-ns items-center">
                        <div class="w-100 w-50-ns pa1 order-2 order-1-l">
                            <div class=" mw6 center">
                                <h4 class="f2-l f3 f ttu mv0 fw6 w8 navy">The Socks Blog</h4>
                                <p class="orange f6">Don't miss any update from the World Of Socks!</p>
                            </div>
                        </div>
                        <div class="w-100 w-50-ns tl pa1 order-1 order-2-l">
                            <img class="w-100" src="@/assets/img/teamspirit.png" />
                        </div>
                    </div>

                </div>
            </div>
            <!--<section class="center w-100 fl overflow-auto pv3">
                <blogpost  v-for="(post, index) in latestList" :key="index" :post="post" ></blogpost>
            </section>-->

            <!-- <div class="pa3 b tracked ttu bg-black white fl w-100 bb bt b--black-10"> LATEST NEWS : <span class="f6">Tech Giant Invests Huge Money to</span></div> -->
            <section class="center w-100 fl overflow-auto " style="max-height:calc(50vh-200px)">
                <blogpost  v-for="(post, index) in allList" :key="index" :post="post" :postCount="allList.length" :postIndex="index"></blogpost>
            </section>
        </div>
            
        <sitefooter/>
	</section>
</template>

<script>

import {HTTP} from '@/common';
import notify from "@/components/notify"
import sitefooter from "@/components/sitefooter";
import blogpost from "@/components/blog-post";

const latestList = [
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
]

const allList = [
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
    {
        Date:"Nov. 21, 2019",
        Author:"Fawwaz Ali-Balogun",
        Image:"http://mrmrs.github.io/photos/cpu.jpg",
        Title:"Tech Giant Invests Huge Money to",
        Description:"The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
    },
];

export default {
	components: {notify, sitefooter, blogpost},
	data(){return{ latestList, allList, }},
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
