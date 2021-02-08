<template>
  <navbar
    position="fixed"
    type="info"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Plan It
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/planner"
        >
          <i class="now-ui-icons design_bullet-list-67"></i>
          <p>Planner</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/login"
        >
          <i class="now-ui-icons location_pin"></i>
          <p>Destinations</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/login"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>Login</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import {  Navbar} from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
