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
        <h1 class="h1-seo">3 days in Balige</h1>
      </div>
    </div>

    <div class="container mt-4">
      <b-card no-body class="overflow-hidden" style="max-width: 100%; height: 300px">
        <b-row no-gutters>
          <b-col md="2" sm="2">
            <b-card-body>
              <b-card-text>
                10.00 - 17.00
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="4" sm="4">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6" sm="6">
            <b-card-body title="Lumban Bulbul">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>