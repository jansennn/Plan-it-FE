<template>
  <div class="planner">
    <div
      class="page-header clear-filter"
      style="min-height: 400px; max-height: 600px"
    >
      <parallax
        class="page-header-image"
        style="
          background-image: url('img/header-home.jpg');
          filter: brightness(50%);
          height: 400px;
        "
      ></parallax>

      <div class="container mt-5">
        <div class="content-center brand"></div>
        <h1 class="h1-seo">PLANNER</h1>
      </div>
    </div>

    <section class="section-inform mt-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="font-weight-bold">Make Your Trip</h2>
            <p class="float-left">
              In Your Apps <br />A complete day by day itinerary based on your
              preferences <br />
              Refine your trip. We'll find the best routes and schedules <br />
              Everything in one place.Everyone on the same page.
            </p>
          </div>
          <div class="col">
            <img
              src="ilustrator/destinations_2.png"
              alt=""
              class="image-destination"
            />
          </div>
        </div>
      </div>
    </section>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    <section class="mt-4 mb-4">
      <div class="container mt-4">
        <h2 class="h2-seo text-center">Set Your Preferences</h2>
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="Name Route Travel:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="text"
                  placeholder="Enter Name"
                  v-model="name_route_travel"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="How many destination:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  placeholder="How many destination"
                  required
                  v-model="destination_length"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="When start travel:"
                label-for="input-1"
              >
                <date-picker
                  v-model="date"
                  type="date"
                  range
                  value-type="format"
                  format="DD-MM-YYYY"
                  style="width:100%"
                ></date-picker>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="Type transportation:"
                label-for="input-1"
              >
                <b-form-select
                  v-model="type_transportation"
                  :options="select_transportation"
                  size="sm"
                >
                  <template #first>
                    <b-form-select-option :value="null" disabled
                      >-- Please select type transportation
                      -</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="how many hours in every destination:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  placeholder="how many hours in every destination"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="What time you start travel:"
                label-for="input-1"
              >
                <date-picker v-model="value5" type="time" placeholder="Select time" style="width:100%"></date-picker>
              </b-form-group>
            </div>
            <div class="col-sm-12 mt-4">
              <b-form-group
                id="input-group-1"
                label="Pick Your Location:"
                label-for="input-1"
              >
                <GmapMap
                  :center="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
                  :zoom="9"
                  map-type-id="roadmap"
                  style="width: 100%; height: 500px"
                >
                  <GmapMarker
                    :position="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
                    :clickable="true"
                    :draggable="true"
                  />
                </GmapMap>
              </b-form-group>              
            </div>
            <div class="col-sm-12 mt-4">
              <p class="category">Select the type of tourist spot</p>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.beach">Beach</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.waterfall">Waterfall</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.museum">Museum</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.mount">Mount</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.panorama">Panorama</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.taman_wisata">Taman Wisata</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.desa_wisata">Desa Wisata</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.wisata_budaya">Wisata Budaya</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.kuliner">Kuliner</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.kebun_binatang">Kebun Binatang</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.hiking">Hiking</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.camping">Camping</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.galeri_seni">Galeri Seni</n-checkbox>
            </div>
            <div class="col-sm-6">
              <n-checkbox v-model="checkboxes.tradisi_lokal">Tradisi Lokal</n-checkbox>
            </div>
            <div class="col-sm-12 mt-4 mb-4">
              <!-- <n-button type="submit info" round block
                ><i class="fa fa-paper-plane"></i>&nbsp;&nbsp; Save</n-button
              > -->
              <b-button block pill variant="info" type="submit"
                ><i class="fa fa-paper-plane"></i>&nbsp;&nbsp; Save</b-button
              >
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { Parallax } from "@/components";
import { FormGroupInput, Checkbox, Button } from "@/components";
import axios from "axios";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters, mapActions } from "vuex";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "planner",
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    DatePicker,
    Loading,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  data() {
    return {
      checkboxes: {
        beach: false,
        waterfall: false,
        museum: false,
        mount: false,
        panorama: false,
        taman_wisata: false,
        wisata_alam: false,
        desa_wisata: false,
        wisata_budaya: false,
        kuliner: false,
        kebun_binatang: false,
        hiking: false,
        camping: false,
        galeri_seni: false,
        tradisi_lokal: false,
        tempat_ibadah: false,
        agrowisata: false,
        monumen: false,
      },
      value5: null,
      date: [],
      select_transportation: [
        { value: "mobil", text: "Mobil" },
        { value: "sepeda_motor", text: "Sepeda Motor" },
      ],
      type_transportation: "",
      category_wisata: [],
      destination_length: null,
      user_id: 1,
      name_route_travel: "",
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    submit() {
      this.category_wisata = [];

      if (this.checkboxes.beach == true) {
        this.category_wisata.push(1);
      }
      if (this.checkboxes.waterfall == true) {
        this.category_wisata.push(2);
      }
      if (this.checkboxes.museum == true) {
        this.category_wisata.push(3);
      }
      if (this.checkboxes.mount == true) {
        this.category_wisata.push(4);
      }
      if (this.checkboxes.panorama == true) {
        this.category_wisata.push(5);
      }
      if (this.checkboxes.taman_wisata == true) {
        this.category_wisata.push(6);
      }
      this.showLoader();
      //post
      axios
        .post("user/testInisiasi", {
          category_wisata: this.category_wisata,
          destination_length: this.destination_length,
          type_transportation: this.type_transportation,
          date: this.date,
          user_id: this.user_id,
          name_route_travel: this.name_route_travel,
        })
        .then((response) => {
          console.log(response);
          this.hideLoader();
          this.$toast.success("Success Make Itenerary", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
        .catch((error) => {
          this.hideLoader();
          this.$toast.error("Failed Make Itenerary", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        });
    },
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push({ path: '/historyTravel' })
      }, 5000);
    },
    showLoader(){
      this.isLoading = true;
    },
    hideLoader(){
      this.isLoading = false;
      this.$router.push({ path: '/historyTravel' })
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  }
};
</script>

<style>
.section-inform .container .row .kata {
  float-left: ;
}
</style>