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
          <h1 class="title">{{ destinasi.name }}</h1><br>
          <star-rating v-bind:read-only="true" v-bind:star-size="40" :rating="destinasi.rating" :increment="0.5" :inline="true"/>
        </div>
      </div>
    </div>
    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-7">
          <p>
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
            {{ destinasi.address }}
          </p>
          <p>
            Buka : {{ destinasi.opening_hours }}.00 WIB
          </p>
          <p>
            Tutup : {{ destinasi.closed_hours }}.00 WIB
          </p>
          <p class="mt-4" v-if="destinasi.description">
            {{ destinasi.description }}
          </p> 
          <p class="mt-4" v-if="!destinasi.description">
            Pengunjung dapat menentukan pilihan yang lebih nyaman untuk menikmati berwisata di Danau Toba dan Pulau Samosir, yaitu dengan tinggal di Pulau besar Samosir di tengah danau. Disini pengunjung dapat melihat rumah asli masyarakat Batak Toba. Pulau ini memiliki banyak jejak kisah masa lampau yang di dalamnya terdapat kuburan batu dan desa-desa tradisional, seperti di Ambarita yang memiliki halaman dengan furnitur batu di mana di hari tua narapidana diadili dan dipenggal. Atau berkunjung ke Simanindo dimana pengunjung akan menikmati musik dan tarian ritual tradisional Batak. Di sinilah para pengunjung akan dibawa untuk menemukan budaya Toba yang unik dan kuno.

Di Tomok pengunjung dapat menemukan kenang-kenangan dan kerajinan batak, membeli tenunan tangan khas syal merah dan hitam yang disebut ulos yang masih digunakan hingga saat ini, kalender batak dari rotan, ukiran kayu dan lain-lain. Pulau Samosir dapat diakses dengan menggunakan kapal feri reguler dari Parapat. Selain dengan kapal feri tersedia perahu yang berlalu lalang di sekitar pulau secara teratur. Dan jika Anda ingin lebih memahami budaya batak berkunjung ke Museum Batak di Balige, lebih jauh ke selatan di sisi daratan pantai terdapat banyak hotel dan akomodasi yang lebih kecil di sekitar danau terutama di Parapat dan Tuktuk di Pulau Samosir.
          </p>
        </div>
        <div class="col-md-5">
          <GmapMap
            :center="{ lat: 2.574647937733531, lng: 98.84375603456863 }"
            :zoom="8"
            map-type-id="roadmap"
            style="width: 400px; height: 400px"
          >
            <GmapMarker
              :position="{ lat: Number.parseFloat(destinasi.lat), lng: Number.parseFloat(destinasi.long) }"
              :clickable="true"
              :draggable="false"
            />
          </GmapMap>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from 'vue-star-rating'

export default {
  name: "DetailDestination",
  components: {
    StarRating
  },
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