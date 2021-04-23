import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    categorySelected: {
      isCategorySelected: false,
      categoryName: '',
    },
    categories: [],
    books: [],
    someBooks: [],
    book: {},
  },
  getters: {
    getLoadingState(state) {
      return state.isLoading;
    },
    getCategorySelected(state) {
      return state.categorySelected;
    },
    getCategories(state) {
      return state.categories.slice(0, 10);
    },
    getBooks(state) {
      return state.books;
    },
    getSomeBooks(state) {
      return state.books.slice(0, 6);
    },
    getBookDetails(state) {
      return state.book;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
        )
        .then((response) => {
          commit('setCategories', response.data.results);
          commit('setLoadingState');
        });
    },
    fetchBooks({ commit }, categoryParams) {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${categoryParams.categorySearch}.json?api-key=${API_KEY}`
        )
        .then((response) => {
          commit('setBooks', response.data.results.books);
          commit('setCategorySelected', categoryParams);
        });
    },
    fetchsomeBooks({ state, commit }) {
      commit('setSomeBooks', state.books);
    },
    fetchBookDetails({ state, commit }, searchTerm) {
      const book = state.books.find(
        (book) =>
          book.title === searchTerm.toUpperCase() ||
          book.author.toLowerCase() === searchTerm.toLowerCase()
      );
      if (book) {
        commit('setBookDetails', book);
      } else {
        commit('setBookDetails', {});
        commit('setSomeBooks', state.books);
      }
    },
  },
  mutations: {
    setLoadingState(state) {
      state.isLoading = !state.isLoading;
    },
    setCategorySelected(state, categoryParams) {
      state.categorySelected.isCategorySelected = true;
      state.categorySelected.categoryName = categoryParams.categoryName;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setBooks(state, books) {
      state.books = books;
    },
    setSomeBooks(state, books) {
      state.someBooks = books;
    },
    setBookDetails(state, book) {
      state.book = book;
    },
  },
});
