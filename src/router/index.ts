import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../views/layout.vue";

import SongFirst from "../components/songSheet/songFirst.vue";

import SongerFirst from "../components/songSheet/songerFirst.vue";
import StationFirst from "../components/songSheet/stationFirst.vue";
import PlayDetail from "../components/songSheet/playDetail.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "layout",
    component: Layout
  },
  {
    path: "/mymusic",
    name: "mymisic",
    component: Layout
  },
  {
    path: "/station",
    name: "station",
    component: Layout
  },
  {
    path: "/musicer",
    name: "musicer",
    component: Layout
  },
  {
    path: "/songFirst",
    name: "songFirdt",
    component: SongFirst
  },
  {
    path: "/playDetail",
    name: "playDetail",
    component: PlayDetail
  },
  {
    path: "/songerFirst",
    name: "songerFirst",
    component: SongerFirst
  },
  {
    path: "/staionFirst",
    name: "stationFirst",
    component: StationFirst
  }
];

const router = new VueRouter({
  routes
});

export default router;
