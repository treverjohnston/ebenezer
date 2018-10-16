<template>
  <q-page class="">
    <div class="row justify-center">
      <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" class="col-xs-8 col-md-8"> -->
    </div>
    <div class="row justify-center">
      <div class="col-xs-11 second-background">
        <div class="row justify-center">
          <h2 class="col-xs-10 text-center white-text">Gift for less than:</h2>
          <q-btn flat color="purple" class="col-xs-10 col-md-3 text-center grow" v-for="sort in sorts" @click="sortBy(sort)">
            <span class="q-display-4">
              ${{sort}}
            </span>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'Home',
    data() {
      return {
      }
    },
    computed: {
      sorts() {
        return this.$store.state.items.sort
      }
    },
    mounted() {
      this.$router.push('/items')
    },
    methods: {
      sortBy(sort) {
        this.$store.dispatch('items/sortBy', sort)
        this.$router.push('/items')
      }
    }
  }
</script>