<template>
    <div v-show="visible">
        <div class="fl  ">
            Index: {{ index }}
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
            }
        },
        computed: {
            visible() {
                return this.index === this.$parent.index
            }
        },
        
    }
</script>