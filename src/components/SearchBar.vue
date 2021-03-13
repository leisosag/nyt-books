<template>
  <div class="container py-3 d-flex justify-content-center">
    <div class="row d-flex justify-content-center">
      <form @submit.prevent="onSubmit" class="form-inline">
        <label for="searchInput" class="sr-only">Search books</label>
        <input
          type="text"
          class="form-control mr-sm-2"
          id="searchInput"
          placeholder="Search books by title or author"
        />
        <button type="submit" class="btn btn-color my-2 my-sm-0">
          Search
        </button>
      </form>
    </div>
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
input[type='text'] {
  width: 300px !important;
  background-color: var(--background-grey);
  border-radius: 0.8rem;
}
.btn-color {
  background-color: var(--primary);
  color: var(--white);
  transition: 0.5s all;
  border-radius: 0.8rem;
}
.btn-color:hover {
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: transparent;
}
@media screen and (max-width: 500px) {
  input {
    width: 200px !important;
  }
}
</style>
