<template>
	<section class="">
        <siteheader/>
        <div>
            <div class=" w-100 bg-white fl cover">
                <div class="dt w-100 w-70-l center">
                    <div class="dtc v-mid ph2 pv4">
                        <div class="f4 black tc pa4">
                            <p class="f1 glow tracked-light mt0">Products & Services</p> 
                            <router-link to="membership" class="f7 link ph4 pv3 mb2 dib white tracked ttu b br2 bg-green" >Become a member</router-link>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf w-100  tc">
            <div class="bg-near-white">
                <article class="dib mw8 tc pa2 pa3-ns">
                    <p class="f2-l f4 b tc w-100">Sweet Loan Schemes</p>
                    <p class="f4 fl lh-copy">
                        As a co-operative we recognize the importance of providing affordable loans to our members for everyday uses. 
                        Digital Tribe Multipurpose Cooperative (DTCOOP) therefore provides a very extensive loan portfolio. 
                        This will better enable our members to get the financial assistance they need. 
                        In order to access loans at DTCOOP, you must be a member of Our co-operative. Each applicant must provide the loan officer with the documents outlined below.                    
                    </p>

                    <div class="cf w-100 center pa2 tc">
                        <div class="mw8 center">
                            <div class="w-100 w-50-ns fl pl5-l pr4-l pa2">
                                <div class="br3 bg-white shadow-1 ba b--near-white w-100 pa3 dib tl">
                                    <p><span class="b"> Employed Person</span> must submit:</p>
                                    <p class="tj">
                                        <ol class="lh-copy measure center f5 black-70">
                                            <li class="">Job letter</li>
                                            <li class="">Pay slip (two most recent)</li>
                                            <li class="">Proof of address ( not more than 6 months old)</li>
                                            <li class="">Two valid Photo IDs (Passport + one other)</li>
                                            <li class="">Guarantor ( if required should also provide document 1 to 4)</li>
                                            <li class="">Cash deposit (varies, dependent on the amount being borrowed)</li>
                                        </ol>                                    
                                    </p>
                                </div>
                            </div>
                            <div class="w-100 w-50-ns fl pl5-l pr4-l pa2">
                                <div class="br3 bg-white shadow-1 ba b--near-white w-100 pa3 dib tl">
                                    <p><span class="b">Self Employed Person</span> must submit:</p>
                                    <p class="tj">
                                        <ol class="lh-copy measure center f5 black-70">
                                            <li class="">Verification of Income</li>
                                            <li class="">Business License</li>
                                            <li class="">Proof of address ( not more than 6 months old)</li>
                                            <li class="">Two valid Photo IDs (Passport + one other)</li>
                                            <li class="">Guarantor ( if required should also provide document 1 to 4)</li>
                                            <li class="">Cash deposit (varies, dependent on the amount being borrowed)</li>
                                        </ol>                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div class="dib w-100 pa4">
                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/mortloan.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class="f4 tc">Mortgage Loans</h1>
                                <p class="tl f5 i">Additional Documentation Required:</p>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Copy of Sale Agreement</li>
                                    <li class="">Valuation of property</li>
                                    <li class="">Copy of Land Register</li>
                                    <li class="">Life Insurance</li>
                                    <li class="">Property Insurance</li>
                                    <li class="">Insurance for house under construction</li>
                                    <li class="">Non-Nationals required alien land holders license</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/loan.svg" class="h3 w4 dib br3" title=""></div>
                                <div class="bg-white pa2">
                            <h1 class="f4 tc">Land Loans</h1>

                                <p class="tl f5 i">Additional Documentation Required:</p>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Minimum 10% Cash Deposit</li>
                                    <li class="">Valuation of land</li>
                                    <li class="">Letter from land vendor</li>
                                    <li class="">Copy of Land Register</li>
                                    <li class="">Non-Nationals require alien land holders licenses</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                
                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/carloan.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class="f4 tc">Vechicle Purchase</h1>
                                <p class="tl f5 i">Additional Documentation Required:</p>
                                <ul class="lh-copy measure center f5 black-70">                                
                                    <li class="">0% to 5% Cash Deposit</li>
                                    <li class="">Purchase agreement</li>
                                    <li class="">Insurance assignment/Letter</li>
                                </ul>
                            </div>
                        </article>
                    </div>     

                    <div class="db fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/eduloan.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class="f4 tc">Education Loans</h1>
                                <p class="tl f5 i">Additional Documentation Required:</p>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Letter of acceptance from an accredited college, Cost associated with studying </li>
                                    <li class="">15% to 25% Cash Deposit</li>
                                    <li class="">Valuation of property, Copy of land registry ( if being used)</li>
                                    <li class="">Life Insurance, Property Insurance (if applicable)</li>                              
                                </ul>
                            </div>                        
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-near-white">
            <div class="cf w-100 tc pa4">
                <article class="dib mw8 tc pa2 pa1-ns">
                    <p class="f2-l f4 b tc  w-100">Sweet Savings Scheme</p>
                    <p class="f4 fl lh-copy">
                        Digital Tribe Multipurpose Cooperative is primarily a savings institution. 
                        We have therefore provided a number of saving products designed to help you save more efficiently at the credit union. 
                        Below is the list of these products.                    
                    </p>
                </article>
                <div class="dt w-100 pa4">
                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/permloan.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class="f4 tc">Permanent Shares</h1>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Permanent shares are your long-term investments in the credit union.</li>
                                    <li class="">You must own permanent shares in order to access the credit unions products and services.</li>
                                    <li class="">You can earn dividends (interest) on your permanent shares each year once the credit union makes a surplus</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/fxddepo.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class=" tc f4">Fixed Deposit Accounts</h1>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Fixed deposit accounts begin at $5000</li>
                                    <li class="">Our fixed deposit term is 12 months</li>
                                    <li class="">Earn up to 2.5% interest on your fixed deposit account</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc  pa2">
                                <img src="@/assets/img/minoracct.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class="f4 tc">Minor Accounts</h1>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Parents/ Guardians can open accounts for children 0 months to 17 years old</li>
                                    <li class="">Receive 1% interest annually</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    
                    <div class="fl pa2 tc w-100 w-50-m w-25-l">
                        <article class="shadow-1 ba b--black-60 br3 w-100 pa1 dib tl center bg-near-white">
                            <div class="bg-white tc pa2">
                                <img src="@/assets/img/regularsavings.svg" class="h3 w3 dib br3" title=""></div>
                                <div class="bg-white pa2">
                                <h1 class=" tc f4">Regular Savings Accounts</h1>
                                <ul class="lh-copy measure center f5 black-70">
                                    <li class="">Available to  members.</li>
                                    <li class="">Receive 2% interest annually</li>
                                </ul>
                            </div>
                        </article>
                    </div>            
                </div>
            </div>                
        </div>
        <sitefooter/>    
    </section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from "@/components/generic/siteheader"
import sitefooter from "@/components/sitefooter"


export default {
	components: {notify,siteheader,sitefooter},
	data(){ return {notifications:[]}},
	methods: {
      popup(){
          console.log("POPUP")
      },
    }
}
</script>
