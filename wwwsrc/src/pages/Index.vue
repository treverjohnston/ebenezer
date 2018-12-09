<template>
  <q-page class="">
    <div class="row justify-center">
      <q-jumbotron class="col-xs-12 text-center desktop-only">
        <transition appear enter-active-class="animated fadeInDown">
          <img class="jumbotronLogo text-center" src="~/assets/logo.png" alt="Ebenezer Websites logo">
        </transition>
      </q-jumbotron>
      <q-jumbotron class="col-xs-12 text-center mobile-only margin-top">
        <transition appear enter-active-class="animated fadeInDown">
          <img class="jumbotronLogoMobile text-center" src="~/assets/logo.png" alt="Ebenezer Websites logo">
        </transition>
      </q-jumbotron>
    </div>
  </q-page>
</template>


<script>
  import { openURL } from "quasar";
  import { Notify } from 'quasar';
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
    }
  };
</script>

<style>
  .margin-top {
    margin-top: 5rem;
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