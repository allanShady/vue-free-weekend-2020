import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/EventList",
    name: "Event List",
    component: EventList
  },
  {
    path: "/EventShow",
    name: "Event Show",
    component: EventShow
  },
  {
    path: "/CreateEvent",
    name: "Create Event",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventCreate.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
