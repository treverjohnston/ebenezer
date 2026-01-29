<template>
    <q-page class="row justify-center text-center bg-white">
        <div class="col-xs-12">
            <h2>Under Construction</h2>
        </div>
        <div class="col-xs-12">
            <img class="" src="../statics/dundermifflin.png" alt="Dunder Mifflin logo">
        </div>
        <div class="col-xs-12">
            <img class="" src="../statics/dunder.gif" alt="Under construction gif">
        </div>
        <div class="col-xs-12 alternate">
            <h2>Coming 
                <span>C</span>
                <span>h</span>
                <span>r</span>
                <span>i</span>
                <span>s</span>
                <span>t</span>
                <span>m</span>
                <span>a</span>
                <span>s</span>
                <span> 2</span>
                <span>0</span>
                <span>0</span>
                <span>2</span>
                <span> !</span>
            </h2>
        </div>
    </q-page>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'DunderMifflin',
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
    .alternate span:nth-of-type(even){
    color:green;
}
.alternate span:nth-of-type(odd){
    color:red;
}
</style>