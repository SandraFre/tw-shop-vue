<template>
  <div class="container container-main">
      <h1>Išsirinkite ir užsisakykite dabar!</h1>
      <div class="row">
          <div class="col-sm-2">

          </div>
          <div class="col-sm-8">
    <list-grid/>

          </div>
      </div>
  </div>
</template>

<script>
import ListGrid from '@/components/productList/ListGrid.vue'

export default {
    name: 'ProductList',
    components: {
        ListGrid,
    }
}
</script>

<style lang="scss" scoped>
    h1{
        font-weight: bold;
    }
</style>