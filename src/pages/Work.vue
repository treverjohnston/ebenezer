<template>
    <q-page class="row justify-center">
        <div class=" col-xs-10">
            <div class="row justify-center">
                <div class="col-xs-12 col-md-11 q-mb-xl">
                    <div class="q-display-3 white">Our Latest Work</div>
                    <hr class="q-my-lg white-hr" align="left">
                    <transition-group appear enter-active-class="animated fadeInDown">
                        <q-card flat class="q-ma-sm card shadow-24 grow text-center" v-for="(item, index) in projects"
                            :key="index">
                            <div @click="openURL(item.url)" class="text-center">
                                <div class="container text-center desktop-only">
                                    <img :src="item.img" :alt="item.title" @click="openURL(item.url)"
                                        class="image text-center desktop-only">
                                    <div class="middle">
                                        <h3 class="text text-weight-light white desktop-only">{{item.title}}</h3>
                                        <h6 class="text text-weight-light white desktop-only">{{item.description}}
                                        </h6>
                                        <q-btn no-caps outline class="white">Take me to the site!</q-btn>
                                    </div>
                                </div>
                                <div class="text-center mobile-only">
                                    <img :src="item.imgMob" :alt="item.title"
                                        class="mobile-image text-center mobile-only">
                                    <h6 class="text text-weight-light white mobile-only">
                                        {{item.description}}</h6>
                                    <q-btn no-caps outline class="btn">Take me to the site!</q-btn>

                                </div>
                            </div>
                        </q-card>
                    </transition-group>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Work',
        data() {
            return {
            }
        },
        computed: {
            projects() {
                return this.$store.state.items.projects;
            }
        },
        mounted() {
        },
        methods: {
            openURL
        }
    }
</script>

<style scoped>
    .btn {
        color: white;
        /* background-color: black; */
    }

    .container:hover .image {
        opacity: 0;
    }

    .container:hover .middle {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.603);
        padding: 1rem;
    }

    .image {
        opacity: 1;
        transition: 0.5s ease;
        backface-visibility: hidden;
        width: 70vw;
    }

    .mobile-image {
        opacity: 1;
        transition: 0.5s ease;
        backface-visibility: hidden;
        width: 70vw;
    }

    .middle {
        transition: 0.5s ease;
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
        padding: 0.5rem;
    }

    .grow {
        transition: all 0.35s ease-in-out;
        /* margin-bottom: 2rem; */
    }

    .grow:hover {
        transform: scale(1.05);
    }
</style>