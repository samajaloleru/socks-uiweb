<template>
    <footer class="fl pa4 bg-mid-gray white w-100">
        <div class="pb3 mw9 center">
            <div class="fl pb5 w-100 ">
                <div class="fl w-20-l w-100 tc pt3 ">
                    <p class="ttu dark-gray b f2">follow</p>
                    <div class="pa2">
                        <i class="mr2 mr3-l f2 white fab fa-facebook-f"></i> 
                        <i class="mr2 mr3-l f2 white fab fa-twitter"></i> 
                        <i class="mr2 mr3-l f2 white fab fa-linkedin-in"></i> 
                        <i class="f2 white fab fa-instagram"></i>
                    </div>
                    <div class="fl pa3 tc w-100">
                        <img src="@/assets/img/footer.png"  class="h5">
                    </div>

                
                </div>
                <div class="fl w-20-l w-50 pa3 ">
                    <article class="tl f5 dib-ns w-100">
                        <h4 class="f3 glow dark-gray b">SHOP</h4>
                        <div class="pb1">SUBSCRIPTION</div>
                        <div class="pv1">GIFT SUBSCRIPTION </div>
                        <div class="pv1">BULK SUBSCRIPTION </div>
                        <div class="pv1">SHARK WEEK SOCKS</div>
                        <div class="pv1">CUSTOM SOCKS </div>                    
                    </article>
                    
                </div>
                <div class="fl w-20-l w-50 pa3">
                    <article class="tl f5 dib-ns w-100">
                        <h4 class="f3 glow dark-gray b">USEFUL STUFF</h4>
                        <div class="pb1">CONTACT US</div>
                        <div class="pv1">MY ACCOUNT</div>
                        <div class="pv1">FAQS</div>
                        <div class="pv1">OUR STORY</div>
                        <div class="pv1">OUR SOCKS</div>
                        <div class="pv1">OUR BLOG </div>                    
                        <div class="pv1">PRINTABLE GIFT RECEIPT</div>                    
                    </article>
                </div>
                <div class="fl w-40-l w-100 pa3">
                    <div class="w-100" >
                        <h4 class="f3 glow dark-gray b">JOIN THE FAM</h4>
                        <p class="f5 white mb2 mt0">
                            Sign up to get the latest on sales, new releases and more …
                        </p>
                        <div class="w-100 fl mt3">
                            <div class="fl w-50-ns w-50 ">
                                <input class="fl w-100 f4 input-reset bn black bg-white-70 pa3 lh-solid" type="text" placeholder="First name"  v-model="contact.firstname" />
                            </div>

                            <div class="fl w-40-ns w-50 pl3">
                                <input class="fl w-100 f4 input-reset bn black bg-white-70 pa3 lh-solid" type="text" placeholder="Last name"  v-model="contact.lastname" />
                            </div>
                        </div>
                        <div class="w-100 fl mt3">
                            <div class="fl w-70-ns w-100">
                                <input class="fl w-100 f4 input-reset bn black bg-white-70 pa3 lh-solid" type="email" placeholder="Enter Your Email Address"  v-model="contact.email" />
                            </div>
                        </div>
                        <div class="fl w-100 pa2 mt3">
                            <span @click="submitContact" class="f6 button-reset fw6 fl pa3 tc bn bg-moon-gray ttu tracked br3 hover-bg-dark-green white pointer">SIGN UP</span>
                        </div>
                        <p class="mt7">
                            © {{date}} FiT Socks &nbsp;
                        </p>
                    </div>
                </div>           
            </div>

            
            <div class="pa3 tc w-100 center">
                <div class="fl tc pa3 bg-dark-gray washed-yellow w-100 f4 b tracked">
                    Copyright © {{date}} FiT Socks &nbsp;  <span class="dn dib-l white">|</span>
                    <div class="w-100 cf dn-l pv1"></div> 
                    <router-link to="terms" class="white link ph1">Terms and Conditions</router-link> -
                    <router-link to="privacy" class="white link ph1">Privacy Policy</router-link> 
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