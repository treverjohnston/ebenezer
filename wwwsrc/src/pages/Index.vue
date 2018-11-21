<template>
  <q-page class="">
    <div class="row justify-center">
      <!-- <q-jumbotron class="col-xs-12" gradient="circle, rgba(55,55,55,1) 0%, rgba(15,15,15,1) 100%"> -->
      <q-jumbotron class="col-xs-12 background" >
        <div class="row justify-center page second-background">
          <div class="col-xs-11 q-mt-lg">
            <div class="q-display-3 white">Ebenezer Websites</div>
            <!-- <div class="q-subheading">
              This is a simple hero unit, a simple jumbotron-style component for calling extra
              attention to featured content or information.
            </div> -->
            <hr align="left" class="q-my-lg white-hr">
            <div class="q-title q-mb-md white">We make websites. Better.</div>
            <q-btn no-caps color="white" text-color="primary" class="q-py-sm q-px-xl" label="See our work." />
          </div>
        </div>
        <div class="row justify-center page second-background">
          <div class="col-xs-11">
            <div class="q-display-3 white">About</div>
            <div class="q-subheading white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt tempora beatae maxime magni nisi repudiandae unde maiores possimus minus voluptatibus amet ut dicta consequatur et repellat, omnis asperiores hic?
            </div>
            <!-- <hr class="q-my-lg white-hr">
              <div class="q-title q-mb-md white">We make websites. Better.</div>
              <q-btn no-caps color="white" text-color="primary" class="q-py-sm q-px-xl" label="See our work." /> -->
            </div>
          </div>
        <div class="row justify-center second-background">
          <div class="col-xs-11">
            <div class="q-display-3 white text-center">Our work</div>
            <hr class="q-my-lg white-hr">
            <q-card flat class="q-ma-sm card shadow-12 grow text-center" v-for="(item, index) in projects" :key="index">
              <div @click="launch(item.url)">
                <div class="container text-center">
          
                  <img :src="item.img" :alt="item.title" class="image text-center">
            
                  <h3 class="middle text text-weight-light white">
                    {{item.title}}
                  </h3>
            
                </div>
              </div>
             </q-card>

            </div>
          </div>
      </q-jumbotron>
    </div>
    <!-- <div class="row justify-center">s
      <q-jumbotron class="col-xs-12" gradient="circle, rgba(55,55,55,1) 0%, rgba(15,15,15,1) 100%">
      </q-jumbotron>
    </div> -->
  </q-page>
</template>


<script>
    import { openURL } from 'quasar'
  export default {
    name: "Home",
    data() {
      return {};
    },
    computed: {
      projects(){
        return this.$store.state.items.projects
        }
    },
    mounted() {},
    methods: {
       launch(url) {
        openURL(url);
      },
    }
  };
</script>

<style>
.page{
  height: 100vh;
  margin: 5vh 0 0 5vh;
  /* padding-top: 15vh; */
}
.container:hover .image {
    opacity: 0.2;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .image {
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
    width: 70vw;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    /* text-align: center; */
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.95);
    padding: .5rem;
  }
  .grow {
    transition: all .35s ease-in-out;
    /* margin-bottom: 2rem; */
  }

  .grow:hover {
    transform: scale(1.05);
  }

</style>