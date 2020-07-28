<template>
  <div class="grid__pagination">
    <div class="d-flex justify-content-center">
      <div
        class="btn btn-primary btn--pagination"
        v-for="({number}, i ) in pagination.pages"
        :class="{active: number == pagination.currentPage}"
        :key="i"
        @click="setPage(number)"
      >{{number}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("productList", {
    pagination: "getPagination"
  }),
  methods: mapActions("productList", {
    setPage: 'setPage'
  })
};
</script>


<style lang="scss" scoped>
.grid__pagination {
  margin-top: 0.5rem;
  grid-area: pagination;
}
.btn--pagination {
  margin: 0 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  line-height: 1.5rem;
}
</style>
