<template>
  <section class="fl w-100 bg-dark-red">
    <siteheader/>
    <section class="center bg-washed-yellow min-vh-100 pb5 fl w-100">
      <section class=" mw9 tc pa2 dark-gray flex flex-row justify-center">
        <article class="pa4 pa2-m">
          <h1 class="f2-m pt0 b-ns ">Where We Meet -- Our Social Area & Play Space</h1>
        </article>
      </section>
      <div class="mw8 vh-75 tc center pt1 dt w-100">
        <gallery :images="imagelist" delay="2" class=""></gallery>
      </div>
    </section>

    <div class="dt w-100 ph3 ph5-ns center tc pv5">
        <h2 class="f2 orange mt0 mb3">OUR SOCKS</h2>
        <article class="pa2">
            <p class="f4 mid-gray lh-copy measure center">
                We don't want to spoil all of the fun, but our Instagram feed is a great place
                to get a feel for the styles you can expect from Sock Fancy.
            </p>
        </article>
    </div>

    <main class="cf w-100 pb5">
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0006.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0002.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0003.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0004.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0007.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0008.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0009.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0010.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0011.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0012.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0013.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0014.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0015.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0016.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0017.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0018.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0019.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0020.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0021.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
      <div class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--7x5">
          <div style="background-image:url(http://mrmrs.github.io/images/0022.jpg);"
            class="bg-center cover aspect-ratio--object"></div>
        </div>
      </div>
    </main>
    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import gallery from "@/components/generic/gallery"
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter,
    gallery
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember:false,
      imagelist:[
        "assets/background1.png",
        "assets/background2.png",
        "assets/background3.png",
        "assets/background4.png",
        "assets/background5.png",
        "assets/background6.png",
      ],
    };
  },
  methods: {
    goToPage() {
      if (this.IsCompany) {
        this.$router.push({ name: "companies" });
      } else {
        this.$router.push({ name: "vendors" });
      }
    },
    keyUp(event) {
      if (event.code == "Enter") {
        this.login();
      }
    },
    login() {
      HTTP.post(
        "/api/login",
        {
          username: this.username,
          password: this.password
        },
        {
          withCredentials: true
        }
      )
        .then(response => {
          this.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 2000);
        })
        .catch(e => {
          console.log(e);
          this.error = e;
          // this.errors.push(e)
        });
    }
  }
};
</script>