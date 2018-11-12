<template>
  <div class="col-lg-2 col-md-3 col-sm-6 filter-block">
    <button @click.prevent="toggleFilter" class="filter-button">{{filterData.name}}</button>
    <div v-show="isFilterOpen" class="filter-list">
      <label v-for="item in filterData.list" class="filter-item">
        <input type="checkbox" :name="item.name" :value="item.htmlName" v-on:change="filterChange" class="filter-input">
        <span class="filter-name">{{item.htmlName}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  data: function() {
    return {
      isFilterOpen: false
    }
  },
  props: {
    filterData: Object
  },
  methods: {
    filterChange(event) {
      if (event.target.checked) {
        this.$store.commit(
          'addAppliedFilter', 
          {
            filterCategory: this.filterData.name,
            filterValue: event.target.value,
            filterName: event.target.name,
            filterInput: event.target
          }
        );
        this.toggleFilter();
      } else {
        this.$store.commit('deleteAppliedFilter', event.target.name);
        this.toggleFilter();
      }
    },
    toggleFilter() {
      this._data.isFilterOpen = this._data.isFilterOpen ? false : true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filter-block {
    position: relative;
  }
  .filter-input {
    margin-right: 5%;
  }
  .filter-button {
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
  }
  .filter-list {
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 1;
    background: #ccc;
    width: 100%;
  }
  .filter-item {
    width: 100%;
    margin: 0;
  }
  .filter-item:hover {
    background: #afafaf;
    cursor: pointer;
  }
</style>
