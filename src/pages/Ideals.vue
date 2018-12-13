<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-around text-center">
                <div class="col-xs-12 col-md-3 white">
                    <q-icon name="computer" size="10rem" class="q-mt-xl" />
                    <p class="q-mt-xl text-justified">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique placeat
                        aspernatur sequi,
                        tenetur expedita enim magnam doloribus rem eos, suscipit quo libero repudiandae tempore aperiam
                        eius reprehenderit iusto dolorem id.</p>
                </div>
                <div class="col-xs-12 col-md-3 white">
                    <q-icon name="desktop_windows" size="10rem" class="q-mt-xl" />
                    <p class="q-mt-xl text-justified">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique placeat
                        aspernatur sequi,
                        tenetur expedita enim magnam doloribus rem eos, suscipit quo libero repudiandae tempore aperiam
                        eius reprehenderit iusto dolorem id.</p>
                </div>
                <div class="col-xs-12 col-md-3 white">
                    <q-icon name="desktop_mac" size="10rem" class="q-mt-xl" />
                    <p class="q-mt-xl text-justified">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique placeat
                        aspernatur sequi,
                        tenetur expedita enim magnam doloribus rem eos, suscipit quo libero repudiandae tempore aperiam
                        eius reprehenderit iusto dolorem id.</p>
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