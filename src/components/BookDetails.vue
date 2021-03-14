<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="card" style="width: 600px">
        <div class="row no-gutters">
          <div class="col-sm-5">
            <img :src="imgUrl" class="card-img" :alt="book.title" />
          </div>
          <div class="col-sm-7">
            <div class="card-body">
              <div class="ranking">
                <i class="fas fa-star"></i>
                <h5>{{ book.rank }}</h5>
              </div>
              <p>Weeks on the list: {{ book.weeks_on_list }}</p>
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text card-author">By {{ book.author }}</p>
              <p class="card-text">{{ book.description }}</p>
              <p>Publisher: {{ book.publisher }}</p>
              <a :href="book.amazon_product_url" target="_blank">
                <button class="btn btn-color btn-block mb-1">
                  <i class="fab fa-amazon pr-2"></i>Buy on Amazon
                </button>
              </a>
              <a :href="url" target="_blank">
                <button class="btn btn-color btn-block">
                  <i class="fab fa-google pr-2"></i>More info
                </button>
              </a>
            </div>
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
.card {
  background-color: var(--background-white);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 7px 7px 10px 0px var(--shadows);
}
.ranking {
  display: flex;
  margin-bottom: -10px;
}
.fa-star {
  color: yellow;
  margin-right: 0.3rem;
  margin-top: 0.2rem;
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
  box-shadow: 7px 7px 10px 0px var(--shadows-primary);
}
a {
  text-decoration: none;
}
</style>
