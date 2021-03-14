<template>
  <div class="container my-3">
    <div class="card" style="width: 10rem">
      <img :src="imgUrl" class="card-img-top" :alt="book.title" />
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
    book: Object,
  },
  computed: {
    imgUrl() {
      return this.book.book_image;
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
  top: -40%;
  right: -35%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ranking {
  display: flex;
}
.ranking h5 {
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
}
.fa-star {
  color: yellow;
  margin-right: 0.3rem;
}
</style>
