<template>
  <button @click="onClick(list.list_name_encoded)" class="btn-list">
    {{ list.list_name }}
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
      console.log(value);
    },
  },
};
</script>

<style scoped>
.btn-list {
  background-color: var(--primary);
  color: var(--white);
  border: none;
  min-height: 5rem;
  text-transform: uppercase;
}
@media screen and (max-width: 400px) {
  .btn-list {
    min-height: 3rem;
    font-size: 0.8rem;
  }
}
</style>
