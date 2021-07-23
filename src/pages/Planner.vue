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
            <!-- <div class="col-sm-6 mt-4">
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
            </div> -->
            
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="Type transportation:"
                label-for="input-1"
              >
                <b-form-select
                  v-model="type_transportation"
                  :options="select_transportation"
                  required
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
                label="how many hours in every destination (in hours):"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  placeholder="how many hours in every destination"
                  v-model="hours"
                  :required=true
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
                  v-model="date_start"
                  type="datetime"
                  value-type="format"
                  format="DD-MM-YYYY:hh:00:00"
                  style="width:100%"
                  :disabled-date="disabledBeforeToday"
                  :disabled-time="notBeforeNineOClock"
                  :required=true
                ></date-picker>
              </b-form-group>
            </div>

            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="When end travel:"
                label-for="input-1"
              >
                <date-picker
                  v-model="date_end"
                  type="date"
                  value-type="format"
                  format="DD-MM-YYYY"
                  style="width:100%"
                  :disabled-date="disabledBeforeToday"
                  :required=true
                ></date-picker>
              </b-form-group>
            </div>
            
            <div class="col-sm-12 mt-4">
              <p class="category">Select the type of tourist spot</p>
            </div>
            <div class="col-sm-6">
              <p class="font-weight-bold">Wisata Alam</p>
              <n-checkbox v-model="checkboxes.beach">Beach</n-checkbox>
              <n-checkbox v-model="checkboxes.mount">Mountain</n-checkbox>
              <n-checkbox v-model="checkboxes.waterfall">Waterfall</n-checkbox>
              <n-checkbox v-model="checkboxes.panorama">Panorama</n-checkbox>
              <br>
              <p class="font-weight-bold">Wisata Sejarah</p>
              <n-checkbox v-model="checkboxes.museum">Museum</n-checkbox>
              <n-checkbox v-model="checkboxes.art_gallery">Art Gallery</n-checkbox>
              <n-checkbox v-model="checkboxes.monument">Monument</n-checkbox>
              <n-checkbox v-model="checkboxes.historical_place">Historical Place</n-checkbox>
            </div>
            <div class="col-sm-6">
              <p class="font-weight-bold">Wisata Budaya</p>
              <n-checkbox v-model="checkboxes.tourist_village">Tourist Village</n-checkbox>
              <n-checkbox v-model="checkboxes.tourist_park">Tourist Park</n-checkbox>
              <n-checkbox v-model="checkboxes.local_tradition">Local Tradition</n-checkbox>
              <n-checkbox v-model="checkboxes.worship">places of worship, rituals, or religion</n-checkbox><br>
              <p class="font-weight-bold">Wisata Kuliner</p>
              <n-checkbox v-model="checkboxes.cafe">Cafe & Resto</n-checkbox><br>
              <p class="font-weight-bold">Wisata Hiburan</p>
              <n-checkbox v-model="checkboxes.zoo">Zoo</n-checkbox>
              <n-checkbox v-model="checkboxes.hiking">Hiking</n-checkbox>
              <n-checkbox v-model="checkboxes.camping">Camping</n-checkbox>
              <n-checkbox v-model="checkboxes.outdoor">Outdoor</n-checkbox>
              <n-checkbox v-model="checkboxes.outdoor">Agrotourism</n-checkbox>
            </div>
            <hr/>
            <div class="col-sm-12 mt-4">
              <b-form-group
                id="input-group-1"
                label="Start Location:"
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
                    @click="
                      center = { lat: 2.574647937733531, lng: 98.84375603456863 }
                    "
                    @drag="updateCoordinates"
                  />
                </GmapMap>
              </b-form-group>              
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
        tourist_park: false,
        wisata_alam: false,
        tourist_village: false,
        cafe: false,
        zoo: false,
        hiking: false,
        camping: false,
        art_gallery: false,
        local_tradition: false,
        tempat_ibadah: false,
        agrotourism: false,
        monument: false,
        historical_place: false,
        worship: false,
        outdoor: false
      },
      date_start: [],
      date_end: [],
      select_transportation: [
        { value: "mobil", text: "Mobil" },
        { value: "sepeda_motor", text: "Sepeda Motor" },
      ],
      type_transportation: "",
      category_wisata: [],
      // destination_length: null,
      user_id: localStorage.getItem("id_user"),
      name_route_travel: "",
      isLoading: false,
      fullPage: true,
      hours: null,
      gambar: "",
      lat: "",
      long: ""
    };
  },
  methods: {
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today ;
    },
    notBeforeNineOClock(date) {
      return date.getHours() < 9 || date.getHours() > 17;
    },
    submit() {
      this.category_wisata = [];

      if (this.checkboxes.beach == true) {
        this.category_wisata.push(1);
      }
      if (this.checkboxes.mount == true) {
        this.category_wisata.push(2);
      }
      if (this.checkboxes.waterfall == true) {
        this.category_wisata.push(3);
      }
      if (this.checkboxes.panorama == true) {
        this.category_wisata.push(5);
      }
      if (this.checkboxes.museum == true) {
        this.category_wisata.push(4);
      }
      if (this.checkboxes.art_gallery == true) {
        this.category_wisata.push(13);
      }
      if (this.checkboxes.monument == true) {
        this.category_wisata.push(17);
      }
      if (this.checkboxes.historical_place == true) {
        this.category_wisata.push(19);
      }
      if (this.checkboxes.tourist_village == true) {
        this.category_wisata.push(8);
      }
      if (this.checkboxes.tourist_park == true) {
        this.category_wisata.push(6);
      }
      if (this.checkboxes.local_tradition == true) {
        this.category_wisata.push(14);
      }
      if (this.checkboxes.worship == true) {
        this.category_wisata.push(15);
      }
      if (this.checkboxes.cafe == true) {
        this.category_wisata.push(9);
      }
      if (this.checkboxes.zoo == true) {
        this.category_wisata.push(10);
      }
      if (this.checkboxes.hiking == true) {
        this.category_wisata.push(11);
      }
      if (this.checkboxes.camping == true) {
        this.category_wisata.push(12);
      }
      if (this.checkboxes.outdoor == true) {
        this.category_wisata.push(18);
      }
      if (this.checkboxes.agrotourism == true) {
        this.category_wisata.push(16);
      }
      this.showLoader();
      //post
      axios
        .post("user/plan/create", {
          category_wisata: this.category_wisata,
          // destination_length: this.destination_length,
          type_transportation: this.type_transportation,
          date_start: this.date_start,
          date_end: this.date_end,
          user_id: this.user_id,
          name_route_travel: this.name_route_travel,
          hours: this.hours,
          gambar: this.gambar,
          lat: this.lat,
          long: this.long
        })
        .then((response) => {
          console.log(response);
          this.hideLoaderSuccess();
          this.$toast.success("Success Make Itenerary", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
        .catch((error) => {
          this.hideLoaderFailed();
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
    hideLoaderSuccess(){
      this.isLoading = false;
//      this.$router.push({ path: '/historyTravel' })
    },
    hideLoaderFailed(){
      this.isLoading = false;
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    getRandomImage(){
      
    },
    updateCoordinates(location) {
      this.lat =location.latLng.lat()
      this.long =location.latLng.lng()
    },
  },
  mounted() {
    axios.get("https://api.unsplash.com/photos/random?client_id=OEakP2kDZwzTdwW_k42VL_Sc7dugAmv8wZpZM0hem1w&query=lake toba")
      .then((response) => {
         this.gambar = response.data.urls.regular
         console.log(this.gambar)
      })
      .catch((error) => {
         console.log(error) 
      })
  }
};
</script>

<style>
.section-inform .container .row .kata {

}
</style>