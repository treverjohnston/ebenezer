<template>
  <q-layout view="lHh Lpr lFf" class="background">
    <q-layout-header>
      <!-- <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" class="mobile-only">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Peruser
        </q-toolbar-title>

        <q-tabs align="center" class="shadow-2 tabs desktop-only">
          <q-route-tab v-if="loggedIn" name="account" slot="title" to="/account" label="Account"/>
          <q-tab v-if="loggedIn" @click="logout">Logout</q-tab>
        </q-tabs>

        <q-tabs align="center" class="shadow-2 tabs desktop-only">
          <q-route-tab v-for="tab in tabs" slot="title" :label="tab.name" :name="tab.name" :to="tab.link" />
        </q-tabs>

      </q-toolbar> -->
    </q-layout-header>

    <!-- Mobile Tabs -->
    <!-- <q-layout-drawer v-model="leftDrawerOpen" class="mobile-only">
      <q-list no-border link inset-delimiter v-for="tab in tabs">
        <q-item @click.native="push(tab)">
          <q-item-side icon="" />
          <q-item-main :label="tab.name" />
        </q-item>
      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

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
.background {
  background: url(../assets/river.jpg) no-repeat center center fixed;
  /* background-color: white; */
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