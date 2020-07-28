<template>
  <div class="container container-main">
    <div class="text-center" v-if="isLoading">
      <img src="@/assets/img/loading.gif" alt="productList" />
    </div>
    <!-- <h1>Išsirinkite ir užsisakykite dabar!</h1> -->
    <div class="grid" v-else>
      <!-- <list-grid /> -->
      <list-header />
      <list-filter />
      <list-items />
      <list-pagination />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import ListGrid from "@/components/productList/ListGrid.vue";
import ListHeader from "@/components/productList/ListHeader.vue";
import ListFilter from "@/components/productList/ListFilter.vue";
import ListItems from "@/components/productList/ListItems.vue";
import ListPagination from "@/components/productList/ListPagination.vue";

export default {
  created() {
    this.$store.dispatch("productList/fetchItems");
  },
  components: {
    ListHeader,
    ListFilter,
    ListItems,
    ListPagination
  },
  computed: mapGetters({
    isLoading: "productList/getIsLoading",
  }),
};
</script>

<style lang="scss" scoped>
// h1 {
//   font-weight: bold;
// }
.grid {
  display: grid;
  padding-top: 1.5rem;
  grid-template:
    "filter header" 50px
    "filter list" auto
    "filter list" auto
    "filter pagination" auto
    / 3fr 10fr;
  gap: 1.25rem;
  margin-bottom: 5rem;
}
</style>