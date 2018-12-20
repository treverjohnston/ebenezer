<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-around text-center">
                <div v-for="ideal in ideals" class="col-xs-12 col-md-3 white">
                    <q-icon :name="ideal.icon" size="10rem" class="q-mt-xl q-mb-lg" />
                    <p class="
                        text-bold">{{ideal.title}}</p>
                    <p class="q-mt-xl text-justified">{{ideal.body}}</p>
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
</style>