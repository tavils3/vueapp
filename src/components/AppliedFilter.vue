<template>
  <li @click="deleteAppliedFilter(filterData.filterInput, filterData.filterName)" class="col-lg-2 col-md-3 col-sm-6">
    <div class="applied-filter">{{filterData.filterCategory}}: {{filterData.filterValue}}</div>
  </li>
</template>

<script>
export default {
  name: 'AppliedFilter',
  props: {
    filterData: Object
  },
  methods: {
    deleteAppliedFilter(appliedFilter, index) {
      this.$store.commit('deleteAppliedFilter', index);
      appliedFilter.checked = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .applied-filter {
    padding: 10px 5px;
    margin-top: 20px;
    background: #7cdb69;
  }
  .applied-filter:hover {
    background: #aae89d;
    cursor: pointer;
  }
</style>
