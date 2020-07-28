<template>
  <div>
    <list-filter-categories/>
  </div>
</template>

<script>
import ListFilterCategories from "./ListFilterCategories.vue";

export default {
  components: {
    ListFilterCategories,
  }
};
</script>



<style lang="scss" scoped>
.grid__filter {
  grid-area: filter;
}
</style>

