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
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  placeholder="Enter email"
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
                <date-picker v-model="value1" type="date" range></date-picker>
              </b-form-group>
            </div>
            <div class="col-sm-6 mt-4">
              <b-form-group
                id="input-group-1"
                label="Type transportation:"
                label-for="input-1"
              >
                <b-form-select v-model="type_transportation" :options="select_transportation" size="sm">
                 <template #first>
                    <b-form-select-option :value="null" disabled>-- Please select type transportation -</b-form-select-option>
                  </template>
              </b-form-select>
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
            <div class="col-sm-12 mt-4 mb-4">
              <!-- <n-button type="submit info" round block
                ><i class="fa fa-paper-plane"></i>&nbsp;&nbsp; Save</n-button
              > -->
              <b-button block pill variant="info" type="submit"><i class="fa fa-paper-plane"></i>&nbsp;&nbsp; Save</b-button>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "planner",
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    DatePicker
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
      },
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      select_transportation: [
        { value: 'mobil', text: "Mobil" },
        { value: 'sepeda_motor', text: "Sepeda Motor" },
      ],
      type_transportation: '',
      category_wisata: [],
      destination_length: null,
    };
  },
  methods: {
    submit(){
      this.category_wisata = [];

      if(this.checkboxes.beach == true){
        this.category_wisata.push(1);
      }if(this.checkboxes.waterfall == true){
        this.category_wisata.push(2);
      }if(this.checkboxes.museum == true){
        this.category_wisata.push(3);
      }if(this.checkboxes.mount == true){
        this.category_wisata.push(4);
      }if(this.checkboxes.panorama == true){
        this.category_wisata.push(5);
      }if(this.checkboxes.taman_wisata == true){
        this.category_wisata.push(6);
      }
      
      //post 
      axios.post("user/testInisiasi", {
         category_wisata: this.category_wisata,
         destination_length: this.destination_length,
         type_transportation: this.type_transportation 
      }).then( function(response){
        // this.$toast.success("Success Make Itenerary", {
        //   type: "success",
        //   position: "top-right",
        //   duration: 3000,
        //   dismissible: true,
        // });
        console.log(response);
      });
    }
  }
};
</script>

<style>
.section-inform .container .row .kata {
  float-left: ;
}
</style>