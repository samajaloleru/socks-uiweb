<template>
	<section class="">
        <appnavbar></appnavbar>  
        <div>
          <div class="page-header page-header-small">
            <div class="page-header-image" :style="{backgroundImage:'url('+require('@/assets/img/nicebg.jpg')+')'}"></div>
          </div>
          <div class="section">
            <div class="container">
              <div class="col-xs-10 col-md-8 ml-auto mr-auto">
                <p>Membership of the <span class="alert-link text-warning"> Digital Tribe Cooperative Multipurpose Society</span> is open to Freelancers, 
                    Startups, SME’s and individuals that have attained the age of 18 years and above. 
                    To enable you to enjoy the benefits offered by Digital Tribe Cooperative Multi-purpose Society, 
                    <br>                      
                </p>
                <p>Benefits you can access as a member of Digital Tribe Cooperative Multi-purpose Society are as follows: 
                  <ul>
                    <li>Monthly saving options – 5,000 | 10,000 | 20000 | 50000 | 100000</li>
                    <li>Entrance Fees to covers:
                      <ol>
                        <li>Membership form</li>
                        <li>ATM ID Card</li>
                        <li>Referral programme</li>
                        <li>Personalised online back office</li>
                      </ol>
                    </li>
                    <li>You can save to the cooperative</li>
                    <li>You have the right to attend meetings</li>
                    <li> You have a right to vote and be voted for</li>
                    <li>Access twice your savings as loans, provided you have consistently saved for, at least, 6 months and paid up your share capital</li>
                    <li>Share in dividends from profits on investment the cooperative society engages in</li>
                    <li>You have the opportunity of accessing additional value, when you shop, using your ATM Membership card.</li>
                  </ul>
                </p>
                
                <br> 
                <p>
                  To become a member of the Digital Tribe Cooperative Multi-purpose Society, you need to register online <a class="alert-link" href="/register">here</a>.
                  <br>
                  <br>
                  You, however, need to be aware of the financial obligations tied to being a member of the society
                  <br>
                  <br>
                  You need to  to be a member first.
                  <br>
                  <a class="alert-link">Entrance Fee:</a>
                  You need to pay a one-time, non-refundable Entrance fee of N10,000 after which your registration is completed.  This covers the following:
                  <ul>
                    <li>Membership Registration</li>
                    <li>ATM ID Card</li>
                    <li>Referral Program</li>
                    <li>Cooperative Bye Laws</li>
                    <li>Personalised Back Office</li>
                    <li>Discount offers and opportunities you can use, to carry out shopping or loading funds in to save or withdraw loan disbursed into</li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="container-fluid bg-default py-5">
              <div class="container">
                <div class="row">
                  <div class="col-xs-7 col-md-5 ml-auto mr-auto text-center">
                    <h3 class="text-warning">Ordinary Share Capital: N100,000 Minimum</h3>
                    <p class="text-white">The Share Capital payment is also a one-time payment that must be paid within 6 months. 
                      It enables you to become a financial member. This is different from your monthly savings. 
                      Being a financial member allows you to enjoy access to loans from the Cooperative.</p>
                  </div>
                  <div class="col-xs-7 col-md-5 ml-auto mr-auto text-center ">
                    <h3 class="text-warning">Investment Share Capital:</h3>
                    <p class="text-white">This is a fund you can key into by contribution funds, which is separate from the usual monthly or target savings, 
                        which is invested in assets, with a view to acquire such assets.
                    </p>
                  </div>
                  <div class="col-xs-7 col-md-8 ml-auto mr-auto text-center ">
                    <h3 class="text-success">Target Savings:</h3>
                    <p class="text-white">This is an opportunity for you to save towards a certain target over a specified period, after which you withdraw such fund.</p>
                    <div class="section-space"></div>
                  </div>
                  <div class="col-xs-7 col-md-5 ml-auto mr-auto text-center ">
                    <h3 class="text-warning">Monthly Savings:</h3>
                    <p class="text-white">
                      As a member of Digital Tribe Cooperative Society,
                      you are obligated to choose a Monthly Savings Plan and continue to save on Monthly basis. 
                      <br>
                      The Monthly Savings Plans available are as follows:
                      <ul class="text-left">
                        <li>N5,000 Monthly Savings</li>
                        <li>N10,000 Monthly Savings</li>
                        <li>N20,000 Monthly Savings</li>
                        <li>N50,000 Monthly Savings</li>
                        <li>N100,000 Monthly Savings</li>
                      </ul>
                    </p>
                  </div>
                  <div class="col-xs-7 col-md-5 ml-auto mr-auto text-center ">
                    <h3 class="text-warning">Loans:</h3>
                    <br>  
                      <p class="text-white">
                        As a member of <span class="alert-link"> Digital Tribe Cooperative Multipurpose Society</span>, you are entitled to a loan of twice your savings at the point of request, 
                        provided you have consistently saved for a minimum of 6 months, since joining and also paid up your Share Capital 
                        <br>
                        Interest On Loan And Repayment Period:
                        <ul>
                          <li>Interest on loan obtained from the Cooperative attracts 10% interest rate per annum.</li>
                          <li>Every loan granted must also be repaid in full within 12 months.</li>
                        </ul>
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <appfooter></appfooter>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import appnavbar from "@/components/app-navbar";
import appfooter from "@/components/app-footer";

export default {
	components: {notify, appnavbar, appfooter},
	data(){ return { formSignup:{Username:"x",Password:"x",Email:""}, notifications:[]}},
	methods: {
      signup() {
		const app = this;
		if (app.formSignup.Email !== "") {
			app.formSignup.Username = app.formSignup.Email;
			app.formSignup.Password = app.formSignup.Email;
		}
        HTTP.post('/api/signup', app.formSignup ,{withCredentials: true}).then(response => {
          console.log(response)
          app.notifications.push(response.data)
		  setTimeout(checkRedirect(response.data),1500)
          if (response.data.Code == 200) {
			  app.formSignup.Username = "x";
			  app.formSignup.Password = "x";
			  app.formSignup.Email = "";
		  }
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
}
</script>