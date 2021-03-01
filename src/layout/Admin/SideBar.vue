<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">Admin</div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action bg-light"
        >Management Destinasi</a
      >
      <a href="#" class="list-group-item list-group-item-action bg-light"
        >Management Crossover rate</a
      >
      <a href="#" class="list-group-item list-group-item-action bg-light"
        >Management Mutation rate</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
  margin-bottom: 50px;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}
</style>