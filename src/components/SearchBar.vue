<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <p>
          Category selected: <span>{{ categorySelected }}</span>
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <form @submit.prevent="onInput" class="form-inline">
        <label for="searchInput" class="sr-only">Search books</label>
        <input
          type="text"
          onfocus="this.value=''"
          class="form-control mr-2"
          id="searchInput"
          placeholder="Search books by title or author"
        />
        <button type="submit" class="btn btn-color my-2 my-sm-0">
          <i class="fas fa-search pr-2"></i>Search
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    categorySelected: String,
  },
  methods: {
    onInput(e) {
      this.$emit('searchTerm', e.target[0].value);
    },
  },
};
</script>

<style>
input[type='text'] {
  min-width: 300px !important;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  height: 2.5rem;
}
span {
  color: var(--primary);
  font-weight: 600;
}
@media screen and (max-width: 500px) {
  input {
    width: 200px !important;
  }
}
</style>
