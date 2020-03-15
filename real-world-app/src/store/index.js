import Vue from "vue";
import Vuex from "vuex";
import EventServices from '@/services/EventServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 1, 
      name: "Alan Camilo"
    },
    categories: ["sport", "gaming", "programing"],
    events:[]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    CreateEvent({commit}, event) {
      return EventServices.postEvent('/events',event)
      .then(() => {
        commit('ADD_EVENT', event)
      })      
    }
  },
  modules: {},
  getters: {
    catLength: state => { return state.categories.length },
    getEventById: state => id => {
      return state.events.filter(event => event.id == id);
    }
  }
});
