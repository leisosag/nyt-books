<template>
  <div class="container">
    <div class="row justify-content-center">
      <cube-spin></cube-spin>
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
