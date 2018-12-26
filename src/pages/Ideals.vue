<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-around text-justified">
                <div v-for="ideal in ideals" class="col-xs-12 col-sm-5 col-lg-3 white text-justified ">
                    <img :src="ideal.icon" :alt="ideal.title" class="icon">
                    <p class="text-bold">{{ideal.title}}</p>
                    <p class="q-mt-md text-justified">{{ideal.body}}</p>
                </div>
            </div>
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
        max-height: 17rem;
    }
</style>