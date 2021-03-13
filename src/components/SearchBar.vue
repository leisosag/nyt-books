<template>
  <div class="container d-flex justify-content-center">
    <form @submit.prevent="onSubmit" class="form-inline">
      <div class="form-group mb-2">
        <label for="searchInput" class="sr-only">Search by category</label>
        <input
          type="text"
          class="form-control"
          id="searchInput"
          placeholder="Search books by title"
        />
      </div>
      <button type="submit" class="btn btn-search mb-2">
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onSubmit(e) {
      this.$emit('termSubmit', e.target[0].value);
    },
  },
};
</script>

<style>
input {
  width: 250px !important;
}
.btn-search {
  background-color: var(--primary);
  color: var(--white);
  transition: 0.5s all;
  margin-left: 1rem;
}
.btn-search:hover {
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: transparent;
}
@media screen and (max-width: 400px) {
  input {
    max-width: 200px !important;
  }
}
</style>
