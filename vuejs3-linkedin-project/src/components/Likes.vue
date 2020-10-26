<template>
  <div id="section-likes">
    <div class="div1">{{ nbrLikes }}</div>
    <div class="div2" @click="addLikes()">J'aime</div>
    <div class="div3">{{ info }}</div>
  </div>
</template>


<script>
import useLikes from "../use/use-likes.vue";
export default {
  name: "Likes",

  setup() {
    const { nbrLikes, addLikes, message, info } = useLikes();
    return { nbrLikes, addLikes, message, info };
  }
};
</script>

<style scoped>
.div1 {
  background-image: url("../assets/images/heart.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  font-size: 1em;
  font-weight: bold;
  height: 50px;
  width: 60px;
}
.div2 {
  background-color: #4a6bbb;
  height: 35px;
  margin-left: 20px;
  line-height: 35px;
  margin-top: 10px;
  color: white;
  font-size: 1em;
  border-radius: 10px;
  padding: 0px 20px;
  cursor: pointer;
}
.div2:hover {
  background-color: #2d3e6d;
}
.div3 {
  color: white;
  margin-left: 10px;
}
#section-likes {
  display: flex;
  line-height: 56px;
  height: 60px;
}
</style>