<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header-home.jpg');filter:brightness(70%)"
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
    
    
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    SignupForm,
    ExamplesSection,
    DownloadSection
  }
};
</script>
<style></style>
