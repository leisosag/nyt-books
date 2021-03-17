<template>
  <div class="container">
    <div
      class="row d-flex flex-column justify-content-center align-items-center"
    >
      <cube-spin></cube-spin>
      <p class="pt-3">Loading...</p>
    </div>
  </div>
</template>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/CubeShadow';
export default {
  name: 'Spinner',
  components: {
    CubeSpin,
  },
};
</script>
