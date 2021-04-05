<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">
              Plan It
            </a>
          </li>
          
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}
        Coded by
        <a href="https://binarcode.com" target="_blank" rel="noopener"
          >Duo Tampubolon.</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
