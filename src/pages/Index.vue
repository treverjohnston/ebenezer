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
      <div id="ideals" class="pageLength">
        <Ideals></Ideals>
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
      <div class="row justify-center mobile" id="mobileLogo">
        <q-jumbotron class="col-xs-12 text-center margin-top">
          <transition appear enter-active-class="animated fadeInDown">
            <img class="jumbotronLogoMobile text-center" src="~/assets/Small-gold.png" alt="Ebenezer Websites logo">
          </transition>
        </q-jumbotron>
        <transition appear enter-active-class="animated fadeInDown" v-scroll-fire="removeArrow">
          <q-icon id="arrow" class="animate-bounce white" size="3rem" name="arrow_downward" />
        </transition>
      </div>
      <div id="mobileIdeals" class="pageLength">
        <Ideals></Ideals>
      </div>
      <div id="mobileWork" class="" v-scroll-fire="removeArrow">
        <Work></Work>
      </div>
      <div id="mobileAbout" class="light-background" v-scroll-fire="removeArrow">
        <About></About>
      </div>
      <div id="mobileContact" class="">
        <Contact></Contact>
      </div>
    </div>
  </q-page>
</template>


<script>
  import { openURL } from "quasar";
  import { Notify } from 'quasar';
  import { scroll } from 'quasar'
  import About from './About'
  import Contact from './Contact'
  import Work from './Work'
  import Ideals from './Ideals'
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
      removeArrow() {
        var element = document.getElementById('arrow')
        element.remove();
      },
      jump() {
        console.log('Hello')
        window.location.hash = "mobileWork";
        var el = document.getElementById('mobileWork')

        const { getScrollTarget, setScrollPosition } = scroll

        let target = getScrollTarget(el)
        let offset = el.offsetTop - el.scrollHeight
        let duration = 1000
        setScrollPosition(target, offset, duration)
        // setScrollPosition(scrollTargetElement, offset[100, duration])
        // document.getElementById('mobileWork').scrollIntoView({
        //   behavior: 'smooth'
        // });
      }
    },
    components: {
      About,
      Contact,
      Work,
      Ideals
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