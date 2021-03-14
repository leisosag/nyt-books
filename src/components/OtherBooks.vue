<template>
  <div class="container">
    <h4>
      Sorry! We couldn't find {{ searchTerm }} on the {{ listSelected }} list
    </h4>
    <h4>
      Here's some other books from that list that you might be interested in
    </h4>
    <div class="grid-container my-3">
      <BookCard v-for="(book, index) in books" :key="index" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from './BookCard.vue';
export default {
  name: 'OtherBooks',
  components: { BookCard },
  props: {
    books: Array,
    searchTerm: String,
    listSelected: String,
  },
};
</script>
