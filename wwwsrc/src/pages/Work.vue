<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-center">
                <div class="col-xs-11 q-mb-xl">
                    <div class="q-display-3 white">Our work</div>
                    <hr class="q-my-lg white-hr" align="left">
                    <transition-group appear enter-active-class="animated fadeInDown">
                        <q-card flat class="q-ma-sm card shadow-12 grow text-center" v-for="(item, index) in projects"
                            :key="index">
                            <div @click="openURL(item.url)">
                                <div class="container text-center">
                                    <img :src="item.img" :alt="item.title" class="image text-center">
                                    <h3 class="middle text text-weight-light white desktop-only">{{item.title}}</h3>
                                    <h5 class="middle text text-weight-light white mobile-only">{{item.title}}</h5>
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
    .container:hover .image {
        opacity: 0.2;
    }

    .container:hover .middle {
        opacity: 1;
    }

    .image {
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