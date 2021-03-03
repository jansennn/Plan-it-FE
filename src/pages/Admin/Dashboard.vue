<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <side-bar></side-bar>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <navbar-admin></navbar-admin>

      <div class="container-fluid">
        <h1 class="mt-4">Welcome Admin</h1>
        <!-- <p>
          The starting state of the menu will appear collapsed on smaller
          screens, and will appear non-collapsed on larger screens. When toggled
          using the button below, the menu will change.
        </p>
        <p>
          Make sure to keep all page content within the
          <code>#page-content-wrapper</code>. The top navbar is optional, and
          just for demonstration. Just create an element with the
          <code>#menu-toggle</code> ID which will toggle the menu when clicked.
        </p> -->
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
import NavbarAdmin from '../../layout/Admin/NavbarAdmin.vue';
import SideBar from '../../layout/Admin/SideBar.vue';

export default {
  components: { SideBar, NavbarAdmin},
  data: () => ({}),
  mounted() {},
};
</script>

<style scoped>
#wrapper {
  overflow-x: hidden;
}

/* #sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
} */

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>