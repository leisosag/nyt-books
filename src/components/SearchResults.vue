<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div v-if="Object.keys(book).length > 0">
          <BookDetails :book="book" />
        </div>
        <div v-if="Object.keys(book).length === 0">
          <OtherBooks :books="books" />
        </div>
        <div v-if="isBookSelected">
          <BookDetails :book="selectedBook" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtherBooks from './OtherBooks.vue';
import BookDetails from './BookDetails.vue';

export default {
  name: 'SearchResults',
  components: { OtherBooks, BookDetails },
  data() {
    return {
      isBookSelected: false,
      selectedBook: {},
    };
  },
  props: {
    book: Object,
    books: Array,
  },
  methods: {
    onBookSelect(book) {
      this.isBookSelected = true;
      this.selectedBook = book;
    },
  },
};
</script>

<style></style>
