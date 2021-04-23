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
        v-if="categorySelected.isCategorySelected"
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
import Header from './components/Header.vue';
import Spinner from './components/Spinner.vue';
import Categories from './components/Categories.vue';
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';

// vuex store
//import store from './store';

export default {
  name: 'App',
  components: { Header, Spinner, Categories, SearchBar, SearchResults },
  data() {
    return {
      isSearchCompleted: false,
      searchTerm: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingState;
    },
    categorySelected() {
      return this.$store.getters.getCategorySelected;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    books() {
      return this.$store.getters.getBooks;
    },
    book() {
      return this.$store.getters.getBookDetails;
    },
    someBooks() {
      return this.$store.getters.getSomeBooks;
    },
  },
  methods: {
    // gets books from the API
    onCategorySelected(categorySearch, categoryName) {
      const categoryParams = {
        categoryName,
        categorySearch,
      };
      this.isSearchCompleted = false;
      this.$store.dispatch('fetchBooks', categoryParams);
    },
    // filter books by title or author
    filterBooks(searchTerm) {
      this.searchTerm = searchTerm;
      this.$store
        .dispatch('fetchBookDetails', searchTerm)
        .then((this.isSearchCompleted = true));
    },
    // when the user clicks on a recommended book, queries the search with that title
    bookCardSelected(title) {
      this.filterBooks(title);
    },
  },
  // gets categories from the API
  created() {
    this.$store.dispatch('fetchCategories');
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
