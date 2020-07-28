<template>
  <div class="card shadow-sm">
    <img :src="img" alt />
    <div class="product-info mb-2">
      <div class="h6 m-0">{{name}}</div>
      <div class="price">{{price}}</div>
    </div>
    <div class="d-flex justify-content-between">
      <a class="btn btn-secondary btn-sm text-white" @click="$router.push({path: '/item/' + id })">
        Peržiūrėti
      </a>
      <a class="btn btn-primary btn-sm text-white" @click="$emit('add-item-to-cart', id)">Į krepšelį</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id','img', 'name', 'price']
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 1rem;
  & > img {
    margin: 1.5rem 0 .5rem;
    height: 240px;
    object-fit: cover;
  }
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      position: absolute;
      top: .5rem;
      right: 1rem;
      font-size: 1.25rem;
      font-weight: bold;
      color: $primary;
      &:after {
        content: " €";
      }
    }
  }
  .card.out-of-stock {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($white, 0.3);
  }
}
</style>