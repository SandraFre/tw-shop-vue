<template>
  <div class="container container-main">
    <div class="grid">
      <product-photo />
      <div class="grid__title">asadfd</div>
      <div class="grid__dimensions">hgjkloi</div>
      <div class="grid__code">4567</div>
      <div class="grid__price">klo</div>
      <div class="grid__order">rtoi90</div>
      <div class="grid__similar">879865</div>
      <div class="grid__recipies">we4r</div>
    </div>
  </div>
</template>

<script>
import ProductPhoto from "@/components/singleProduct/ProductPhoto";

export default {
  name: "product",
  components: {
    ProductPhoto
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  padding-top: 1.5rem;
  grid-template:
    "photo photo title title"
    "photo photo dimensions dimensions"
    "photo photo code code"
    "photo photo price price"
    "tocart tocart tocart tocart"
    "similar similar similar similar"
    "similar similar similar similar"
    "recipies recipies recipies recipies"
    "recipies recipies recipies recipies"
    "recipies recipies recipies recipies";
    
  gap: 1.5rem;
  &__title {
    grid-area: title;
  }
  &__dimensions {
    grid-area: dimensions;
  }
  &__code {
    grid-area: code;
  }
  &__price {
    grid-area: price;
  }
  &__order {
    grid-area: tocart;
  }
  &__similar{
    grid-area: similar;
  }
  &__recipies{
    grid-area: recipies;
  }
}
</style>