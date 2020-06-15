import axios from 'axios'
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxtech.com/' : '//localhost:3000/';

let auth_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function sendEmail({ commit, dispatch }, obj) {
    auth_api.post('api/emails', obj)
        .then(res => {
            Notify.create({ message: 'Message Sent', color: 'positive' });
        })
        .catch(err => {
            Notify.create({ message: 'Message Failed to Send: \n' + err, color: 'negative' });
        })
}

