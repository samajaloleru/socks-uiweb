<template>
    
    <li class="bb b--white pointer" @click="toggleDropdown" >
        <p class="ph2 mr3 h3 inline-flex items-center mv0 black dim ">
            <span class="oi mr1" :data-glyph="icon" ></span>
            {{title}}
        </p>
        <ul class="list pv0 ph0 button dn" :class="{'db':lShow}" > 
            <menulistitem :to="sub.to" :icon="sub.icon" :title="sub.title" v-for="(sub, index) in submenu" :key="index" />
        </ul>
    </li>
  
</template>
<script type="text/javascript">
    import menulistitemComponent from "@/components/dashboard/menulistitem"
    export default {
        data() {return{
            lShow:false,
            icon:"chevron-right",
        }},
        methods: {
            toggleDropdown() {
                this.lShow = !this.lShow
                this.icon = (this.lShow) ? "chevron-bottom": "chevron-right"
            },
            toggleMenu() {
                this.$parent.toggleMenu();
            }
        },
        props: ['title', 'submenu' ],
        components: {
           "menulistitem": menulistitemComponent,
        },
    }
</script>