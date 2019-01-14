<template>
  <div id="app">
    <h3 class="text-center">shop-car</h3>
    <product></product>
    <cart></cart>
    <info></info>

    <!--<router-view/>-->
  </div>
</template>

<script>
  import product from './components/product'
  import cart from './components/cart'
  import info from './components/info'

  export default {
    name: 'App',
    components: {
      product,
      cart,
      info
    }
  }


</script>


<style>
  #app{
    padding:  30px 60px;
  }

</style>
