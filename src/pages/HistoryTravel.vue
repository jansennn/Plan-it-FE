<template>
  <div class="history_travel">
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
        <h1 class="h1-seo">My History Travel</h1>
      </div>
    </div>

    <section class="section-upcoming-trip mt-4">
      <div class="container">
        <h2 class="font-weight-bold">Upcoming Trip ({{ upcoming_rute_perjalanan.length }})</h2>
        <div class="row">
          <div class="col-md-4" v-for="item in upcoming_rute_perjalanan" :key="item.id">
            <card class="rounded" style="width: 20rem">
              <img
                  slot="image"
                  class="card-img-top"
                  :src="'img/bg4.jpg'"
                  alt="Card image cap"
              />
              <div>
                <h4 class="card-title">{{ item.name }}</h4>
                <p class="card-text">
                  {{ item.tanggal_awal }} - {{ item.tanggal_akhir }}
                </p>
              </div>
              <router-link class="btn btn-info" :to="'/timeline/'+item.id">Cek <i class="fa fa-arrow-right"></i></router-link>
            </card>
          </div>
        </div>
      </div>
    </section>

    <section class="section-past-trip mt-4">
      <div class="container">
        <h2 class="font-weight-bold">Past Trip ({{ past_rute_perjalanan.length }})</h2>
        <div class="row">
          <div class="col-md-4" v-for="item in past_rute_perjalanan" :key="item.id">
            <card class="rounded" style="width: 20rem">
              <img
                  slot="image"
                  class="card-img-top"
                  :src="'img/bg4.jpg'"
                  alt="Card image cap"
              />
              <div>
                <h4 class="card-title">{{ item.name }}</h4>
                <p class="card-text">
                  {{ item.tanggal_awal }} - {{ item.tanggal_akhir }}
                </p>
              </div>
              <router-link class="btn btn-info" :to="'/timeline/'+item.id">Cek <i class="fa fa-arrow-right"></i></router-link>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Parallax } from "@/components";
import { FormGroupInput, Checkbox, Button } from "@/components";
import Card from "@/components/Cards/Card.vue";
import axios from "axios";

export default {
  name: "planner",
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    Card,
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true,
      },
      upcoming_rute_perjalanan: [],
      past_rute_perjalanan: []
    };
  },
  methods: {
    setUpcomingRutePerjalanan($data){
      this.upcoming_rute_perjalanan = $data;
    },
    setPastRutePerjalanan($data){
      this.past_rute_perjalanan = $data;
    }
  },
  mounted(){
    axios.get('user/rute_perjalanan_upcoming/'+1)
      .then((response) => {
        this.setUpcomingRutePerjalanan(response.data);
          console.log(response)
      })
      .catch((error) => console.log(error));
    
    axios.get('user/rute_perjalanan_past/'+1)
      .then((response) => {
        this.setPastRutePerjalanan(response.data);
      })
      .catch((error) =>console.log(error))
  }
};
</script>

<style>
.section-inform .container .row .kata {
  float-left: ;
}
</style>