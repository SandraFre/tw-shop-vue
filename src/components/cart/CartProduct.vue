<template>
  <div class="cart-item row align-items-center">
    <div class="col-1">
      <img :src="img" class="cart-item__img" :alt="title" />
    </div>
    <div class="col-4">{{title}}</div>
    <div class="col-2 text-right">{{price}} €</div>
    <div class="col-1 text-right">{{count}}</div>
    <div class="col-2 text-right">{{total}}</div>
    <div class="col-2">
      <div class="d-flex justify-content-between">
        <div class="btn btn-sm btn-primary" @click="increase(id)">+</div>
        <div class="btn btn-sm btn-secondary" @click="decrease(id)">-</div>
        <div class="btn btn-sm btn-danger" @click="deleteItem(id)">X</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: {
    id: Number,
    img: String,
    title: String,
    count: Number,
    price: Number,
  },
  computed:{
    total(){
      return (this.price * this.count).toFixed(2) + ' €';
    }
  },
  methods: {
    ...mapMutations("cart", {
      increase: 'INC_ITEM',
      decrease: 'DEC_ITEM',
      deleteItem: 'REMOVE_ITEM',
    })
  },

};
</script>

<style lang="scss" scoped>
.cart-item {
  height: 70px;
  &__img {
    height: 100%;
    width: 70px;
  }
  .btn {
    height: 2rem;
    width: 2rem;
  }
}
</style>