<template>
  <q-page class="thin-black">
    <div class="desktop-only">
      <div class="row justify-center" id="logo">
        <q-jumbotron class="col-xs-12 text-center">
          <transition appear enter-active-class="animated fadeInDown">
            <img class="jumbotronLogo text-center" src="~/assets/Small-gold.png" alt="Ebenezer Websites logo">
          </transition>
        </q-jumbotron>
      </div>
      <div id="work" class="pageLength">
        <Work></Work>
      </div>
      <div id="about" class="pageLength">
        <About></About>
      </div>
      <div id="contact" class="pageLength">
        <Contact></Contact>
      </div>
    </div>
    <div class="mobile-only">
      <div class="row justify-center mobile" id="logo">
        <q-jumbotron class="col-xs-12 text-center margin-top">
          <transition appear enter-active-class="animated fadeInDown">
            <img class="jumbotronLogoMobile text-center" src="~/assets/Small-gold.png" alt="Ebenezer Websites logo">
          </transition>
        </q-jumbotron>
      </div>
      <div id="work" class="">
        <Work></Work>
      </div>
      <div id="about" class="">
        <About></About>
      </div>
      <div id="contact" class="">
        <Contact></Contact>
      </div>
    </div>
  </q-page>
</template>


<script>
  import { openURL } from "quasar";
  import { Notify } from 'quasar';
  import About from './About'
  import Contact from './Contact'
  import Work from './Work'
  export default {
    name: "Home",
    data() {
      return {

      };
    },
    computed: {

    },
    mounted() { },
    methods: {
      openURL,
    },
    components: {
      About,
      Contact,
      Work
    }
  };
</script>

<style scoped>
  .pageLength {
    margin: 30rem 0 0 0;
  }

  .mobile {
    height: 100vh;
  }

  .margin-top {
    margin-top: 7rem;
  }

  .q-jumbotron {
    background-color: transparent;
  }

  .jumbotronLogo {
    width: 50vw;
  }

  .jumbotronLogoMobile {
    width: 70vw;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .page {
    height: 50vh;
    margin: 5vh 0 30vh 0vh;
  }
</style>