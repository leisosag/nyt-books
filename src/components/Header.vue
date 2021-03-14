<template>
  <div class="container pt-3">
    <div
      class="row m-3 d-flex flex-column align-items-center justify-content-center"
    >
      <img src="../assets/logo.png" alt="logo" />
      <h1 class="pt-3">The New York Times Best Sellers</h1>
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
  font-family: 'Shippori Mincho B1', serif;
  font-size: 1.5rem;
}
img {
  width: 250px;
  height: auto;
}
</style>
