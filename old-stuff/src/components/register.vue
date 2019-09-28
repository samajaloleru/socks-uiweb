<template>
	<section class="">
		<appnavbar></appnavbar>
  		<div class="page-header header-filter" filter-color="black">
			<div class="page-header-image" :style="{backgroundImage:'url('+require('@/assets/img/nicebg.jpg')+')'}"></div>
			<div class="content">
				<div class="container">					
					<div class="row">
						<div class="col-md-4 ml-auto mr-auto">
							<div class="info info-horizontal">
								<div class="icon icon-primary">
									<i class="now-ui-icons media-2_sound-wave"></i>
								</div>
								<div class="description">
									<h5 class="info-title">Save Consistently</h5>
									<p class="description">
									We Provide a platform for Freelancers/Start-ups to save towards a project or for the rainy day
									</p>
								</div>
							</div>
							<div class="info info-horizontal">
								<div class="icon icon-primary">
									<i class="now-ui-icons media-1_button-pause"></i>
								</div>
								<div class="description">
									<h5 class="info-title">Borrow With Ease</h5>
									<p class="description">
									With the Ability to request a loan to meet critical needs that every entrepreneur encouters
									</p>
								</div>
							</div>
							<div class="info info-horizontal">
								<div class="icon icon-info">
									<i class="now-ui-icons users_single-02"></i>
								</div>
								<div class="description">
									<h5 class="info-title">Invest Together as a Cooperative</h5>
									<p class="description">
									Also we developed a hybrid of `internal` crowd funding system that will allow members join forces to fund start-ups.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4 mr-auto">
							<div class="container h-100">
								<div class="row align-items-center h-100">
									<div class="col-12 mx-auto">										
										<div class="card card-signup">
											<div class="card-body">
												<h4 class="card-title text-center">Become a Member</h4>
												<notify :notifications="notifications"></notify>
												<form class="form" method="" action="">
												<div class="input-group">
													<div class="input-group-prepend">
													<span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
													</div>
													<input type="text" class="form-control" placeholder="Title" v-model="formSignup.Title">
												</div>
												<div class="input-group">
													<div class="input-group-prepend">
													<span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
													</div>
													<input type="text" class="form-control" placeholder="First Name" v-model="formSignup.Firstname">
												</div>
												<div class="input-group">
													<div class="input-group-prepend">
													<span class="input-group-text"><i class="now-ui-icons text_caps-small"></i></span>
													</div>
													<input type="text" class="form-control" placeholder="Last Name" v-model="formSignup.Lastname">
												</div>
												<div class="input-group">
													<div class="input-group-prepend">
													<span class="input-group-text"><i class="now-ui-icons ui-1_email-85"></i></span>
													</div>
													<input type="text" class="form-control" placeholder="Your Email" v-model="formSignup.Email">
												</div>
												<div class="input-group">
													<div class="input-group-prepend">
													<span class="input-group-text"><i class="now-ui-icons ui-1_email-85"></i></span>
													</div>
													<input type="text" class="form-control" placeholder="Your Mobile" v-model="formSignup.Mobile">
												</div>

												<div class="card-footer text-center">
													<span @click="signup" class="btn btn-primary btn-round btn-lg">Join the Tribe</span>
												</div>
												</form>
											</div>
										</div>										
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