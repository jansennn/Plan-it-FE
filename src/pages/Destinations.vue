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
        v-model="search"
        placeholder="Search Destinasi"
        addon-right-icon="now-ui-icons ui-1_zoom-bold"
        @keyup="searchDestination">
      </fg-input>
    </div>
    <div class="container">
      <div v-if="cekNull">
        <b-alert show variant="info">
          <h4 class="alert-heading">Yahhh !</h4>
          <p>there is no destination you are looking for :(.</p>
          
        </b-alert>
      </div>
      <div class="row mt-4 mt-md-5">
        <div class="col col-md-12">
          <div class="row mt-3 mt-md-0 text-center text-md-left">
            <div class="col-md-4 mt-2" v-for="destination in destinations" :key="destination.id">
              <Card style="width: 20rem;height:30rem" class="ml-1 mr-1">
                <b-card-img
                  slot="image" class="card-img-top" :src="destination.image"
                  style="height:15rem"
                  alt="Image"
                ></b-card-img>
                <div>
                  <h3 class="card-title">{{ destination.name }}</h3>
                  <p class="card-text">{{ destination.opening_hours }}.00 - {{ destination.closed_hours }}.00 WIB</p>
                  <star-rating  v-bind:read-only="true" v-bind:star-size="20" :rating="destination.rating" :increment="0.5"/>
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
import StarRating from 'vue-star-rating'

export default {
  name: "Destinations",
  components: {
    Card,
    [FormGroupInput.name]: FormGroupInput,
    StarRating
  },
  data() {
    return {
      destinations: [],
      search: '',
      cekNull: false
    }
  },
  methods: {
    setDestination(data) {
      this.destinations = data;
    },
    searchDestination(){
      axios.get('user/search_destination/' + this.search)
      .then((response) => {
        if(response.data.length === 0){
          this.cekNull = true
        }
        if(response.data.length != 0){
          this.cekNull = false
        }
        this.setDestination(response.data)
      })
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

