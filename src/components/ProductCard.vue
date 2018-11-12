<template>
  <b-card tag="li" class="product-card col-md-4 col-sm-6 col-xs-12">
    <div class="product-images">
      <a href=""><img v-bind:src="productData.images[0]" class="" alt=""></a>
      <div class="product-data row">
        <div class="col-lg-7 text-left">
          <a href="">
            <span class="product-name">{{productData.name}}</span>
          </a>
        </div>
        <div class="product-price col-lg-5 text-right">{{productData.prices.current}}</div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productData: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-images img {
    width: 100%;
  }
  .product-data {
    margin-top: 20px;
    font-size: 14px;
  }
</style>
