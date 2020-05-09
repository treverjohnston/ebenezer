<template>
  <q-layout view="lHh Lpr fff" class="">
    <div class="desktop-only background">

      <q-layout-header flat class="row justify-center white thin-black">
        <q-toolbar color="transparent">
          <a href="#logo" flat class="tab">
            <img class=" mini-logo" src="../statics/white-ee.png" alt="Ebenenezer logo small"></img>
          </a>
          <span class="col-xs-1 col-md-8"></span>
          <a class="col-xs-3 col-md-1 tab" href="#work">Our Latest</a>
          <a class="col-xs-2 col-md-1 tab" href="#about">About Us</a>
          <a class="col-xs-2 col-md-1 tab" href="#contact">Contact Us</a>
          <a class="col-xs-2 col-md-1 tab" href="https://www.unorthodoxtech.com" target="_blank">Blog</a>
        </q-toolbar>
      </q-layout-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-layout-footer reveal>
        <q-toolbar>
          <q-toolbar-title>
            &copy;{{year}} Ebenezer Websites LLC
          </q-toolbar-title>
          <small class="q-mr-lg">Boise, ID</small>
          <small class="q-mr-lg">(303)-827-1510</small>
          <small>Trever@EbenezerWebsites.com</small>
        </q-toolbar>
      </q-layout-footer>
    </div>
    <!-- MOBILE -->
    <div class="mobile-only black-background">
      <q-layout-header flat class="row justify-center white">
        <!-- <q-toolbar color="transparent">
          <a href="#logo" flat class="tab">
            <img class=" mini-logo" src="../statics/white-ee.png" alt="Ebenenezer logo small"></img>
          </a>
          <span class="col-xs-1 col-md-8"></span>
          <a class="col-xs-3 col-md-1 tab" href="#work">Our Latest Work</a>
          <a class="col-xs-3 col-md-1 tab" href="#about">About Us</a>
          <a class="col-xs-3 col-md-1 tab" href="#contact">Contact Us</a>
        </q-toolbar> -->
      </q-layout-header>


      <q-page-container>
        <router-view />
      </q-page-container>

      <q-layout-footer>
        <q-toolbar>
          <q-toolbar-title class="row justify-center">
            <div class="col-xs-12">
              <small class="q-mr-lg">Boise, ID</small>
            </div>
            <div class="col-xs-12">
              <small class="q-mr-lg">(303)-827-1510</small>
              <small>Trever@EbenezerWebsites.com</small>
            </div>
            <div class="col-xs-12 q-mt-xs">

              &copy;{{year}} Ebenezer Websites LLC
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-layout-footer>
    </div>

  </q-layout>
</template>

<script>
  import { openURL } from "quasar";

  export default {
    name: "MyLayout",
    data() {
      return {
        leftDrawerOpen: false
      };
    },
    computed: {
      tabs() {
        return this.$store.state.tabs.tabs;
      },
      loggedIn() {
        return this.$store.state.auth.loggedIn;
      },
      home() {
        if (this.$route.path == "/") {
          return true;
        } else {
          return false;
        }
      },
      year() {
        var y = new Date;
        return y.getFullYear();
      }
    },
    methods: {
      openURL,
      push(tab) {
        this.$router.push(tab.link);
      },
      logout() {
        this.$store.dispatch("auth/logout");
      }
    }
  };
</script>

<style>
  .lightish-background {
    background-color: rgba(255, 255, 255, 0.199);
  }

  .light-background {
    background-color: white;
  }

  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }

  .thin-black {
    background-color: rgba(0, 0, 0, 0.411);
  }

  .black-background {
    background-color: black;
  }

  .mini-logo {
    /* width: 1rem; */
    max-height: 2rem;
    max-width: 2rem;
  }

  .tab {
    margin-top: 1rem;
    color: white;
  }

  .q-layout-header {
    box-shadow: none;
  }

  .q-toolbar {
    box-shadow: none;
    background-color: transparent;
  }

  .q-input-target {
    color: white;
  }

  .background {
    background: url(../assets/river.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }

  .second-background {
    background-color: rgba(17, 17, 17, 0.75);
    padding: 1rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  .set-size-outer {
    max-width: 65vh;
  }

  .white {
    color: white;
  }

  .grow {
    transition: all 0.35s ease-in-out;
    margin-bottom: 2rem;
  }

  .grow:hover {
    transform: scale(1.05);
  }

  .white-hr {
    height: 1px;
    min-height: 1px;
    /* display: block; */
    border: none;
    width: 50%;
    background: white;
  }
</style>