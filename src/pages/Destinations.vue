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

      <div class="row mt-5 text-center text-md-left">
        <div class="col-md-4 mt-4">
          <Card style="width: 21rem;">
            <img slot="image" class="card-img-top" :src="'img/bg4.jpg'" alt="Card image cap">
            <div>
              <h6 class="card-category">Hot Spring</h6>
              <h3 class="card-title">Soda Hot Spring</h3>
              <p class="card-text">2 Hari 3 malam<br/>Tarutung</p>
              <router-link class="btn btn-primary"  to="/">Go somewhere</router-link>
            </div>
          </Card>
        </div>
        <div class="col-md-4 mt-4">
          <Card style="width: 21rem;">
            <img slot="image" class="card-img-top" :src="'img/bg4.jpg'" alt="Card image cap">
            <div>
              <h6 class="card-category">Hot Spring</h6>
              <h3 class="card-title">Soda Hot Spring</h3>
              <p class="card-text">2 Hari 3 malam<br/>Tarutung</p>
              <router-link class="btn btn-primary"  to="/">Go somewhere</router-link>
            </div>
          </Card>
        </div>
        <div class="col-md-4 mt-4">
          <Card style="width: 21rem;">
            <img slot="image" class="card-img-top" :src="'img/bg4.jpg'" alt="Card image cap">
            <div>
              <h6 class="card-category">Hot Spring</h6>
              <h3 class="card-title">Soda Hot Spring</h3>
              <p class="card-text">2 Hari 3 malam<br/>Tarutung</p>
              <router-link class="btn btn-primary"  to="/">Go somewhere</router-link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Cards/Card.vue";

export default {
  name: "Destinations",
  components: {
    Card
  }
}
</script>

<style scoped>

</style>