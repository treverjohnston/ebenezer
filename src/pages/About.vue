<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-center">
                <div class="col-xs-11">
                    <div class="q-display-3 white">About Us</div>
                    <hr class="q-my-lg white-hr" align="left">
                    <transition appear enter-active-class="animated fadeInDown">
                        <div class="row justify-between q-mt-lg">
                            <div class="col-xs-11 col-md-4">
                                <img class="headshot shadow-24 desktop-only" src="../assets/me.jpg" alt="Trever Johnston Headshot">
                                <img class="headshot shadow-24 mobile-only q-mb-lg" src="../assets/me.jpg" alt="Trever Johnston Headshot">
                            </div>
                            <div class="col-xs-11 col-md-7 q-mb-xl">
                                <div class="row justify-center">
                                    <div class="col-xs-12 q-display-2 white q-mb-md">
                                        Trever Johnston
                                    </div>
                                    <div class="col-xs-12 q-title white q-mb-xl">
                                        Owner
                                    </div>
                                    <div class="col-xs-12 q-subheading white q-mt-lg q-mb-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt
                                        tempora
                                        beatae
                                        maxime
                                        magni nisi
                                        repudiandae unde maiores possimus minus voluptatibus amet ut dicta
                                        consequatur
                                        et
                                        repellat,
                                        omnis
                                        asperiores hic?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    .headshot {
        width: 100%;
        border-radius: 50%;
    }
</style>