<template>
  <button @click="onClick(list.list_name_encoded)" class="btn-list">
    <i class="fas fa-book-open mr-1"></i>{{ list.list_name }}
  </button>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Object,
  },
  methods: {
    onClick(value) {
      this.$emit('selectedList', value);
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.8rem;
}
.btn-list {
  background-color: var(--background-grey);
  color: var(--black);
  border-radius: 0.8rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-book-open {
  background-color: var(--white);
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
