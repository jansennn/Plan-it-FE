<template>
  <div class="timeline">
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
        <h1>{{ timeline.name }}</h1>
        <h3 class="h1-seo">{{timeline.deskripsi}}</h3>
      </div>
    </div>

    
    <div class="container mt-4" >
      <div v-for="item2 in timeline.day" :key="item2.id">
        <b-button pill variant="info" class="mb-4">Day : {{ item2.day }}</b-button>
        <div v-for="item3 in item2.rute" :key="item3.id">
          <b-card
            no-body
            class="overflow-hidden"
            style="max-width: 100%; height: 250px"
          >
            <b-row no-gutters>
              <b-col md="2" sm="2">
                <b-card-body>
                  <b-card-text> 10.00 - 17.00 </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="4" sm="4">
                <b-card-img
                  :src="item3.destinasi.image"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6" sm="6">
                <b-card-body :title="item3.destinasi.name">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Timeline",
  components: {
    
  },
  data() {
    return {
      timeline: []
    };
  },
  methods: {
    setTimeline($data) {
      this.timeline = $data;
    }
  },
  mounted() {
    axios
      .get("user/history_rute_perjalanan/"+ this.$route.params.id)
      .then((response) => {
        this.setTimeline(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  
  },
};
</script>

<style>
</style>