import axios from 'axios'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//quick-gifter.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 4000,
    withCredentials: true
})

export function submitEntry({ commit, dispatch }, obj) {
    api.post('items', obj)
        .then(res => {
            console.log("res", res)
        })
        .catch(err => {
            console.error("eerrrroror",err)
        })
}

export function getItems({ commit, dispatch }) {
    api(`items`)
        .then(res => {
            commit('setItems', res.data.data)
        })
        .catch(err => {
            console.log("eerrrroror", err)
        })
}

export function deleteItem({ commit, dispatch }, id) {
    api.delete(`items/${id}`)
        .then(res => {
            console.log('delete', res)
            dispatch('getItems')
        })
        .catch(err => {
            console.error(err)
        })
}

export function editEntry({ commit, dispatch }, obj) {
    api.put(`items/${obj._id}`, obj)
        .then(res => {
            dispatch('getItems')
        })
        .catch(err => {
            console.error(err)
        })
}
//Takes a max
export function sortBy({commit, dispatch}, sort){
    var sortNum = parseFloat(sort);
    commit('sortItems', sortNum);
}

//Takes a min and a max
//Can probably make this one function, but I don't wanna
export function filterItems({commit, dispatch}, obj){
    commit('sortItemsRange', obj);
}