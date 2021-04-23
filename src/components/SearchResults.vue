<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <BookDetails v-if="Object.keys(book).length > 0" :book="book" />
        <OtherBooks
          v-if="Object.keys(book).length === 0"
          :searchTerm="searchTerm"
          :categorySelected="categorySelected"
          :someBooks="someBooks"
          @bookCardSelected="bookCardSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookDetails from './BookDetails.vue';
import OtherBooks from './OtherBooks.vue';

export default {
  name: 'SearchResults',
  components: { BookDetails, OtherBooks },
  props: {
    book: {
      type: Object,
      required: true,
    },
    someBooks: {
      type: Array,
    },
    searchTerm: {
      type: String,
    },
    categorySelected: {
      type: Object,
    },
  },
  methods: {
    bookCardSelected(title) {
      this.$emit('bookCardSelected', title);
    },
  },
};
</script>
