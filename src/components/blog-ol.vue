<template>
  <section class="fl w-100">
    <siteheader/>
    <div class="cf">
        <div class="w-100 fl cover white" style="background-attachment:fixed; background-position:center; background-size:cover;" :style="{backgroundImage:'url('+require('@/assets/img/joinus.jpg')+')'}">
            <div class="bg-black-60 w-100 fl cover">
                <div class="vh-30 dt w-100 ph6-l ph2">
                    <div class="dtc v-mid ph2 pv6 pb0 mb0">
                        <h4 class="f3-l f3-m f tracked ttu mv0 fw1 w5">Official Community Blog</h4>
                        <p class="f5 white lh-title tracked">
                            Membership of the Digital Tribe Cooperative Multipurpose Society is open to Freelancers, Startups, SME’s and individuals that have attained the age of 18 years and above.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="ph3 ph6-ns pv5">
        <blogpost  v-for="(post, index) in latestList" :key="index" :post="post" ></blogpost>
    </section>
    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";
import blogpost from "@/components/blog-post";
import notify from "@/components/notify"


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
  components: {
    siteheader,
    sitefooter,
    blogpost,
    notify
  },
    data(){return{ latestList, allList, }},
  methods: {
      membership() {
          this.allowMembership = false
          window.scrollTo(200, 20);
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