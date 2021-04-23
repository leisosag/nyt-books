import axios from 'axios';
const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      categorySelected: {
        isCategorySelected: false,
        categoryName: '',
      },
    };
  },
  mutations: {
    setCategorySelected(state, categoryParams) {
      state.categorySelected.isCategorySelected = true;
      state.categorySelected.categoryName = categoryParams.categoryName;
    },
    setCategories(state, categories) {
      state.categories = categories;
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
  },
  getters: {
    getCategorySelected(state) {
      return state.categorySelected.isCategorySelected;
    },
    getCategoryName(state) {
      return state.categorySelected.categoryName;
    },
    getCategories(state) {
      return state.categories.slice(0, 10);
    },
  },
};
