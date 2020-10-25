<template>
  <nav id="header">
    <router-link :to="{ name: 'Home' }">HOME</router-link>
    <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  }
};
</script>

<style>
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
