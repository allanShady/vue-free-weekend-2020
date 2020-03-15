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
    events:[],
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    
    SET_EVENTS(state, events) {
      state.events = events
    },

    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    CreateEvent({commit}, event) {
      return EventServices.postEvent('/events',event)
      .then(() => {
        commit('ADD_EVENT', event)
      })      
    },

    fetchEvents({commit}, {perPage, page}) {
      EventServices.getEvents('/events', perPage, page)
        .then(resp => {
            console.log('Total events are ' + resp.headers['x-total-count'])
            commit('SET_EVENTS', resp.data);
        })
        .catch(error => console.log(error));
    },

    fetchEvent({commit, getters}, id) {

      let event = getters.getEventById(id)[0] // See if we already have this event
      
      if (event) { // If we do, set the event
        commit('SET_EVENT', event)
      } 
      else {  // If not, get it with the API.
        EventServices.getEvent('/events', id)
          .then(resp => {
            commit('SET_EVENT', resp.data);
          })
          .catch(error => console.log(error));
        }
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
