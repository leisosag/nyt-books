<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <p>
          Sorry! We couldn't find <span>{{ searchTerm }}</span> on the
          <span>{{ categorySelected }}</span> category
        </p>
        <h3 class="pt-3">
          Some other books on <span>{{ categorySelected }}</span>
        </h3>
        <div class="grid-container my-3">
          <BookCard
            v-for="(book, index) in someBooks"
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
import BookCard from './BookCard.vue';

export default {
  name: 'OtherBooks',
  components: { BookCard },
  props: {
    someBooks: Array,
    searchTerm: String,
    categorySelected: String,
  },
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
