<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Messages / New
        </div>
        <router-link :to="{name:'messages-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
          Go Back
        </router-link>
      </div>

      <notify class="mv2" :notifications="notifications"></notify>


      <div class="f6 w-100 bg-light-gray gray bb bt  b--white-40 br4 br--top cf inline-flex items-center relative">
        <span class="w-20 tc pointer dim pa3 br4 br--left br--top " :class="tabProps.personalClass" @click="toggleTab('personal')">
          <span class="oi" data-glyph="personal"></span>
          <label class="dn dib-ns">Personal Info</label>
        </span>
        <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.documentsClass" @click="toggleTab('documents')">
          <span class="oi" data-glyph="document"></span>
          <label class="dn dib-ns">Documents</label>
        </span>
        <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.ordersClass" @click="toggleTab('orders')">
          <span class="oi" data-glyph="document"></span>
          <label class="dn dib-ns">Work Orders</label>
        </span>
        <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.invoicesClass" @click="toggleTab('invoices')">
          <span class="oi" data-glyph="document"></span>
          <label class="dn dib-ns">Invoices</label>
        </span>
        <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.settingsClass" @click="toggleTab('settings')">
          <span class="oi" data-glyph="cog"></span>
          <label class="dn dib-ns">Settings</label>
        </span>
      </div>
      
      <div class="bg-light-gray ph2 pb2 br4 br--bottom cf black">
        
        <div class="ph2" v-if="tabProps.personalShow">
            <p class="w-100 cf  gray tracked"> PERSONAL Information</p>
            
              <div class="fl w-30-l pa1">
                <input type="file" class="dn" @change="uploadImageDisplay('Image')" ref="messageImage"/>
                <img :src="record.Image" @error="record.Image = messageIcon" class="w5 br-100 bg-near-white pa1" @click="uploadImage('messageImage')" />
              </div>

              <div class="fl w-70-l">
                <div class="fl pa1 w-100">
                  <label class="db fw4 lh-copy f7 black">Select Status </label>
                  <select class="pa1 ba b--silver br2 bg-white  " v-model="record.Workflow">
                    <option></option>
                    <option>active</option>
                    <option>inactive</option>
                  </select>
                </div>


                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black"> Title:</label>
                  <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Title">
                </div>

                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">Surname:</label>
                  <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Lastname">
                </div>
            
                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">First Name:</label>
                  <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Firstname">
                </div>

                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">Middle Name:</label>
                  <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Othername">
                </div>

                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">Date of Birth:</label>
                  <input class="pl1 pv1 ba b--silver br2 bg-white w-100 f7 " type="date" v-model="record.Dob">
                </div>

                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">Gender:</label>
                  <select class="pa2 ba b--silver br2 bg-white w-100 " v-model="record.Gender">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div class="fl mv2 w-100 w-25-l pa1">
                  <label class="db fw4 lh-copy f6 black">Marital Status:</label>
                  <select class="pa2 ba b--silver br2 bg-white w-100 " v-model="record.MaritalStatus">
                    <option value="">Select Marital Status</option>
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                  </select>
                </div>

                <div class="fl w-100 bt b--near-white"></div>
                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Mobile</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Mobile">
                  </div>

                  <div class="fl mv2 w-100 w-75-l pa1">
                    <label class="db fw4 lh-copy f6 black">Email Address</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Email">
                  </div>

                  <div class="fl mv2 w-40 pa1">
                    <label class="db fw4 lh-copy f6 black">Street</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Street">
                  </div>

                  <div class="fl mv2 w-20 pa1">
                    <label class="db fw4 lh-copy f6 black">City</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.City">
                  </div>

                  <div class="fl mv2 w-20 pa1">
                    <label class="db fw4 lh-copy f6 black">State</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.State">
                  </div>
                  
                  <div class="fl mv2 w-20 pa1">
                    <label class="db fw4 lh-copy f6 black">Country</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Country">
                  </div>
                </div>
            

        </div>

        <div class="pa2" v-if="tabProps.documentsShow">
            <p class="w-100 cf  gray tracked"> Documents</p>
        </div>

        <div class="pa2" v-if="tabProps.settingsShow">
            <p class="w-100 cf  gray tracked"> Settings</p>
        </div>

        <div class="pa2" v-if="tabProps.ordersShow">
            <p class="w-100 cf  gray tracked"> Work Orders</p>
        </div>

        <div class="pa2" v-if="tabProps.invoicesShow">
            <p class="w-100 cf  gray tracked"> Invoices</p>
        </div>

        
        <div class="fl w-100 pa1">
          <div v-if="isSave" class="fr ph3 pv2 br4 bg-green pointer f6 white tc no-underline"  @click="save" >
            Submit
          </div>
        </div>
      </div>

    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import {checkRedirect} from "@/common"
  import {displayImage} from "@/common"
  import notify from "@/components/notify"

  import messageIcon from "@/assets/img/user.png"

  export default {
    created(){this.toggleTab("")},
    data() {return{
      url: "/api/messages",
      record: {Image:""},
      notifications:[],
      isSave:true,
      messageIcon,
      tabProps:{},
    }},
    components: { notify },
    methods: {
      uploadImageDisplay(field) {
        displayImage(event, this, field)
      },
      uploadImage(imageRef) {
        this.$refs[imageRef].click()
      },
      save () {
        const app = this;
        app.isSave = false;
        HTTP.post(app.url, app.record, {withCredentials: true})
        .then((response) => {
          this.notifications.push(response.data)
          setTimeout(checkRedirect(response.data),1500)

          app.isSave = true;
          if(response.data.Body !== null){
            app.record = {Image:""}
          }
        }).catch((e) => {
          console.log(e)
        })
      },
      toggleTab(tabname) {
        switch(tabname) {
          default:
            this.tabProps = {personalClass:"bg-gray white",personalShow:true}
            break;
          case "documents":
            this.tabProps = {documentsClass:"bg-gray white",documentsShow:true}
            break;
          case "settings":
            this.tabProps = {settingsClass:"bg-gray white",settingsShow:true}
            break;
          case "orders":
            this.tabProps = {ordersClass:"bg-gray white",ordersShow:true}
            break;
          case "invoices":
            this.tabProps = {invoicesClass:"bg-gray white",invoicesShow:true}
            break;
        }
      }
    }
  }
</script>
