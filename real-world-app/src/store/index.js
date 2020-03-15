import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 1, name: 'Alan Camilo'},
    categories: ['sport', 'gaming', 'programing']
  },
  mutations: {},
  actions: {},
  modules: {}
});
