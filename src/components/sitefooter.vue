<template>
    <footer class="dt v-mid pa4-l bg-dark-gray white vh-50 w-100">
        <div class="cf mw9 ph2 center">
            <div class="dt bb pb3 w-100">
                <div class="dtc v-mid">
                    <img src="@/assets/img/logo.png"  class="w5-l w4">
                </div>
                <div class="dtc fr v-mid">
                    <img src="@/assets/img/nigeria.png"  class="w3">
                </div>
            </div>
            <div class="fl w-100 pv4">
                <div class="fl w-40-l w-100 pa2">
                    <div class="fl w-80-ns">
                        <div class="center pv2">
                            <div class="cf ma0 pa0">
                                <div class="pa0 f6 b f4-ns mb3 silver glow">BE THE FIRST TO KNOW</div>
                                <div class="cf ba br1-ns br2">
                                    <input class="f6 f5-l fl bg-near-white pa2 bn w-75 w-80-l" placeholder="Email Address" type="text" name="email-address" value="" id="email-address">
                                    <input class="f6 f5-l fl pv2 tc bn fw6 b hover-black hover-bg-green white pointer w-25 w-20-l" type="submit" value="Join">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fl w-30-l pa2 w-50-m w-100">
                    <div class="fl v-mid">
                        <img src="@/assets/img/background2.png"  class="h5">                    
                    </div>
                </div>
                <div class="fl w-30-l pa2 w-50-m w-100">
                    <article class="tl pl0-l pl3 f7 fl w-100 f5 silver">
                        <div class="f3 glow tracked silver pb3 b">CONTACT US</div>
                        <div class="pv1 f5">Email <span class="near-white pl2">info@stance.com</span></div>
                        <div class="pv1 f5">Call <span class="near-white pl2">(888) 391-9020</span></div>
                        <div class="pv1 f5 mb3">Text <span class="near-white pl2">(949) 391-4272</span></div>
                        <div class="pv1 f5">Mon-Th <span class="near-white pl2">7am-5pm PST</span></div>
                        <div class="pv1 f5">Fri <span class="near-white pl2">7am-4pm PST</span></div>                    
                    </article>
                </div>
            </div>
            <div class="fl w-100">
                <div class="fl w-40-l w-20-m w-100">
                    <div class="tl-ns pa2 tc">
                        <i class="mr2 mr3-l f3 gray fab fa-facebook-f"></i> 
                        <i class="mr2 mr3-l f3 gray fab fa-twitter"></i> 
                        <i class="mr2 mr3-l f3 gray fab fa-linkedin-in"></i> 
                        <i class="f3 gray fab fa-instagram"></i>
                    </div>
                </div>
                <div class="fl w-60-l w-80-m w-100">
                    <div class="tr-l tc pa2">
                        <a href="/language/" title="Language" class="f5 dib ph2 link silver dim">Our Story</a>
                        <a href="/terms/"    title="Terms" class="f5 dib ph2 link silver dim">Careers</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">The Store</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Loyalty</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Recycle</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Help</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Shipping</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Returns</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Gift Card</a>
                        <a href="/privacy/"  title="Privacy" class="f5 dib ph2 link silver dim">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="pa3 cf tc w-100 center">
                <div class="fl tr-l tc near white w-100 f4-ns f5 b tracked">
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