import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 1, name: 'Alan Camilo'},
    categories: ['sport', 'gaming', 'programing'],
    events: [
      {id: 1, title: '...'},
      {id: 2, title: '...'},
      {id: 3, title: '...'}
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => { return state.categories.length },
    getEventById: state => id => {
      return state.events.filter(event => event.id == id);
    }
  }
});
