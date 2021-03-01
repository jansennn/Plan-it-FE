<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
          class="page-header-image"
          style="background-image: url('img/bg9.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Destinations</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4 mt-md-5">
        <div class="col col-md-3">
          <div class="row justify-content-center">
            <div class="col-10 col-md">
              <Dropdown>
                <n-button slot="title" type="primary"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          block round>
                  Kabupaten
                </n-button>
                <h6 class="dropdown-header">Kabupaten</h6>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </Dropdown>
              <Dropdown class="mt-4">
                <n-button slot="title" type="info"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          block round>
                  Kategori
                </n-button>
                <h6 class="dropdown-header">Kategori</h6>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div class="col col-md-9">
          <div class="row mt-3 mt-md-0 text-center text-md-left">
            <div class="col-md-6 mt-2" v-for="destination in destinations" :key="destination.id">
              <Card style="width: 25rem;">
                <img slot="image" class="card-img-top" :src="'img/bg4.jpg'" alt="Card image cap">
                <div>
                  <h6 class="card-category">{{ destination.kategori }}</h6>
                  <h3 class="card-title">{{ destination.judul }}</h3>
                  <p class="card-text">{{ destination.durasi }}<br/>{{ destination.kabupaten }}</p>
                  <router-link class="btn btn-primary" to="/">Go somewhere</router-link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Cards/Card.vue";
import axios from "axios";
import Dropdown from "@/components/Dropdown";
import NButton from "@/components/Button";

export default {
  name: "Destinations",
  components: {
    NButton,
    Card,
    Dropdown
  },
  data() {
    return {
      destinations: []
    }
  },
  methods: {
    setDestination(data) {
      this.destinations = data;
    }
  },
  mounted() {
    axios.get('http://localhost:3000/destinations')
        .then((response) => {
          this.setDestination(response.data);
          console.log(response)
        })
        .catch((error) => console.log(error))
  }
}
</script>

