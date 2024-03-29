import Vue from 'vue';
import Router from 'vue-router';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import store from '@/store';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Planner from './pages/Planner.vue';
import Destinations from "@/pages/Destinations.vue";
import HistoryTravel from "@/pages/HistoryTravel.vue";
import Timeline from "@/pages/Timeline.vue";
import DetailDestination from "@/pages/DetailDestination.vue";

// for admin page
import Dashboard from "@/pages/Admin/Dashboard.vue";
import IndexDestinasi from "@/pages/Admin/IndexDestinasi.vue";
import AddDestinasi from "@/pages/Admin/AddDestinasi.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/planner',
      name: 'planner',
      components: { default: Planner, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']) {
          return next({
            name: 'login'
          })
        }

        next()
      }
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/destinations',
      name: 'destinations',
      components: { default: Destinations, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/historyTravel',
      name: 'historyTravel',
      components: { default: HistoryTravel, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/timeline/:id',
      name: 'timeline',
      components: { default: Timeline, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/detailDestination/:id',
      name: 'detailDestination',
      components: { default: DetailDestination, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: {
        header: { colorOnScroll4: 400},
        footer: { backgroundColor: 'black'}
      }
    },
    {
      path: '/indexDestinasi',
      name: 'indexDestinasi',
      component: IndexDestinasi,
      props: {
        header: { colorOnScroll4: 400},
        footer: { backgroundColor: 'black'}
      }
    },
    {
      path: '/addDestinasi',
      name: 'addDestinasi',
      component: AddDestinasi,
      props: {
        header: { colorOnScroll4: 400},
        footer: { backgroundColor: 'black'}
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
