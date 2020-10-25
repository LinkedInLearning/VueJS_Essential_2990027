<template>
  <article v-for="(type, index) in types" :key="index">
    <div class="product-img"></div>
    <div class="product-description">
      <h3>Pizza {{ type }}</h3>
      <p>Prix : {{ price }} €</p>
      <p>{{ ingredients }}</p>
      <router-link :to="{ name: 'product-details', params: { name: type } }">
        Commander >>
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Products",

  data() {
    return {
      types: ["royale", "orientale", "4 fromages", "barbecue", "vegetarienne"],
      price: 12,
      image: "../assets/images/pizza2.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");

a {
  background: #c00;
  padding: 5px;
  color: white;
  border-radius: 10px;
  text-decoration: none;
}
a:hover {
  background: #8c0217;
}
article {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 40%;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  margin-bottom: 30px;
}
h3 {
  font-size: 1rem;
  margin: 0px;
  font-family: "Original Surfer", cursive;
  color: #cc0000;
  line-height: 1.3em;
}
.product-img {
  width: 50%;
  background-image: url("../assets/images/pizza2.jpg");
  position: relative;
  background-size: cover;
  background-position: right;
}
.product-description {
  width: 50%;
  text-align: left;
  padding-left: 10px;
}
</style>
