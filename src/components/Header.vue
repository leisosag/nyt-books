<template>
  <div class="container pt-3">
    <div
      class="row m-3 d-flex flex-column align-items-center justify-content-center"
    >
      <img src="../assets/logo.png" alt="logo" />
      <h1 class="pt-3 text-center">The New York Times Best Sellers</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 600;
}
img {
  width: 150px;
  height: auto;
}
</style>
