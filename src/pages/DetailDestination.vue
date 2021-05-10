<template>
  <div class="detail-destination">
    <div class="page-header page-header-small mb-4">
      <parallax
        class="page-header-image"
        :style="{ 'background-image': 'url('+destinasi.image+')'}"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ destinasi.name }}</h1>
        </div>
      </div>
    </div>
    <div class="container mt-4 mb-4">
      <p>
        <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
        {{ destinasi.address }}
      </p>
      <p class="mt-4">
        {{ destinasi.deskripsi }}
      </p>

      <GmapMap
        :center="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
        :zoom="9"
        map-type-id="roadmap"
        style="width: 1000px; height: 500px"
      >
        <GmapMarker
          :position="{ lat: destinasi.lat, lng: destinasi.long }"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailDestination",
  components: {},
  data() {
    return {
      destinasi: {},
    };
  },
  methods: {
    setDestinasi(data) {
      this.destinasi = data;
      console.log(data);
    },
  },
  mounted() {
    axios
      .get("user/destinasi/" + this.$route.params.id)
      .then((response) => this.setDestinasi(response.data))
      .catch(function (error) {
        // handle error
        console.log("Gagal : ", error);
      });
  },
};
</script>

<style>
</style>