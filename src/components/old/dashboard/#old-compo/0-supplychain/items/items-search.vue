<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Items / Search
        </div>

        <router-link :to="{'name':'services-new'}" class="fl right-1 absolute ph2 pv1 br4 bg-red hover-bg-dark-red grow-ns pointer f6 white tc no-underline">
          + New
        </router-link>
      </div>

      <div class="cf pv3"></div>

      <div class="bg-black br2-l pa2 cf tc w-100">
        <div class="cf fl-ns w-100 w-50-ns dib items-center inline-flex bg-green hover-bg-dark-green br4 tc">
          <input type="text" id="searchText" v-model="search.text" placeholder="Search By: service name" class="bn f6 fl tracked bg-white black pa2 w-90 br4" style="min-width: 160px;">
          <span @click="searchRecords" class="oi mh2" data-glyph="magnifying-glass"></span>
        </div>

        <div class="cf fr-ns w-100 w-50-ns dib tr-ns tc pt2 h2">
          <span class=" f6">Page
            <input type="number" class="w2 bn tc br2 bg-white" @click="searchRecords" min="1" v-model.number="search.page">
          </span>
          <span class=" f6 pl1">
              <input type="number" class="w2 bn tc br2 bg-white" v-model.number="search.limit">
            Records
          </span>
        </div>
      </div>

      <table-display>
        <template slot="tableHead">
          <tr class="tl bg-black white">
            <td class="pa2">view</td>
            <td class="pa2 w-table-l">Service Name</td>
            <td class="pa2 w-table">Status</td>
            <td class="pa2 w-table">Code</td>
            <td class="pa2 w-table">Updated</td>
          </tr>
        </template>
        <template slot="tableBody" v-if="recordList.length > 0">
          <tr class="stripe-dark" v-for="(service, index) in recordList" :key="index">
            <td class=" pa2 tc">
              <router-link data-glyph="eye" class="oi br-pill bg-green hover-bg-dark-green ph1 pt1 near-white" :to="{name:'services-view',params:{id:service.ID}}" ></router-link>
            </td>
            <td class=" pa2"> 
              <small>#{{index+1}}.</small> {{service.Title}}
            </td>
            <td class=" pa2">{{service.Workflow}}</td>
            <td class=" pa2">{{service.Code}}</td>
            <td class=" pa2">{{service.Updatedate}}</td>
          </tr>
        </template>
      </table-display>

      <div v-if="recordList.length < 1">
        <p class="black f6 tc ma5">There are currently no services within the system</p>
      </div>
      
    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import tableDisplay from "@/components/dashboard/tableDisplay"

  export default {
    data() {return{
      url: "/api/services", recordList: [],
      search: {text: "", field: "Title", limit: 20, skip: 0},
    }},
    components: { tableDisplay },
    created() {this.searchRecords()},
    methods: {
      searchRecords() {
        const app = this 
        app.isSearch = true
        HTTP.post(app.url+'/search', app.search,{withCredentials: true}).then((response) => {
          if (response.data.Body !== null ) {
            app.recordList = response.data.Body
          }
        }).catch((e) => { console.log(e) })
      },
    }
  }
</script>