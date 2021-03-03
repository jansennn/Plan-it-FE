<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <side-bar></side-bar>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <navbar-admin></navbar-admin>

      <div class="container-fluid">
        <h1 class="mt-4">Add Destinasi</h1>
        <div class="row">
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Nama Destinasi</label>
            <b-form-input v-model="name_destinasi" placeholder="Nama Destinasi" style="height:40px"></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Alamat</label>
            <b-form-input v-model="alamat" placeholder="Alamat" style="height:40px"></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Kabupaten</label>
            <b-form-input list="listKabupaten" placeholder="Kabupaten" style="height:40px"></b-form-input>

            <datalist id="listKabupaten">
              <option v-for="kabupaten in kabupatens" :key="kabupaten.id">
                {{ kabupaten.name }}
              </option>
            </datalist>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Category Wisata</label>
            <b-form-input list="listCategoryWisata" placeholder="Category Wisata" style="height:40px"></b-form-input>

            <datalist id="listCategoryWisata">
              <option v-for="categoryWisata in categoryWisatas" :key="categoryWisata.id">
                {{ categoryWisata.name }}
              </option>
            </datalist>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Rating</label>
            <b-form-input v-model="rating" placeholder="Rating" style="height:40px"></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Image</label>
            <b-form-input v-model="image" placeholder="Image" style="height:40px"></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Latitude</label>
            <b-form-input v-model="lat" placeholder="Latitude" style="height:40px"></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Longitude</label>
            <b-form-input v-model="long" placeholder="Longitude" style="height:40px"></b-form-input>
          </div>
        </div>

        <b-button variant="info"><i class="fa fa-paper-plane"></i> Save</b-button>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
import SideBar from "../../layout/Admin/SideBar.vue";
import { FormGroupInput } from "@/components";
import axios from "axios";
import NavbarAdmin from '../../layout/Admin/NavbarAdmin.vue';

export default {
  components: {
    SideBar,
    NavbarAdmin,
    [FormGroupInput]: FormGroupInput,
  },
  data() {
    return {
      kabupatens: [],
      categoryWisatas: [],
    };
  },
  methods: {
    setKabupaten(data) {
      this.kabupatens = data;
      console.log(data);
    },
    setCategoryWisata(data) {
      this.categoryWisatas = data;
      console.log(data);
    },
  },
  mounted() {
    axios
      .get("admin/kabupatens")
      .then((response) => this.setKabupaten(response.data))
      .catch(function (error) {
        console.log("Gagal : ", error);
      });

    axios
      .get("admin/categoryWisatas")
      .then((response) => this.setCategoryWisata(response.data))
      .catch(function (error) {
        console.log("Gagal : ", error);
      });
  },
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