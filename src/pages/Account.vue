<template>
    <q-page v-if="!loggedIn" class="flex flex-center row justify-center">
        <div class="col-xs-10 second-background">
            <div class="row justify-center">
                <div class="col-xs-10 col-md-5">
                    <q-input dark v-model="logEmail" type="email" float-label="Email" />
                    <q-input dark v-model="logPassword" type="password" float-label="Password" />
                    <q-btn color="primary" @click="logIn" class="q-mt-sm">Login</q-btn>
                </div>
                <div class="col-md-1 desktop-only"></div>
                <div class="col-xs-10 col-md-5">
                    <q-input dark v-model="name" type="text" float-label="Name" />
                    <q-input dark v-model="email" type="email" float-label="Email" />
                    <q-input dark v-model="password" type="password" float-label="Password" />
                    <q-input dark v-model="confirmPassword" type="password" float-label="Confirm Password" />
                    <q-btn v-if="password == confirmPassword" color="primary" @click="register" class="q-mt-sm">Register</q-btn>
                </div>
            </div>
        </div>
    </q-page>
    <q-page v-else>
        <div class="row justify-center">
            <div class="col-xs-10 col-md-5 q-mt-md second-background">
                <q-input dark v-model="title" type="text" float-label="Title" />
                <q-input dark v-model="description" type="text" float-label="Description" />
                <q-input dark v-model="url" type="text" float-label="URL" />
                <q-input dark v-model="cost" type="text" float-label="Cost" />
                <q-input dark v-model="img" type="text" float-label="Image URL" />
                <q-btn v-if="img != ''" color="primary" @click="submitEntry" class="q-mt-sm">Add Entry</q-btn>
                <q-btn v-if="img != ''" @click="testModal = true" color="primary" class="q-mt-sm q-ml-sm">Test</q-btn>
            </div>
        </div>
        <div class="row justify-center">
            <div v-if="img != '' && testModal != true" class="col-xs-10 col-md-8 q-mt-md second-background text-center">
                <img :src="img" alt="Image Preview" class="set-size-outer">
            </div>
            <q-modal v-model="testModal" minimized>
                <q-card-media overlay-position="bottom" class="set-size-outer">
                    <q-icon name="close" @click.native="testModal = false" size="2rem" />
                    <img :src="img" :alt="title" class="">

                    <q-card-title slot="overlay" class="row">
                        <span class="col-xs-8">
                            {{title}}
                        </span>
                        <q-btn class="col-xs-2 float-right" @click="openURL(url)" color="secondary">${{cost}}</q-btn>
                        <span class="col-xs-10" slot="subtitle">{{description}}</span>
                    </q-card-title>

                </q-card-media>
            </q-modal>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'Account',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                logEmail: '',
                logPassword: '',
                title: '',
                description: '',
                url: '',
                cost: '',
                img: '',
                testModal: false
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn
            }
        },
        mounted() {
            this.$store.dispatch('auth/getAuth')
        },
        methods: {
            logIn() {
                var obj = {
                    email: this.logEmail,
                    password: this.logPassword
                }
                this.$store.dispatch('auth/login', obj)
            },
            register() {
                console.log("attempting to register")
                var obj = {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                }
                this.$store.dispatch('auth/createAccount', obj)
            },
            logout() {
                this.$store.dispatch('auth/logout')
            },
            submitEntry() {
                var obj = {
                    title: this.title,
                    description: this.description,
                    url: this.url,
                    cost: this.cost,
                    img: this.img
                }
                this.$store.dispatch('items/submitEntry', obj)
                this.title = '';
                this.description = '';
                this.url = '';
                this.cost = '';
                this.img = '';
            },
            getItems() {
                this.$store.dispatch('items/getItems')
            }
        }
    }
</script>

<style>
</style>