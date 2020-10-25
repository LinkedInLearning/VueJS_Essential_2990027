<template>
  <div class="container">
    <h1>Une question ?</h1>
    <form action="/action_page.php">
      <label for="fname">Nom</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Votre nom.."
      />

      <label for="lname">Prénom</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Votre prénom.."
      />

      <label for="subject">Message</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Posez-nous votre question.."
        style="height: 200px"
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>


<style scoped>
form {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
label,
h1 {
  color: white;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  background-image: url("../assets/images/pizza-menu.jpg");
  padding: 20px;
}
</style>