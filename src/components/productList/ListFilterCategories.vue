<template>
  <div class="accordion" id="categories-accordion">
    <div class="bg-light">
      <div
        data-toggle="collapse"
        data-target="#categories"
        class="btn btn-primary dropdown-toggle w-100 text-left"
      >Kategorijos</div>
      <div class="collapse show p-2" id="categories" data-parent="#categories-accordion">
        <div
          v-for="({name, display}, index) in filters"
          :key="index"
          class="form-group form-check mb-2"
        >
          <input
            type="checkbox"
            class="form-check-input"
            :checked="display"
            @change="toggleFilter(name)"
          />
          <label class="form-check-label" for="name">{{name}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      filters: "productList/getFilters"
    })
  },
  methods: {
    ...mapActions({
      toggleFilter: "productList/filterItems"
    })
  }
};
</script>

<style>
.form-check-label {
  text-transform: capitalize;
}
</style>