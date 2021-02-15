<template>
  <div class="page-header clear-filter" filter-color="blue">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/logo-home.png'" alt="" />
            </div>

            <form @submit.prevent="submit">
              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_email-85"
                placeholder="Email..."
                v-model="form.email"
              >
              </fg-input>

              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons text_caps-small"
                placeholder="Password..."
                v-model="form.password"
              >
              </fg-input>

              <div class="card-footer text-center">
                <button
                  type="submit"
                  class="btn btn-info btn-round btn-lg btn-block"
                >
                  Login
                </button>
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#/register" class="link footer-link"
                    >don't have an account ?</a
                  >
                </h6>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
import axios from 'axios';
import { mapActions} from 'vuex';

export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data () {
    return {
      form: {
        email : '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit() {
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: 'home'
        })
      }).catch(() => {
        console.log("failed");
      })
    },
  },
};
</script>
<style></style>
