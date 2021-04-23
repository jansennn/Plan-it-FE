<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <side-bar></side-bar>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <navbar-admin></navbar-admin>

      <div class="container-fluid">
        <h1 class="mt-4">Tambah Destinasi</h1>
        <div class="row">
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Nama Destinasi</label>
            <b-form-input
              v-model="name_destinasi"
              placeholder="Nama Destinasi"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Alamat</label>
            <b-form-input
              v-model="alamat"
              placeholder="Alamat"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Kabupaten</label>
            <b-form-select v-model="inputKabupaten">
              <b-form-select-option
                v-for="kabupaten in kabupatens"
                :key="kabupaten.id"
                :value="kabupaten.id"
                >{{ kabupaten.name }}</b-form-select-option
              >
            </b-form-select>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Kategory Wisata</label>
            <b-form-select v-model="inputCategory">
              <b-form-select-option
                v-for="categoryWisata in categoryWisatas"
                :key="categoryWisata.id"
                :value="categoryWisata.id"
                >{{ categoryWisata.name }}</b-form-select-option
              >
            </b-form-select>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Rating</label>
            <b-form-input
              v-model="rating"
              placeholder="Rating"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Image</label>
            <b-form-input
              v-model="image"
              placeholder="Image"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Latitude</label>
            <b-form-input
              v-model="this.coordinates.lat"
              placeholder="Latitude"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Longitude</label>
            <b-form-input
              v-model="this.coordinates.long"
              placeholder="Longitude"
              style="height: 40px"
            ></b-form-input>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Opening Hours</label>
            <b-form-timepicker
              v-model="opening_hours"
              locale="en"
              style="height: 40px"
            ></b-form-timepicker>
          </div>
          <div class="col-sm-6 col-12 mb-4">
            <label for="range-2">Closed Hours</label>
            <b-form-timepicker
              v-model="closed_hours"
              locale="en"
              style="height: 40px"
            ></b-form-timepicker>
          </div>
        </div>
        <div class="col">
          <h3>Map</h3>
          <GmapMap
            :center="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
            :zoom="9"
            map-type-id="roadmap"
            style="width: 500px; height: 300px"
          >
            <GmapMarker
              :position="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
              :clickable="true"
              :draggable="true"
              @click="
                center = { lat: 2.574647937733531, lng: 98.84375603456863 }
              "
              @drag="updateCoordinates"
            />
          </GmapMap>
        </div>
        <b-button variant="info" v-on:click="storeDestination"
          ><i class="fa fa-paper-plane"></i> Save</b-button
        >
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
import SideBar from "../../layout/Admin/SideBar.vue";
import { FormGroupInput } from "@/components";
import axios from "axios";
import NavbarAdmin from "../../layout/Admin/NavbarAdmin.vue";

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
      mapStartLocation: null,
      coordinates: {
        lat: "",
        long: "",
      },
      name_destinasi: "",
      inputKabupaten: "",
      inputCategory: "",
      alamat: "",
      rating: "",
      image: "",
      lat: "",
      long: "",
      opening_hours: "",
      closed_hours: "",
    };
  },
  created: {},
  methods: {
    setKabupaten(data) {
      this.kabupatens = data;
    },
    setCategoryWisata(data) {
      this.categoryWisatas = data;
    },
    updateCoordinates(location) {
      this.coordinates = {
        lat: location.latLng.lat(),
        long: location.latLng.lng(),
      };
      console.log(this.coordinates);
    },
    storeDestination() {
      axios
        .post("admin/destinasi", {
          kabupaten_id: this.inputKabupaten,
          category_wisata_id: this.inputCategory,
          name: this.name_destinasi,
          address: this.alamat,
          rating: this.rating,
          lat: this.coordinates.lat,
          long: this.coordinates.long,
          image: this.image,
          opening_hours: this.opening_hours,
          closed_hours: this.closed_hours,
        })
        .then(function (response) {
          this.$toast.success("Success Add Destinasi", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
        .catch(function (error) {
          this.$toast.error("Failed Add Destinasi", {
              type: "error",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
        });
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