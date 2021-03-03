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
            <p class="float-left">In Your Apps <br>A complete day by day itinerary based on your preferences <br>
              Refine your trip. We'll find the best routes and schedules <br> Everything in one place.Everyone on the same page.</p>
          </div>
          <div class="col">
            <img src="ilustrator/destinations_2.png" alt="" class="image-destination">
          </div>
        </div>
      </div>
    </section>

    <section class="mt-4 mb-4">
      <div class="container mt-4">
        <h2 class="h2-seo text-center">Set Your Preferences</h2>
        <div class="row">
          <div class="col-sm-6 mt-4">
            <fg-input class="no-border" placeholder="When do you travel"></fg-input>
          </div>
          <div class="col-sm-6 mt-4">
            <fg-input class="no-border" placeholder="What time do you travel"></fg-input>
          </div>
          <div class="col-sm-6 mt-4">
            <fg-input class="no-border" placeholder="How many tourist attractions you want to visit"></fg-input>
          </div>
          <div class="col-sm-6 mt-4">
            <fg-input class="no-border" placeholder="How many hours you want to spend on the trip"></fg-input>
          </div>
          <div class="col-sm-12 mt-4">
            <fg-input class="no-border" placeholder="Select the starting location of the trip"></fg-input>
          </div>
          <div class="col-sm-12 mt-4">
            <p class="category">Select the type of tourist spot</p>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Beach</n-checkbox>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Waterfall</n-checkbox>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Museum</n-checkbox>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Mount</n-checkbox>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Panorama</n-checkbox>
          </div>
          <div class="col-sm-6">
            <n-checkbox v-model="checkboxes.checked">Taman Wisata</n-checkbox>
          </div>
          <div class="col-sm-12 mt-4 mb-4">
            <n-button type="info" round block><i class="fa fa-paper-plane"></i>&nbsp;&nbsp; Save</n-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Parallax } from "@/components";
import { FormGroupInput, Checkbox, Button } from "@/components";
export default {
  name: "planner",
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true
      },
    }
  }
};
</script>

<style>
.section-inform .container .row .kata{
  float-left: ;
}
</style>