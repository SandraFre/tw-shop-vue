<template>
  <div class="container">
    <h1 class="text-center">Jūsų krepšelis</h1>

    <div v-if="items.length > 0">
      <div
        class="row align-items-center font-weight-bold text-primary border-bottom border-primary py-3 mt-2"
      >
        <div class="offset-1 col-4">Pavadinimas</div>
        <div class="col-2">Vieneto kaina</div>
        <div class="col-1">Kiekis</div>
        <div class="col-2">Suma</div>
      </div>
      <cart-product
        class="mb-2"
        v-for="({id, img, title, price, count}) in items"
        :key="id"
        :id="id"
        :img="img"
        :title="title"
        :price="price"
        :count="count"
      />
    </div>
    <h3 class="text-primary text-center mt-5" v-else>Jūsų krepšelis yra tuščias</h3>
  </div>
</template>

<script>
import CartProduct from "@/components/cart/CartProduct.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CartProduct
  },
  computed: {
    ...mapGetters({
      items: "cart/getItems"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>