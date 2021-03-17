<template>
  <div id="app">
    <Header />
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div v-else>
      <Categories
        :categories="categories"
        @selectedCategory="onCategorySelected"
      />
      <SearchBar
        v-if="isCategorySelected"
        @searchTerm="filterBooks"
        :categorySelected="categorySelected"
      />
      <SearchResults
        v-if="isSearchCompleted"
        :book="book"
        :searchTerm="searchTerm"
        :categorySelected="categorySelected"
        :someBooks="someBooks"
        @bookCardSelected="bookCardSelected"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Spinner from './components/Spinner.vue';
import Categories from './components/Categories.vue';
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

export default {
  name: 'App',
  components: { Header, Spinner, Categories, SearchBar, SearchResults },
  data() {
    return {
      isLoading: true,
      isCategorySelected: false,
      isSearchCompleted: false,
      categories: [],
      books: [],
      categorySelected: '',
      searchTerm: '',
      book: {},
      someBooks: [],
    };
  },
  methods: {
    // gets categories from the API
    onLoad() {
      try {
        axios
          .get(
            `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
          )
          .then((response) => {
            this.categories = response.data.results.slice(0, 10);
            this.isLoading = false;
          });
      } catch (error) {
        console.error(error);
      }
    },
    // gets books from the API
    onCategorySelected(categorySearch, categoryName) {
      this.categorySelected = categoryName;
      this.isCategorySelected = true;
      this.isSearchCompleted = false;

      try {
        axios
          .get(
            `https://api.nytimes.com/svc/books/v3/lists/current/${categorySearch}.json?api-key=${API_KEY}`
          )
          .then((response) => (this.books = response.data.results.books));
      } catch (error) {
        console.error(error);
      }
    },
    // filter books by title or author
    filterBooks(searchTerm) {
      this.searchTerm = searchTerm;
      const book = this.books.find(
        (book) =>
          book.title === searchTerm.toUpperCase() ||
          book.author.toLowerCase() === searchTerm.toLowerCase()
      );
      if (book) {
        this.book = book;
      } else {
        this.book = {};
        this.someBooks = this.books.slice(0, 4);
      }
      this.isSearchCompleted = true;
    },
    // when the user clicks on a recommended book, queries the search with that title
    bookCardSelected(title) {
      this.filterBooks(title);
    },
  },
  created() {
    this.onLoad();
  },
};
</script>

<style>
/* Text: font-family: 'Source Sans Pro', sans-serif;  400, 600 */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
:root {
  --background-white: #fff;
  --background-grey: #f5f5f5;
  --primary: #42b883;
  --primary-hover: #358d65;
  --black: #35495e;
  --black-transparent: rgba(53, 73, 94, 0.5);
  --shadows: rgba(57, 55, 70, 0.2);
  --shadows-primary: rgba(19, 68, 63, 0.2);
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: var(--background-grey);
  color: var(--black);
}
#app {
  width: 100vw;
}
.btn-color {
  background-color: var(--primary);
  color: var(--white);
  transition: 0.5s all;
  border-radius: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
}
.btn-color:hover {
  background-color: var(--primary-hover);
  color: var(--white);
}
</style>
