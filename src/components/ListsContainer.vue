<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2>Categories</h2>
        <div class="grid-container my-3">
          <List
            v-for="(list, index) in lists"
            :key="index"
            :list="list"
            @selectedList="onListSelected"
          ></List>
        </div>
        <h3 class="pt-3" v-if="isListSelected">
          Searching on: {{ showSelectedList }}
        </h3>
        <SearchBar v-if="isListSelected" @termSubmit="onTermSubmit" />
        <SearchResults v-if="isSearchCompleted" :book="book" :books="books" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import List from './List.vue';
import SearchBar from './SearchBar.vue';
import SearchResults from './SearchResults.vue';
const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

export default {
  name: 'ListsContainer',
  components: { List, SearchBar, SearchResults },
  data() {
    return {
      isListSelected: false,
      isSearchCompleted: false,
      books: [],
      book: {},
      listSelected: '',
    };
  },
  props: {
    lists: Array,
  },
  computed: {
    showSelectedList() {
      return this.listSelected;
    },
  },
  methods: {
    // gets the selected list's books from the API
    onListSelected(listName) {
      this.isListSelected = true;
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${API_KEY}`
        )
        .then((response) => (this.books = response.data.results.books));

      // formats the selected list's name
      const stringArr = listName.split('-');
      this.listSelected = stringArr.join(' ');
    },
    // filter books by title or author
    onTermSubmit(searchTerm) {
      this.isSearchCompleted = true;
      const book = this.books.find(
        (book) =>
          book.title === searchTerm.toUpperCase() ||
          book.author.toLowerCase() === searchTerm.toLowerCase()
      );
      book ? (this.book = book) : (this.book = {});
    },
  },
};
</script>

<style>
h2 {
  font-weight: 600;
}
.lists-container {
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.5rem;
}
</style>
