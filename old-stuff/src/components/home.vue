<template>
	<section class="">
        <appnavbar></appnavbar>  
        <div class="page-header page-header-small">
            <div class="page-header-image" :style="{backgroundImage:'url('+require('@/assets/img/nicebg.jpg')+')'}"></div>
        </div>

        <div class="features-3 ">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mr-auto ml-auto">
                        <h2 class="text-black font-weight-bold">Who We Are</h2>
                        <h5 class="text-black ">Dtcoop.ng is a blockchain based platform that seeks to leverage the cooperative model towards creating a transparent, 
                            open and scalable community of entrepreneurs, freelancers, start-ups, small business owners 
                            seeking to leverage the cooperative model for personal and corporate sustainability.</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="info ">
                            <div class="icon icon-info icon-circle">
                                <i class="now-ui-icons objects_globe"></i>
                            </div>
                            <h3 class="text-warning font-weight-bold">Vision</h3>
                            <p class="text-danger font-weight-bold">To build a unique Cooperative Society that helps Freelancers, 
                                Startups/SMES and other individuals to attain financial independence.</p>
                        </div>
                    </div>
                    <div class="col-md-4 bg-primary">
                        <div class="info">
                            <div class="icon icon-success icon-circle">
                                <i class="now-ui-icons education_atom"></i>
                            </div>
                            <h3 class="text-success font-weight-bold">Mission</h3>
                            <p class="text-white font-weight-bold">To enable members achieve financial freedom, utilising the opportunities of saving, 
                                access to loans and investment, through committed leadership with integrity and accountability, 
                                while leveraging processes on technology and remaining socially responsible.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-info icon-circle">
                                <i class="now-ui-icons tech_watch-time"></i>
                            </div>
                            <h3 class="text-warning font-weight-bold">Core Values</h3>
                            <p class="text-danger font-weight-bold">Our core values are integrity, accountability, transparency, equality, democracy and oneness.</p>
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