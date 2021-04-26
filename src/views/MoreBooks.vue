<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2 class="pt-3">
          More Books on
          <span>{{ categorySelected.categoryName }}</span>
        </h2>
        <div class="grid-container my-3">
          <BookCard
            v-for="(book, index) in books"
            :key="index"
            :book="book"
            @bookCardSelected="bookCardSelected"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue';

export default {
  props: {
    books: {
      type: Array,
    },
    categorySelected: {
      type: Object,
    },
  },
  components: { BookCard },
  methods: {
    bookCardSelected(title) {
      this.$emit('bookCardSelected', title);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.5rem;
}
span {
  color: var(--primary);
  font-weight: 600;
}
</style>
