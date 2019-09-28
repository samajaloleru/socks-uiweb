<template>
  <section>
    <siteheader/>

    <div class="cf">
      <div class="cf tc w-100 pa3">
        <article class="dib mw8 tc">
          <h1 class="f1 glow tracked-light mt0">Frequently Asked Questions</h1>
          <p class="center measure">
            Have questions about our service?
            <br>Click below to view responses to the most common questions.
          </p>
        </article>
      </div>

      <div class="cf w-100 center bg-near-white pv4">
        <h1 class="f2-l tc mt1 f4">About Us</h1>
        <div class="v-mid mw8-l center">
          <faqpost v-for="(post, index) in aboutList" :key="index" :index="index" :post="post"></faqpost>
        </div>
      </div>
      <div class="cf w-100 center pt2 bg-near-white pb4">
        <h1 class="f2-l tc mt1 f4">Loans</h1>
        <div class="v-mid mw8-l center">
          <faqpost v-for="(post, index) in loanList" :key="index" :index="index" :post="post"></faqpost>
        </div>
      </div>
      <div class="cf w-100 center pt2 bg-near-white pb4">
        <h1 class="f2-l tc mt1 f4">Savings & Investments</h1>
        <div class="v-mid mw8-l center">
          <faqpost v-for="(post, index) in savingList" :key="index" :index="index" :post="post"></faqpost>
        </div>
      </div>
    </div>

    <sitefooter/>
  </section>
</template>

<script>
import { HTTP } from "@/common";
import notify from "@/components/notify";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";
import faqpost from "@/components/faq-post";

const aboutList = [
  {
    Title: "How does Dtcoop work?",
    Description:
      "Dtcoop makes it easy to access amazing financial services, at the click of a button. You can get instant loans, make all your financial transactions, and invest money with high interest returns. Dtcoop is your trusted digital friend, always ready to help you out. Visit our website to learn more"
  },
  {
    Title: "I don’t know my BVN. What do I do?",
    Description:
      " Just dial *565*0#. Please note: This will only work if you are making the request from the same phone number currently linked to your bank account. "
  },
  {
    Title: "Can I access DTCoop from any location?",
    Description:
      "DTCoop is currently available throughout Nigeria."
  },
  {
    Title: "What is a client ID? How do I find mine?",
    Description:
      "Your client ID is the unique number DTCoop uses to identify you. Think of it as your account number with us. It is displayed in your app, sent via SMS when your account is created, and contained in all account e-mails we send to you. It can also be found by logging into your app. Please take note of this ID as it should be used for resolving account issues speedily or on any repayment transaction details for quick identification."
  }
];
const loanList = [
  {
    Title: "How do I apply for a loan?",
    Description:
      "After downloading the app, sign in or sign up to identify yourself and this will take you to our brief registration/application forms. Complete an application with valid information, then determine how much you would like to borrow. We will then display your available loan offer in the app and you can view your expected repayment(s). Submit your application and we will typically notify you of the loan decision within minutes."
  },
  {
    Title: " Why was my loan application rejected? ",
    Description:
      "There are a few reasons behind loan application rejections. The most likely reason is that our system did not receive sufficient data to score your application. Please ensure you are signed into DTCoop using your main mobile device, and also keep your data on while using the app in order for us to determine the best possible loan offer for you.Another possible reason is that you may not have shared all of the information required in the application or provided invalid details. However, there can be other reasons. As a responsible lender, we take steps to ensure we only extend credit to applicants who can afford it, so that our clients won’t become too indebted. It is possible that at this time, you don’t match the profile of individual we normally lend money to. Negative repayment patterns on previous obligations (including DTCoop loans) can also limit access to credit, or make it more expensive to obtain.Whatever the situation, we recommend keeping your app installed and using it to perform other transactions, as this boosts your eligibility for loans."
  },
  {
    Title: "How long does it take to process a loan?",
    Description:
      "The entire process can be completed in no time! Once you complete our short application and accept the loan offer provided, your information is reviewed, and a loan decision is typically provided within minutes. If approved, funds will be received within a few moments of the application process being completed."
  },
  {
    Title: "How much can I borrow? For how long?",
    Description:
      "When you fill out an application, our system will calculate a loan offer for you which determines the amount and repayment duration we can offer you. This differs by individual, so please ensure your information is accurate and that you are applying from your personal mobile device, for us to provide you with the best possible loan offer."
  }
];
const savingList = [
  {
    Title: "How much can I invest?",
    Description:
      "On each investment plan, qualifying investment amounts range from ₦50,000 to ₦10,000,000."
  },
  {
    Title: " Can I top up an existing investment? ",
    Description:
      "No. However, if you wish to make additional investments, you can setup another investment plan and lock in the same rates"
  },
  {
    Title: "How is interest calculated?",
    Description:
      "Interest rates are calculated based on the investment tenor selected. The longer you lock in funds for, the higher your rates!"
  },
  {
    Title: "What is a maturity date?",
    Description: " This is the beautiful day when your investment has completed the agreed time period, and you receive your full principal and interest payout to your account! 😃💰"
  }
];

export default {
  components: { notify, siteheader, sitefooter, faqpost },
  data() {
    return {
      aboutList,
      loanList,
      savingList,
    
    };
  },
  methods: {
    toggleMenu(menuName) {
      const app = this;
      if (app.isVisible[menuName] == "") {
        app.isVisible[menuName] = "dn";
      } else {
        app.isVisible[menuName] = "";
      }
    },
    submitContact() {
      const app = this;
      app.notifications = [];
      HTTP.post("https://cp.essentials.ng/api/signup-newsletter", app.contact, {
        withCredentials: true
      })
        .then(response => {
          console.log(response.data);
          app.notifications.push(response.data);
        })
        .catch(e => {
          app.status = {};
          console.log(e);
        });
    }
  }
};
</script>
