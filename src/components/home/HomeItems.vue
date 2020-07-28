<template>
  <div class="grid">
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-1.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Serviravimas</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-2.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Buteliai / Gertuvės</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-3.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Šaldymui</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-1.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Serviravimas</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-2.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Buteliai / Gertuvės</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-3.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Šaldymui</router-link>
    </div>
    <div class="grid__item">
      <img src="~@/assets/img/categories/category-1.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Serviravimas</router-link>
    </div>
    <div class="grid__item">
      <img src="~@/assets/img/categories/category-2.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Buteliai / Gertuvės</router-link>
    </div>
    <div class="grid__item">
      <img  src="~@/assets/img/categories/category-3.jpg" />
      <router-link
        class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
        to="/categories"
      >Šaldymui</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
  &__item {
    display: block;
    border: 1px solid $secondary;
    height: 30vh;
    padding: 1rem;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }
    .btn {
      position: absolute;
      width: 90%;
      top: 80%;
      font-weight: bold;
    }
  }
}

@media (max-width: 769px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>