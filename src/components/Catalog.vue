<template>
  <div class="catalog container">
    <h1 class="container">{{title}}</h1>
    <form class="row">
      <FilterComponent v-for="item in filters" :filterData="item" />
    </form>
    <ul class="row applied-filter-list">
      <AppliedFilter v-for="(item, index) in showAppliedFilters" :filterData="item" />
    </ul>
    <ul class="product-list row">
      <ProductCard v-for="item in items" :productData="item" />
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import FilterComponent from './FilterComponent.vue';
import AppliedFilter from './AppliedFilter.vue';

export default {
  name: 'Catalog',
  props: {
    title: String,
    items: Array,
    filters: Array
  },
  components: {
    ProductCard,
    FilterComponent,
    AppliedFilter
  },
  computed: {
    showAppliedFilters() {
      return this.$store.state.appliedFilters;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
.product-list {
  margin-top: 20px;
}
.applied-filter-list {
  list-style-type: none;
}
</style>
