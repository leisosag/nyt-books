<template>
  <div id="app">
    <Header />
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div v-else>
      <ListsContainer :lists="lists" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import ListsContainer from './components/ListsContainer.vue';
import Spinner from './components/Spinner.vue';
const API_KEY = 'hDbHV2PLk0RpGABiH2YmctongMla01dX';

export default {
  name: 'App',
  components: { Header, ListsContainer, Spinner },
  data() {
    return {
      lists: [],
      isLoading: true,
    };
  },
  methods: {
    // gets the list's names from the API
    onLoad() {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
        )
        .then((response) => {
          this.lists = response.data.results.slice(0, 10);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.onLoad();
  },
};
</script>

<style>
/* Titles: font-family: 'Shippori Mincho B1', serif; 500
Text: font-family: 'Source Sans Pro', sans-serif;  400, 600 */
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500&family=Source+Sans+Pro:wght@400;600&display=swap');
:root {
  --background: #fff;
  --background-grey: #f0f0f0;
  --primary: #4a47a3;
  --black: #393746;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: var(--background);
  color: var(--black);
}
#app {
  width: 100vw;
}
</style>
