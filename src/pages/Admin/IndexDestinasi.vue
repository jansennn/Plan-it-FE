<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <side-bar></side-bar>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <navbar></navbar>

      <div class="container-fluid">
        <h1 class="mt-4">Mengelola Destinasi</h1>
        <a href="#/addDestinasi"><b-button pill variant="info"><i class="fa fa-plus"></i> Add Destinasi</b-button></a>
        <div class="mt-4">
          <b-table striped hover :items="destinasis" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
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
import Navbar from "../../layout/Admin/Navbar.vue";
import SideBar from "../../layout/Admin/SideBar.vue";
import axios from "axios";

export default {
  components: { SideBar, Navbar },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [{ key: 'name', label: 'Nama Destinasi'}, 'address', 'rating', { key: 'lat', label: 'Latitude'}, { key: 'long', label: 'Longitude'}, 'image', 'opening_hours', 'closed_hours'],
      destinasis: [],
    };
  },
  methods: {
    setDestinasi(data) {
      this.destinasis = data;
      console.log(data);
    },
  },
  mounted() {
    axios
      .get("admin/destinasis")
      .then((response) => this.setDestinasi(response.data))
      .catch(function (error) {
        console.log("Gagal : ", error);
      });
  },
  computed: {
    rows() {
      return this.destinasis.length
    }
  }
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