import swal from 'sweetalert';
import axios from 'axios'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//unorthodoxgifts.com/' : '//localhost:3000/';

let auth_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function sendEmail({ commit, dispatch }, obj) {
    auth_api.post('email', obj)
        .then(res => {
            Notify.create({ message: 'Message Sent', color: 'positive' });
        })
        .catch(err => {
            Notify.create({ message: 'Message Failed to Send: \n' + err, color: 'negative' });
        })
}


export function getAuth({ commit, dispatch }) {
    auth_api('authenticate')
        .then(res => {
            if (res.data.data == null) {
                // swal({
                //     title: 'User Authentication Failed',
                //     timer: 2000
                // })
                //     .then(
                //     function () { },
                //     // handling the promise rejection
                //     function (dismiss) {
                //         if (dismiss === 'timer') {
                //             console.log('I was closed by the timer')
                //         }
                //     })
                console.log("failed login")
                console.log(res)
            }
            else if (res.data.data._id !== null) {
                console.log("successful login")
                commit('setLoginStatus', true)
            } else {
                // swal({
                //     title: 'User Authentication Failed',
                //     timer: 2000
                // })
                //     .then(
                //     function () { },
                //     // handling the promise rejection
                //     function (dismiss) {
                //         if (dismiss === 'timer') {
                //             console.log('I was closed by the timer')
                //         }
                //     })
                console.log("login failed")
            }
        })
        .catch(err => {
        })
}
export function createAccount({ commit, dispatch }, obj) {
    auth_api.post('register', obj)
        .then(res => {
            if (res.data.message == 'Successfully created user account') {
                commit('setLoginStatus', true)
                swal({
                    title: 'Account Created',
                    timer: 2000
                })
                    .then(
                        function () { },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                console.log('I was closed by the timer')
                            }
                        })
                    .catch(err => {
                        swal({
                            title: err,
                            timer: 2000
                        })
                            .then(
                                function () { },
                                // handling the promise rejection
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        console.log('I was closed by the timer')
                                    }
                                })
                    })
            }
            else {
                console.log("Could not login")
            }
            console.log(res)
        })
}
export function login({ commit, dispatch }, obj) {
    auth_api.post('login', obj)
        .then(res => {
            commit('setLoginStatus', true)
            swal({
                title: 'Logged in as',
                text: res.data.data.name,
                timer: 2000
            }).then(
                function () {
                },
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
export function logout({ commit, dispatch }) {
    auth_api.delete('logout')
        .then(res => {
            commit('setLoginStatus', false)
            swal({
                title: res.data.message,
                timer: 2000
            }).then(
                function () {
                },
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
        })
}
