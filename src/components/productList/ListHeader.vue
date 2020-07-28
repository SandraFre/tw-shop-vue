<template>
  <div class="grid__header">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <span class="h2 align-self-center">{{ searchQuery ? searchQuery: "Visos prekės"}}</span>
        <span class="text-muted h4 ml-2 align-self-center">({{count}})</span>
      </div>
      <div class="d-flex">
        <select
          class="custom-select custom-select-sm align-self-center mr-2"
          @change="changeItemsPerPageOption($event.target.value)"
        >
          <option
            v-for="({count, selected}, i) in itemsPerPageOptions"
            :key="i"
            :value="count"
            :selected="selected"
          >{{count}}</option>
        </select>
        <select
          v-if="count > 1"
          class="custom-select custom-select-sm align-self-center"
          @change="changeSortOption($event.target.value)"
        >
          <option
            v-for="({name, selected}, i) in sortOptions"
            :key="i"
            :value="name"
            :selected="selected"
          >{{name}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("productList", {
      count: "getItemCount",
      searchQuery: "getSearchQuery",
      itemsPerPageOptions: "getItemsPerPageOptions",
      sortOptions: "getSortOptions"
    })
  },
  methods: mapActions("productList", ["changeItemsPerPageOption", "changeSortOption"])
};
</script>

<style lang="scss" scoped>
.grid__header {
  grid-area: header;
}
</style>