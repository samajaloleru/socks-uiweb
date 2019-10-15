<template>
    <div class="cf w-100 cover">
        <div class="dt vh-50 w-70 center">
            <div class="dtc v-mid">
                <div class="mw6 sbsolute" style="padding-bottom: -300px">
                    <a @click.prevent="prev" class="f5 no-underline black fl ba pa3">
                        <i class="fas fa-chevron-left"></i>
                        <span class="pl1">Previous</span>
                    </a>
                    <a @click.prevent="next" class="f5 no-underline black fr ba pa3">
                        <span class="pr1">Next</span>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: []
    };
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },

  computed: {
    slidescount() {
      return this.slides.length;
    }
  },
  methods: {
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slidescount - i;
      }
    },

    next() {
      this.index++;
      if (this.index >= this.slidescount) {
        this.index = 0;
      }
    }
  }
};
</script>