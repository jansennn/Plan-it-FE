<template>
  <div class="planner">
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
        <h2 class="font-weight-bold">Upcoming Trip (0)</h2>
        <div class="row">
          <div class="col-md-4">
            <card class="rounded" style="width: 20rem">
              <img
                  slot="image"
                  class="card-img-top"
                  :src="'img/bg4.jpg'"
                  alt="Card image cap"
              />
              <div>
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>

    <section class="section-past-trip mt-4">
      <div class="container">
        <h2 class="font-weight-bold">Past Trip (0)</h2>
        <div class="row">
          <div class="col-md-4">
            <card class="rounded" style="width: 20rem">
              <img
                  slot="image"
                  class="card-img-top"
                  :src="'img/bg4.jpg'"
                  alt="Card image cap"
              />
              <div>
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
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
    };
  },
};
</script>

<style>
.section-inform .container .row .kata {
  float-left: ;
}
</style>