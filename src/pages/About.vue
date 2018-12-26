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
                                        Trever was born and largely raised in Longmont, Colorado. However, he spent his
                                        formative years, and currently resides,
                                        in Boise, Idaho, with his wife where he pretends he is a native. He enjoys most
                                        all things outdoors and has a passion
                                        for baseball, retro-videogames (think the original Super Mario Bros.), and fun
                                        board/card games. He has a strong
                                        devotion to learning more and is constantly striving for greatness at
                                        everything he does, especially when building your
                                        website. Trever is more than willing to go the extra mile to ensure that your
                                        product is everything you want it to be
                                        and more. If you have any questions, or just want to talk, Trever is always
                                        ready for a good conversation!
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