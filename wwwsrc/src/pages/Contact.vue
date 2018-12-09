<template>
    <q-page class="row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-center">
                <div class="col-xs-11 q-mb-xl">
                    <div class="q-display-3 white">Contact Us</div>
                    <hr class="q-my-lg white-hr" align="left">
                    <transition appear enter-active-class="animated fadeInDown">
                        <div class="self-center">
                            <q-input v-model="name" float-label="Name" name="" type="text" />
                            <q-input v-model="email" float-label="Email" name="" type="email" />
                            <q-input v-model="phone" float-label="Phone" name="" type="tel" />
                            <q-input v-model="subject" float-label="Subject" name="" type="text" />
                            <q-input v-model="message" type="textarea" name="" float-label="Message" :max-height="100"
                                rows="5" />
                            <form action="//formspree.io/trever@ebenezerwebsites.com" method="POST">
                                <q-btn type="submit" outline color="white" class="q-mt-sm">Send</q-btn>
                                <div class="hidden">
                                    <input type="text" name="name" v-model="name">
                                    <input type="email" name="_replyto" v-model="email">
                                    <input type="tel" name="phone" v-model="phone">
                                    <input type="text" name="subject" v-model="subject">
                                    <input type="textarea" name="message" v-model="message">
                                </div>
                            </form>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Contact',
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
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
    /* .contact {
    height: 70vh;
    margin: 30vh 0 10vh 0vh;
  } */
</style>