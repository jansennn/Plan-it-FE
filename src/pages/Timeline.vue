<template>
  <div class="timeline">
    <div
      class="page-header clear-filter"
      style="min-height: 400px; max-height: 600px"
    >
      <parallax
        class="page-header-image"
        :style="{ 'background-image': 'url('+timeline.gambar+')'}"
      ></parallax>

      <div class="container mt-5">
        <div class="content-center brand"></div>
        <h1>{{ timeline.name }}</h1>
        <h3 class="h1-seo">{{ timeline.deskripsi }}</h3>
        
        <b-button pill variant="info" class="mr-3" v-if="(id_user == timeline.user_id)&&(timeline.status==0)&&(timeline.budget==' - ')" v-b-modal.modal-prevent-closing>
          Budget (Rp)</b-button
        >
        <b-button pill variant="danger" v-if="id_user == timeline.user_id" v-on:click="deleteRutePerjalanan">
          <i class="fa fa-trash"></i> Delete</b-button
        >
      </div>
    </div>

    <div class="container mt-4">
      <div v-for="item2 in timeline.day" :key="item2.id">
        <b-button pill variant="info" class="mb-4"
          >Day : {{ item2.day }}</b-button
        >
        <div v-for="item3 in item2.rute" :key="item3.id">
          <b-card
            no-body
            class="overflow-hidden"
            style="max-width: 100%; height: 250px"
          >
            <b-row no-gutters>
              <b-col md="2" sm="2" xs="2">
                <b-card-body>
                  <b-card-text> {{ item3.jam_mulai }} - {{ item3.jam_selesai }} </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="4" sm="4" xs="4">
                <b-card-img
                  :src="item3.destinasi.image"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6" sm="6" xs="6">
                <b-card-body :title="item3.destinasi.name">
                  <star-rating v-bind:read-only="true" v-bind:star-size="15" :rating="item3.destinasi.rating" :increment="0.5" :inline="true"/>
                  <b-card-text>
                    let's take a trip to this tourist spot, and enjoy the feeling you've never felt.
                  </b-card-text>
                  <router-link class="btn btn-info" :to="'/detailDestination/'+item3.destinasi.id"> Open Destination <i class="fas fa-arrow-right"></i></router-link>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Budget for this itenerary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Budget"
          label-for="budget-input"
          invalid-feedback="Budget is required"
          :state="nameState"
        >
          <b-input-group size="lg" prepend="Rp" append=".00">
            <b-form-input
              id="budget-input"
              v-model="budget"
              type="number"
              :state="nameState"
              required
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from 'vue-star-rating'

export default {
  name: "Timeline",
  components: {
    StarRating
  },
  data() {
    return {
      timeline: [],
      budget: "",
      id_user: null
    };
  },
  methods: {
    setTimeline($data) {
      this.timeline = $data;
    },
    setBudget() {
      axios
        .post("user/rute_perjalanan/input_budget/" + this.$route.params.id, {
          budget: this.budget,
        })
        .then((response) => {
          this.$toast.success("Success Add Budget", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          this.$nextTick(() => {
            this.$bvModal.hide("modal-prevent-closing");
          });
        });
    },
    deleteRutePerjalanan() {
      axios
      .delete("user/rute_perjalanan/" + this.$route.params.id)
      .then((response) => {
        this.$toast.info("Success Delete Travel Route", {
            type: "info",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        this.$router.push({ path: '/historyTravel' })  
      })
    },
    resetModal() {
      this.budget = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.setBudget();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
  mounted() {
    axios
      .get("user/history_rute_perjalanan/" + this.$route.params.id)
      .then((response) => {
        this.setTimeline(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    this.id_user = localStorage.getItem("id_user");  
  },
};
</script>

<style>
</style>