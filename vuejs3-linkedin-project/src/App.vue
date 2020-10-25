<template>
  <nav id="header">
    <a href="">HOME</a>
    <a href="">CONTACT</a>
  </nav>
  <section>
    <Home>
      <template v-slot:welcome>
        <p>Bienvenue !</p>
      </template>

      <p>PROMOTION SUR LA 4 FROMAGE</p>
      <p>NOUVEAUTE - PIZZA ROYALE</p>
      <p>JEU CONCOURS</p>
    </Home>
  </section>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
a {
  background: black;
  color: #ffffff;
  display: block;
  font: bold 12px/20px sans-serif;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
a:hover {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
}
#header {
  background: black;
  display: flex;
  justify-content: center;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
