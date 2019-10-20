
import axios from 'axios'
import { Notify } from 'quasar'


var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//unorthodoxgifts.com/' : '//localhost:3000/';
var baseUrl = production ? '//unorthodoxgifts.com/' : '//localhost:3000/';

let email_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
})

export function sendEmail({ commit, dispatch }, obj) {
    email_api.post('email', obj)
        .then(res => {
            Notify.create({ message: 'Message Sent', color: 'positive' });
        })
        .catch(err => {
            Notify.create({ message: 'Message Failed to Send: \n' + err, color: 'negative' });
        })
}
