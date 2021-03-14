<template>
  <button
    :class="{ active: isSelected, inactive: (isSelected = false) }"
    @click="onClick(category.list_name_encoded, category.list_name)"
    class="btn-list"
  >
    <i class="fas fa-book-open mr-2"></i>{{ category.list_name }}
  </button>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      isSelected: false,
    };
  },
  props: {
    category: Object,
  },
  methods: {
    onClick(value, category) {
      this.$emit('selectedCategory', value, category);
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  outline: none;
  height: 4.5rem;
}
.btn-list,
.inactive {
  background-color: var(--background-white);
  color: var(--black);
  border-radius: 0.8rem;
  border: none;
  display: flex;
  align-items: center;
  text-align: left;
  box-shadow: 2px 2px 10px 0px var(--shadows);
  transition: 0.5s all;
}
.btn-list:hover,
.active {
  background-color: var(--primary);
  color: var(--white);
}
.btn-list:hover .fa-book-open {
  background-color: var(--white);
  color: var(--primary);
}
.fa-book-open {
  background-color: var(--primary);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 50%;
}
@media screen and (max-width: 400px) {
  .btn-list {
    min-height: 3rem;
    font-size: 0.8rem;
  }
}
</style>
