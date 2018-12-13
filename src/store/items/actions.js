import axios from "axios";
import $ from "jquery";
import { Notify } from "quasar";

var production = !window.location.host.includes("localhost");
var baseUrl = production
  ? "//quick-gifter.herokuapp.com/"
  : "//localhost:3000/";

let api = axios.create({
  baseURL: baseUrl + "api/",
  timeout: 4000,
  withCredentials: true
});

export function submitEntry({ commit, dispatch }, obj) {
  api
    .post("items", obj)
    .then(res => {
      console.log("res", res);
    })
    .catch(err => {
      console.error("eerrrroror", err);
    });
}

export function getItems({ commit, dispatch }) {
  api(`items`)
    .then(res => {
      commit("setItems", res.data.data);
    })
    .catch(err => {
      console.log("eerrrroror", err);
    });
}

export function deleteItem({ commit, dispatch }, id) {
  api
    .delete(`items/${id}`)
    .then(res => {
      console.log("delete", res);
      dispatch("getItems");
    })
    .catch(err => {
      console.error(err);
    });
}

export function editEntry({ commit, dispatch }, obj) {
  api
    .put(`items/${obj._id}`, obj)
    .then(res => {
      dispatch("getItems");
    })
    .catch(err => {
      console.error(err);
    });
}
