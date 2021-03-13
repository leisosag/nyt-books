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
    // gets lists results from the API
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
/* Titles: Baskerville: 400, 600
Text: Source Sans Pro: 300, 400, 700 */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@300;400;700&display=swap');
:root {
  --background: #fff;
  --background-grey: #fafafa;
  --primary: #4a47a3;
  --contrast: #00c89a;
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
