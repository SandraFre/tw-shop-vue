<template>
  <div class="list-grid">
    <div class="list-grid__item">
      <img class src="~@/assets/img/productList/product-1.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-2.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-3.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img class src="~@/assets/img/productList/product-1.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-2.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-3.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img class src="~@/assets/img/productList/product-1.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-2.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
    <div class="list-grid__item">
      <img src="~@/assets/img/productList/product-3.jpg" />
      <div class="product-info">
        <div class="price">16,99</div>
      </div>
      <div class="btn-wrap">
        <router-link
          class="btn btn-sm btn-outline-primary d-flex justify-content-center rounded-pill"
          to="/product"
        >Peržiūrėti</router-link>
        <router-link
          class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
          to="/tocart"
        >Į krepšelį</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-grid",
};
</script>

<style lang="scss" scoped>
.list-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
  &__item {
    display: block;
    border: 1px solid $secondary;
    height: 40vh;
    padding: 1rem;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }

    .product-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: $primary;
        &:after {
          content: " €";
        }
      }
    }

    .btn-wrap {
      position: absolute;
      display: flex;
      justify-content: space-between;
      padding-right: 2rem;
      top: 80%;
      width: 100%;

      .btn {
        width: 40%;
        font-weight: bold;
      }
      .btn-outline-primary {
        background: white;
      }
    }
  }
}

@media (max-width: 769px) {
  .list-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .list-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>