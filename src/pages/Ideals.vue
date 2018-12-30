<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <transition appear enter-active-class="animated fadeInDown">
                <div class="row justify-around">
                    <div v-for="ideal in ideals" class="col-xs-12 col-sm-5 col-lg-5 white text-center">
                        <img :src="ideal.icon" :alt="ideal.title" class="icon">
                        <p class="text-bold text-justify">{{ideal.title}}</p>
                        <p class="q-mt-md text-justify">{{ideal.body}}</p>
                    </div>
                </div>
            </transition>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Ideals',
        data() {
            return {
            }
        },
        computed: {
            ideals() {
                return this.$store.state.items.ideals;
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
    .icon {
        max-height: 17em;
    }
</style>