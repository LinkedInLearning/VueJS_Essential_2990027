app.component("product", {
  template:
    `<!-- Image du produit -->
    <div class="product-image">
      <img :src="image" />
    </div>

    <!-- Description du produit -->
    <div class="product-description">
      <h1>{{ title }}
      <img v-show="showBestSellerImg()" class="img-best-seller" src="assets/images/best-sellerq.png"></h1>
      <p v-show="notAvailable">Momentanément indisponible</p>

      <p v-if="sale">
        <span class="sale">{{ price }} € </span>
        <span class="new-price"> {{ price - 5}} € PROMOTION</span>
      </p>
      <p v-else>
        <span class="price">{{ price }} €</span>
      </p>

      <br />
      <strong>Ingrédients </strong>
      <div>
        <span v-for="ingredient in ingredients">{{ ingredient + ", "}}
        </span>
      </div>
      <br />
      <div class="sauces">
        <strong>Sauces au choix</strong>
        <ul>
          <li v-for="sauce in sauces" @mouseover="updateImage(sauce.image)" :style="{ backgroundColor: sauce.color }">
            {{ sauce.type }}
          </li>
        </ul>
      </div>
      <div>
        <strong>Valeurs nutritionnelles pour 100 grammes</strong>
        <ul>
          <li v-for="(value, name) in energy">
            {{ name }} : {{ value }}
          </li>
        </ul>
      </div>

      <!-- Bouton d'ajout au panier -->
      <button :class="{ notActiveBtn : notAvailable}" @click="addProduct()" :disabled="notAvailable">
        Ajouter à ma commande
      </button>
      <br /><br />
    </div>`,

  props: {
    bestseller: {
      type: Boolean,
    },
  },
  data() {
    return {
      product: "Pizza",
      type: "Orientale",
      price: 12,
      image: "assets/images/pizza1-tomate.jpg",
      sale: false,
      notAvailable: false,
      ingredients: [
        "Olives",
        "Poulet roti",
        "Bacon",
        "Poivrons",
        "Champignons",
        "Mozzarella",
        "Oeuf",
      ],
      sauces: [
        {
          id: 1001,
          type: "Sauce Tomate",
          color: "#db4006",
          image: "assets/images/pizza1-tomate.jpg",
        },
        {
          id: 1002,
          type: "Crème Fraiche",
          color: "#e9cb8f",
          image: "assets/images/pizza1-creme.jpg",
        },
      ],
      energy: {
        Kcal: 242,
        Glucides: 27.99,
        Fibres: 1.75,
        Proteines: 9.62,
        Sel: 11,
      },
    }
  },

  methods: {
    addProduct() {
      if (this.sale) {
        this.nbrProduct += 1;
        this.totalPrice += this.price - 5;
      } else {
        this.nbrProduct += 1;
        this.totalPrice += this.price;
      }
    },
    updateImage(newLinkImage) {
      this.image = newLinkImage;
    },
    showBestSellerImg() {
      if (this.bestseller) {
        return true;
      } else {
        return false;
      }
    },
  },

  computed: {
    title() {
      return this.product + " " + this.type;
    },
  },


})