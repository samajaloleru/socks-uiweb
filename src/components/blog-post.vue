<template>
    <div class="cf w-100"   >
        <div class="cf w-100 pa3 ph5-l " :class="{ 'bg-near-white': (postIndex+1)%2 == 0 }">
            <div class="flex flex-column flex-row-ns ">
                <div class="w-100 w-60-ns pa1 order-2 order-1-l">
                    <p class="fw5 mid-gray b f6-l f7 mt0 mb2">{{post.Author}} | <span class="f6-l f7 orange">{{post.Date}}</span> </p>
                    <div>
                        <h1 class="fw6 f2-l f5-l f6 navy b"><strong>{{post.Title}}</strong></h1>
                        <p class="black-70 f5-l f6 measure lh-copy mv0">
                            {{post.Description}}
                        </p>
                    </div>
                </div>
                <div class="w-100 w-40-ns tl pa1 order-1 order-2-l">
                    <img :src="post.Image" class="db br2 w-70-l fr" alt="">
                </div>
            </div>
        </div>

        <div class="cf w-100 center pv2" v-if="(postIndex+1)%3 == 0">
            <div class="bg-orange mw8 center pa2 pa4-l pa2 pv4-l br2-ns ba b--black-10">
                <div class="f4-l f5-m f6">
                    <p class="b pt0 mid-gray fw6 f2">Feed your addiction with Sock subscription.</p>
                    <div class="pb4 pt2">
                        <router-link  to="membership" class="f6 link ph4 pv3 mb2 dib shadow-1 b tracked ttu br2 bg-navy washed-yellow ba b--white-40">
                            Become a member
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["post","postCount","postIndex"]
    }
</script>
