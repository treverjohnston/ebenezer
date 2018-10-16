<template>
    <q-page class="row justify-center">
        <div class="col-xs-11 second-background">
            <div class="row justify-center">
                <div class="col-xs-8 text-center">
                    <q-range v-model="range" :min="1" :max="100" :step=1 label-always color="purple" />
                </div>
                <div class="col-xs-2 vertical-middle">
                    <q-btn color="purple" class="q-mt-md q-ml-lg" @click="filterItems">Filter</q-btn>
                </div>
            </div>
            <div class="row justify-center">
                <q-card class="q-ma-sm col-xs-5 col-md-4 col-xl-2 card shadow-12 grow" v-for="item in items">
                    <div @click="modal = true, chosenItem = item">
                        <q-card-media overlay-position="full">
                            <img :src="item.img" :alt="item.title" class="set-size">

                            <q-card-title slot="overlay">
                                {{item.title}}
                                <span slot="subtitle">${{item.cost}}</span>
                            </q-card-title>

                        </q-card-media>
                    </div>
                </q-card>
            </div>
        </div>
        <q-modal v-model="modal" minimized class="">
            <q-card-media overlay-position="bottom" class="set-size-outer">
                <q-icon name="close" @click.native="modal = false" size="2rem" class="grow" />
                <img :src="chosenItem.img" :alt="chosenItem.title" class="">

                <q-card-title slot="overlay" class="row">
                    <q-btn class="col-xs-2 float-right" @click="openURL(chosenItem.url)" color="secondary">${{chosenItem.cost}}</q-btn>
                    <span class="col-xs-8">
                        {{chosenItem.title}}
                    </span>
                    <q-btn class="col-xs-2 float-right" v-if="loggedIn" color="secondary" @click="edit(chosenItem._id)">Edit</q-btn>
                    <span class="col-xs-10" slot="subtitle">{{chosenItem.description}}</span>
                </q-card-title>

            </q-card-media>
        </q-modal>
        <q-modal v-model="editModal" position="bottom" class="">
            <div class="second-background editModal text-center">
                <q-input dark v-model="chosenItem.title" type="text" float-label="Title" />
                <q-input dark v-model="chosenItem.description" type="text" float-label="Description" />
                <q-input dark v-model="chosenItem.url" type="text" float-label="URL" />
                <q-input dark v-model="chosenItem.cost" type="text" float-label="Cost" />
                <q-input dark v-model="chosenItem.img" type="text" float-label="Image URL" />
                <q-btn color="primary" @click="editEntry" class="q-mt-sm">Edit</q-btn>
            </div>
        </q-modal>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    import swal from 'sweetalert'
    export default {
        name: 'Items',
        data() {
            return {
                modal: false,
                editModal: false,
                chosenItem: {},
                range: {
                    min: this.$store.state.items.sortNumMin,
                    max: this.$store.state.items.sortNum
                }

            }
        },
        computed: {
            items() {
                return this.$store.state.items.items
            },
            loggedIn() {
                return this.$store.state.auth.loggedIn
            }
        },
        mounted() {
            this.$store.dispatch('items/getItems');
            this.$store.dispatch('auth/getAuth');

        },
        methods: {
            openURL,
            edit(id) {
                swal({
                    title: 'Edit or Delete?',
                    buttons: {
                        cancel: "Cancel",
                        edit: "Edit",
                        delete: "Delete"
                    }
                })
                    .then((value) => {
                        if (value == "delete") {
                            this.deleteItem(id);
                        }
                        else if (value == "edit") {
                            this.modal = false;
                            this.editModal = true;
                        }
                    })
            },
            deleteItem(id) {
                console.log('DELETING')
                this.$store.dispatch('items/deleteItem', id)
            },
            editEntry() {
                var obj = {
                    title: this.chosenItem.title,
                    description: this.chosenItem.description,
                    url: this.chosenItem.url,
                    cost: this.chosenItem.cost,
                    img: this.chosenItem.img,
                    _id: this.chosenItem._id
                }
                this.$store.dispatch('items/editEntry', obj)
                this.editModal = false;
            },
            filterItems() {
                var obj = {
                    min: this.range.min,
                    max: this.range.max
                }
                this.$store.dispatch('items/filterItems', obj)

            }
        }
    }
</script>

<style scoped>
    .card {
        max-height: 30vh;
        background-color: rgba(255, 255, 255, 0.426);
    }

    .set-size {
        max-height: 35vh;
    }

    .editModal {
        width: 70vw;
    }
</style>