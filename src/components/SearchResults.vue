<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div v-if="Object.keys(book).length > 0">
          <BookDetails :book="book" />
        </div>
        <div v-if="Object.keys(book).length === 0">
          <OtherBooks
            :books="books"
            :searchTerm="searchTerm"
            :listSelected="listSelected"
          />
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
  props: {
    book: Object,
    books: Array,
    searchTerm: String,
    listSelected: String,
  },
};
</script>

<style></style>
