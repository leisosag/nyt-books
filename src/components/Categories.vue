<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2>Categories</h2>
        <div class="grid-container my-3">
          <Category
            v-for="(category, index) in categories"
            :key="index"
            :category="category"
            @selectedCategory="onCategorySelected"
          ></Category>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue';

export default {
  name: 'Categories',
  components: { Category },
  props: {
    categories: Array,
  },
  methods: {
    onCategorySelected(categorySearch, categoryName) {
      this.$emit('selectedCategory', categorySearch, categoryName);
    },
  },
};
</script>

<style>
h2 {
  font-weight: 600;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 0.5rem;
}
</style>
