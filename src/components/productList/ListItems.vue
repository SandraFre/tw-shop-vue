<template>
  <div class="grid__list">
    <div class="products-container">
      <list-item-card
        v-for="({id, img, name, price}) in items"
        :id="id"
        :key="id"
        :img="img"
        :name="name"
        :price="price"
        @add-item-to-cart="addToCartById"
      />
    </div>
  </div>
</template>

<script>
import ListItemCard from "@/components/productList/ListItemCard.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ListItemCard,
  },
  computed: {
    ...mapGetters("productList", {
      items: "getSelectedItems",
    }),
  },
  methods: {
    ...mapMutations({
      addItems: "cart/ADD_ITEMS",
    }),
    addToCartById(id) {
      const item = this.items.find((el) => el.id === id);
      this.addItems({
        ...item,
        count: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.grid__list {
  grid-area: list;
  .products-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>