<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
          class="page-header-image"
          style="background-image: url('img/bg_destination.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Destinations</h1>
        </div>
      </div>
    </div>
    <div class=" container col col-md-6 mt-4">
      <fg-input class="col-12"
                placeholder="Search Destinasi"
                addon-right-icon="now-ui-icons ui-1_zoom-bold">
      </fg-input>
    </div>
    <div class="container">
      <div class="row mt-4 mt-md-5">
        <div class="col col-md-12">
          <div class="row mt-3 mt-md-0 text-center text-md-left">
            <div class="col-md-4 mt-2" v-for="destination in destinations" :key="destination.id">
              <Card style="width: 20rem;" class="ml-1 mr-1">
                <img slot="image" class="card-img-top" :src=destination.image alt="Card image cap">
                <div>
                  <h6 class="card-category">{{ destination.kategori }}</h6>
                  <h3 class="card-title">{{ destination.name }}</h3>
                  <p class="card-text">{{ destination.durasi }}<br/>{{ destination.kabupaten }}</p>
                  <router-link class="btn btn-info" :to="'/detailDestination/'+destination.id"><i class="fa fa-paper-plane-o"></i> Open</router-link>
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
import { FormGroupInput } from '@/components';
import axios from "axios";

export default {
  name: "Destinations",
  components: {
    Card,
    [FormGroupInput.name]: FormGroupInput,
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
    axios.get('user/destinasis')
        .then((response) => {
          this.setDestination(response.data);
          console.log(response)
        })
        .catch((error) => console.log(error))
  }
}
</script>

