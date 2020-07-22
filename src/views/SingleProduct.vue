<template>
  <div class="container container-main">
    <div class="grid">
      <div class="grid__photo">
        <div>
          <img class="img" src="~@/assets/singleProduct/prod1-1.jpg" alt />
        </div>
      </div>
      <div class="grid__title">
        <h2 class="product-title">FreezerSmart rinkinys</h2>
      </div>
      <div class="grid__about">
        <p class="product-dimensions">I:28,5cm P:19cm A:7cm</p>
        <p class="product-code">S20756146</p>
        <p class="product-description">Įveskite tvarką savo šaldiklyje su FreezerSmart rinkiniu</p>
      </div>
      <div class="grid__price">
        <div class="row">
          <div class="col-md-6">
            <h3 class="price price__sale">29,99 Eur</h3>
          </div>
          <div class="col-md-6">
            <h3 class="price">34,99 Eur</h3>
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
            <img src="~@/assets/recipies/recipie-1.jpg" alt class="img-sm" />
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
  name: "product"
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  padding-top: 1.5rem;
  grid-template:
    "photo title"
    "photo dimensions"
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
  &__dimensions {
    grid-area: dimensions;
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