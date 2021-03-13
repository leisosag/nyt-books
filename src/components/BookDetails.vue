<template>
  <div class="container">
    <div class="row details-container">
      <div class="col-md-4">
        <img :src="imgUrl" class="card-img" :alt="book.title" />
      </div>
      <div class="col-md-8 d-flex flex-column justify-content-around">
        <div class="ranking">
          <i class="fas fa-star"></i>
          <h5>{{ book.rank }}</h5>
        </div>
        <p>{{ book.weeks_on_list }} weeks on the list</p>
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text card-author">By {{ book.author }}</p>
        <p class="card-text">{{ book.description }}</p>
        <p>Publisher: {{ book.publisher }}</p>
        <div class="row">
          <div class="col">
            <a :href="book.amazon_product_url" target="_blank">
              <button class="btn btn-color btn-block mb-1">
                Buy on Amazon
              </button>
            </a>
          </div>
          <div class="col">
            <a :href="url" target="_blank">
              <button class="btn btn-color btn-block">Search on Google</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  props: {
    book: Object,
  },
  computed: {
    imgUrl() {
      return this.book.book_image;
    },
  },
  data() {
    return {
      url: '',
    };
  },
  methods: {
    modifyQueryParams(str, sep) {
      const stringArr = str.toLowerCase().split(sep);
      return stringArr.join('+');
    },
    createGoogleLink(str1, str2) {
      return `https://www.google.com/search?q=${str1}+${str2}`;
    },
    onBookSelect() {
      this.$emit('bookSelect', this.book);
    },
  },
  mounted() {
    const space = ' ';
    const title = this.modifyQueryParams(this.book.title, space);
    const author = this.modifyQueryParams(this.book.author, space);
    const googleURL = this.createGoogleLink(title, author);
    return (this.url = googleURL);
  },
};
</script>

<style scoped>
.details-container {
  background-color: var(--background-grey);
  padding: 1rem;
}
.ranking {
  display: flex;
}
.fa-star {
  color: yellow;
  margin-right: 0.3rem;
}
.ranking h5 {
  font-weight: 600;
  margin-right: 1rem;
}
.card-title {
  color: var(--primary);
  font-weight: 600;
}
.card-author {
  font-weight: 600;
  margin-top: -10px;
}
.btn-color {
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
