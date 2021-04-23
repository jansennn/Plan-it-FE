<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
          class="page-header-image"
          style="background-image:url('img/header-home.jpg');filter:brightness(50%)"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/logo-home.png" alt="" />
          <h1 class="h1-seo">Plan It.</h1>
          <h3>Make Your Itenarary.</h3>
        </div>
        <h6 class="category category-absolute">
          Designed by TA-03-2021
          . Coded by
          Duo Tampubolon.
        </h6>
      </div>
    </div>

    <TrendingRutePerjalanan :trending="trending"/>
    <planner-benefit></planner-benefit>

  </div>
</template>
<script>
import { Parallax } from '@/components';
import PlannerBenefit from './components/Home/PlannerBenefit';
import TrendingRutePerjalanan from './components/Home/TrendingRutePerjalanan';
import axios from "axios";

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    PlannerBenefit,
    TrendingRutePerjalanan
  },
  data(){
    return {
      trending: null
    }
  },
  methods: {
    setTrending($data){
      this.trending = $data
      console.log(this.trending);
    }
  },
  mounted(){
    axios.get('user/rute_perjalanan/trending')
    .then((response) => {
      this.setTrending(response.data)
    })
    .catch((error) => {

    })
  }
};
</script>
<style></style>
