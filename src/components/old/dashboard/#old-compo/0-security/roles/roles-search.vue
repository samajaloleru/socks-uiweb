<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Roles / Search
        </div>

        <router-link :to="{'name':'roles-new'}" class="fl right-1 absolute ph2 pv1 br4 bg-red hover-bg-dark-red grow-ns pointer f6 white tc no-underline">
          + New
        </router-link>
      </div>

      <div class="cf pv3"></div>
      <div class="cf w-100">
        <div class="black fl w-50 dib tl pt2 h2 f7">
          <span class="bg-black white pa1 br1 fl">page: 
            <input type="number" class="w2 bn tc br2 bg-white" @click="searchRecords" min="1" v-model.number="search.page">
          </span>
        </div>
        <div class="black fr w-50 dib tr pt2 h2 f7">
          <span class="bg-black white pa1 br1 fr">
            <input type="number" class="w3 black bn tc br2 bg-white " v-model.number="search.limit">
            records
          </span>
        </div>
      </div>

      <table-display class="overflow-auto" style="max-height:75vh">
        <template slot="tableHead">
          <tr class="tl bg-black white">
            <td class=""></td>
            <td class="pa2">Title</td>
            <td class="pa2">Status</td>
            <td class="pa2">Description</td>
          </tr>
          <tr class="tl bg-white black f7">
            <td class="tc pt1">
              <span @click="searchRecords" class="oi bg-green white b pa1 br2" data-glyph="magnifying-glass"></span>
            </td>
            <td class="">
              <input type="text" v-model="search.title" placeholder="Filter" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.worfklow" placeholder="Filter" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.description" placeholder="Filter" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
          </tr>
        </template>
        <template slot="tableBody" v-if="recordList.length > 0">
            <tr class="stripe-dark" v-for="(role, index) in recordList" :key="index">
              <td class="">
                <router-link data-glyph="eye" class="f7 oi br-pill bg-green hover-bg-dark-green ph1 pt1 near-white" :to="{name:'profiles-view',params:{id:role.ID}}" >
                </router-link>
              </td>
              <td class=" pa2">
                <span class="f7">#{{(index+1)+(search.skip*search.limit)}}.</span> {{role.Title}}
              </td>
              <td class=" pa2 f7">{{role.Description}}</td>
              <td class=" pa2 f7">{{role.Description}}</td>
            </tr>
        </template>
      </table-display>

      

      <div v-if="recordList.length < 1">
        <p class="black f6 tc ma3">There are currently no roles record within the system</p>
      </div>
      
    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import tableDisplay from "@/components/dashboard/tableDisplay"
  export default {
    data() {return{
      url: "/api/roles", recordList: [],
      search: {text: "", field: "Title", limit: 20, page:1, skip: 0, filter:{}},
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