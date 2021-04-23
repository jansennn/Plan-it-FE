<template>
  <div class="section section-basic">
    <div class="container">
      <h2 class="text-left title">Trending</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="item in trending"
          :key="item.id"
        >
          <card class="rounded col-xs-3" >
            <img
              slot="image"
              class="card-img-top"
              :src="'img/bg4.jpg'"
              alt="Card image cap"
            />
            <div>
              <h4 class="card-title font-weight-bold">{{ item.name }}</h4>
              <p class="card-text">
                By {{ item.user.firstname }}
              </p>
              <p class="card-text">
                {{ item.tanggal_awal }} - {{ item.tanggal_akhir }}
              </p>
            </div>
            <router-link class="btn btn-info" :to="'/timeline/' + item.id"
              >Cek <i class="fa fa-arrow-right"></i
            ></router-link>
          </card>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Cards/Card.vue";


export default {
  name: "trending",
  props: ["trending"],
  components: {
    Card
  },
  
};
</script>

<style>
</style>