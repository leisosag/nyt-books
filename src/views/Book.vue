<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2 class="pb-3">Book info</h2>
        <p>{{ book.title }}</p>
        <p>{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
    },
  },
};
</script>
