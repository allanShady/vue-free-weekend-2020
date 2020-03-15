import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/EventList",
    name: "event-list",
    component: EventList
  },
  {
    path: "/EventShow/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/CreateEvent",
    name: "event-create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventCreate.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
