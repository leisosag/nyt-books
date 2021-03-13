<template>
  <div class="lists-container my-5">
    <div class="container">
      <h2>Select a list</h2>
      <div class="grid-container justify-content-center mt-2 mb-5">
        <List v-for="(list, index) in lists" :key="index" :list="list"></List>
      </div>
      <SearchBar @termSubmit="onTermSubmit" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import List from './List.vue';
import SearchBar from './SearchBar.vue';

const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

export default {
  name: 'ListsContainer',
  components: { List, SearchBar },
  data() {
    return {
      books: [],
    };
  },
  props: {
    lists: Array,
  },
  methods: {
    // search by list name
    onTermSubmit(searchTerm) {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${searchTerm}.json?api-key=${API_KEY}`
        )
        .then((response) => (this.books = response.data.results.books));
    },
  },
};
</script>

<style>
.lists-container {
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}
</style>
