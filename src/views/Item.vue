<template>
  <div class="container container-main">
    <div class="grid">
      <div class="grid__photo">
        <div>
          <img class="img" :src="item.img" />
          <!-- <img class="img" src="~@/assets/img/singleProduct/prod1-1.jpg" alt /> -->
        </div>
      </div>
      <div class="grid__title">
        <h2 class="product-title">{{item.name}}</h2>
      </div>
      <div class="grid__about">
        <p class="product-size">{{item.size}}</p>
        <p class="product-code">{{item.code}}</p>
        <p class="product-description">{{item.description}}</p>
      </div>
      <div class="grid__price">
        <div class="row">
          <div class="col-md-6">
            <h3 class="price price__sale">{{item.sale_price.toFixed(2)}}</h3>
          </div>
          <div class="col-md-6">
            <h3 class="price">{{item.price.toFixed(2)}}</h3>
          </div>
        </div>
      </div>
      <div class="grid__tocart">
        <div class="row">
          <div class="col-md-2">
            <input type="number" id="count" class="form-control" value="1" min="1" />
          </div>
          <div class="col-md-5">
            <div
              class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
              @click="addItems({
                ...item,
                count: Number(count)
               })"
            >Į krepšelį</div>
          </div>
          <div class="col-md-5">
            <div
              class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
            >Į norų sąrašą</div>
          </div>
        </div>
      </div>
      <div class="grid__recipies">
        <h5>Susiję receptai:</h5>
        <div class="row p-2">
          <div class="col-md-3">
            <img src="~@/assets/img/recipies/recipie-1.jpg" alt class="img-sm" />
          </div>
          <div class="col-md-9">
            <h6>Itališka daržovių sriuba „Minestrone“</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas doloremque blanditiis perspiciatis! Unde, quos incidunt consequuntur iste enim deleniti exercitationem.
              <a
                href
              >Daugiau...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "img", "name", "size", "code", "description", "sale_price", "price", "item"],
  computed: {
    item() {
      return this.$store.getters["productList/getItemById"](this.id);
    },
  },
  methods: {
    ...mapActions({
      addItems: "cart/addItems"
    })
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  padding-top: 1.5rem;
  grid-template:
    "photo title"
    "photo size"
    "photo code"
    "photo about"
    "photo price"
    "photo tocart"
    "recipies recipies";
  gap: 1rem;
  grid-template-rows: auto;

  &__photo {
    grid-area: photo;
  }
  &__title {
    grid-area: title;
  }
  &__size {
    grid-area: size;
  }
  &__code {
    grid-area: code;
  }
  &__about {
    grid-area: about;
  }
  &__price {
    grid-area: price;
  }
  &__tocart {
    grid-area: tocart;
  }

  &__recipies {
    grid-area: recipies;
    margin-top: 10px;
    padding: 10px;
  }
}
.product-title {
  font-weight: bold;
}
.btn {
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  padding-top: 7px;
}
.price {
  color: $secondary;
  font-weight: bold;
  text-align: left;
  text-decoration: line-through;
  &__sale {
    color: $primary;
    font-weight: bold;
    text-align: right;
    text-decoration: none;
    // display:none;
  }
}
.img {
  padding: 6px;
  width: 300px;
  height: 300px;
}
.img-sm {
  padding: 3px;
  width: 150px;
  height: 100px;
  border-radius: 10%;
}

h5 {
  font-weight: bold;
  padding: 5px;
  text-align: left;
}
h6 {
  font-weight: bold;
  font-style: italic;
  text-align: left;
}
p {
  text-align: justify;
}
</style>