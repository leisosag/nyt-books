<template>
  <div id="home">
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
      <!--<SearchResults
        v-if="isSearchCompleted"
        :book="book"
        :searchTerm="searchTerm"
        :categorySelected="categorySelected"
        :someBooks="someBooks"
        @bookCardSelected="bookCardSelected"
      />-->
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Spinner from '../components/Spinner.vue';
import Categories from '../components/Categories.vue';
import SearchBar from '../components/SearchBar.vue';
//import SearchResults from '../components/SearchResults.vue';

// vuex store
//import store from './store';

export default {
  name: 'Home',
  components: { Header, Spinner, Categories, SearchBar },
  data() {
    return {
      isSearchComplete: false,
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
      this.isSearchComplete = false;
      this.$store.dispatch('fetchBooks', categoryParams);
    },
    // filter books by title or author
    filterBooks(searchTerm) {
      this.searchTerm = searchTerm;
      this.$store
        .dispatch('fetchBookDetails', searchTerm)
        .then((this.isSearchComplete = true));
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
#home {
  width: 100vw;
}
</style>
