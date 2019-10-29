<template>
    <footer class="dt v-mid pa4-l bg-dark-gray white vh-50 w-100">
        <div class="cf mw9 mb5 ph2 center">
            <div class="dt bb pb3 w-100">
                <div class="dtc v-mid">
                    <img src="@/assets/img/logo.png"  class="w5-l w4">
                </div>
                <div class="dtc fr v-mid">
                    <img src="@/assets/img/nigeria.png"  class="w3">
                </div>
            </div>
            <div class="fl w-100 pv4">
                <div class="fl w-50">
                    <div class="fl w-80 pr4">
                        <div class="fl w-60">
                            <div class="center pv2">
                                <div class="cf bn ma0 pa0">
                                    <legend class="pa0 f5 f4-ns mb3 white">BE THE FIRST TO KNOW</legend>
                                    <div class="cf ba">
                                        <input class="f6 f5-l fl input-reset signin bg-transparent pa2 lh-solid w-100 w-75-m w-80-l b--white br--right-ns" placeholder="Email Address" type="text" name="email-address" value="" id="email-address">
                                        <input class="f6 f5-l button-reset fl pv2 tc bn hover-bg-black white pointer w-100 w-25-m b--orange bw2 w-20-l br2-ns br--right-ns" type="submit" value="Join">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-40">
                            <div class="cf pa2 pl3">
                                <legend class="pa0 f5 f4-ns mb3 white">STORE LOCATOR</legend>
                                <div class="cf">
                                    <div class="ba tc pa2">
                                        Find Store
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fl w-50">
                    <article class="tl f7 fr f5 dib-ns w-40 silver">
                        <div class="f4 glow dark-gray pb3 b">CONTACT US</div>
                        <div class="pv1">Email <span class="orange">info@stance.com</span></div>
                        <div class="pv1">Call <span class="orange">(888) 391-9020</span></div>
                        <div class="pv1 mb3">Text <span class="orange">(949) 391-4272</span></div>
                        <div class="pv1">Mon-Th <span class="orange">7am-5pm PST</span></div>
                        <div class="pv1">Fri <span class="orange">7am-4pm PST</span></div>                    
                    </article>
                </div>
            </div>
            <div class="fl w-100">
                <div class="fl w-40">
                    <div class="pa2">
                        <i class="mr2 mr3-l f4 white fab fa-facebook-f"></i> 
                        <i class="mr2 mr3-l f4 white fab fa-twitter"></i> 
                        <i class="mr2 mr3-l f4 white fab fa-linkedin-in"></i> 
                        <i class="f4 white fab fa-instagram"></i>
                    </div>
                </div>
                <div class="fl w-60">
                    <div class="tr pa2">
                        <a href="/language/" title="Language" class="f5 dib ph2 link white dim">Our Story</a>
                        <a href="/terms/"    title="Terms" class="f5 dib ph2 link white dim">Careers</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">The Store</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Loyalty</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Recycle</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Help</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Shipping</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Returns</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Gift Card</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link white dim">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="pa3 cf tc w-100 center">
                <div class="fl tr washed-yellow w-100 f5 b tracked">
                    © {{date}} FiT Socks. All Rights Reserved.
                </div>
            </div>
        </div>      
    </footer>
</template>

<script type="text/javascript">
    export default {
        data(){return{ contact:{firstname:"",lastname:"", email:""},date: new Date().getFullYear()}},
        methods:{
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
            scrollTop(){
                const   scrollHeight = window.scrollY,
                scrollStep = Math.PI / ( 300 / 15 ),
                cosParameter = scrollHeight / 2;
                var scrollCount = 0, scrollMargin,
                scrollInterval = setInterval( function() {
                    if ( window.scrollY != 0 ) {
                        scrollCount = scrollCount + 1;  
                        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                    } 
                    else clearInterval(scrollInterval); 
                }, 15 );
            }
        }
    }
</script>