<template>
	<section class="">
        <appnavbar></appnavbar>  
        <div class="wrapper contact-page">
            <div class="page-header page-header-small">
                <div class="page-header-image" :style="{backgroundImage:'url('+require('@/assets/img/nicebg.jpg')+')'}"></div>
            </div>
            <div class="main">
                <div class="contact-content">
                    <div class="container">
                        <div class="row bg-default py-4">
                            <div class="col-md-5 ml-auto mr-auto">
                                <h2 class="title text-warning">Send us a message</h2>
                                <p class="text-white">No doubt that Cooperatives are powerful avenues for investments and we intend
                                     to utilize this to generate ample income for the Cooperative, from where members will receive dividend.
                                <br><br></p>
                                <form role="form" id="contact-form" method="post">
                                    <label class="text-white">Your name</label>
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <i class="input-group-text now-ui-icons users_circle-08"></i>
                                        </div>
                                        <input aria-describedby="addon-right addon-left" placeholder="Your Name..." class="form-control">
                                    </div>
                                    <label class="text-white">Email address</label>
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <i class="input-group-text now-ui-icons users_circle-08"></i>
                                        </div>
                                        <input aria-describedby="addon-right addon-left" placeholder="Email Here..." class="form-control">
                                    </div>
                                    <label class="text-white">Phone</label>
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <i class="input-group-text now-ui-icons tech_mobile"></i>
                                        </div>
                                        <input aria-describedby="addon-right addon-left" placeholder="Number Here..." class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-white">Your message</label>
                                        <textarea name="message" id="message" rows="6" class="form-control"></textarea>
                                    </div>
                                    <div class="submit text-center">
                                        <button type="button" class="btn btn-round bg-success">Contact Us</button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-5 ml-auto mr-auto">
                                <div class="info mt-5 info-horizontal">
                                    <div class="icon icon-primary">
                                        <i class="now-ui-icons location_pin"></i>
                                    </div>
                                    <div class="description">
                                        <h4 class="info-title text-warning">Find us at the office</h4>
                                        <p class="text-white"> Block A, Suite 25, 2nd Floor,
                                            <br> Alausa Shopping Mall,
                                            <br> 131 Awolowo Way Ikeja 
                                            <br> Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>
                                <div class="info info-horizontal">
                                    <div class="icon icon-primary">
                                        <i class="now-ui-icons tech_mobile"></i>
                                    </div>
                                    <div class="description">
                                        <h4 class="info-title text-warning">Give us a ring</h4>
                                        <p class="text-white"> Digtal Tribe Multipurpose Cooperative
                                            <br> +234 817 000 0257 
                                            <br> Mon - Fri, 8:00AM-5:00PM
                                        </p>
                                    </div>
                                </div>
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