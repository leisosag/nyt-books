<template>
  <div class="container my-3">
    <div class="card">
      <img
        @click="bookCardSelect"
        :src="book.book_image"
        class="card-img-top"
        :alt="book.title"
      />
      <div class="overlay">
        <div class="ranking">
          <i class="fas fa-star"></i>
          <h5>{{ book.rank }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    bookCardSelect(e) {
      this.$emit('bookCardSelected', e.target.alt);
    },
  },
};
</script>

<style scoped>
.btn-color {
  margin: 0;
}
a {
  text-decoration: none;
}
.card {
  border: none;
  position: relative;
  background-color: transparent;
  border-radius: 1rem;
  box-shadow: 7px 7px 10px 0px var(--shadows);
}
.card:hover {
  cursor: pointer;
}
.card img {
  border-radius: 1rem;
}
.card-img-top img {
  height: 500px;
}
.overlay {
  position: absolute;
  top: -35%;
  right: -30%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ranking {
  display: flex;
  background-color: var(--black-transparent);
  padding: 0.8rem 0.6rem;
  border-radius: 50%;
}
.ranking h5 {
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
  margin-top: 0.1rem;
}
.fa-star {
  color: yellow;
  margin-right: 0.3rem;
  margin-top: 0.1rem;
}
</style>
