<template>
  <div class="product">
   <h4 class="text-center"商品信息></h4>
    <table class="table table-hover table-bordered">
      <thead>

      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>库存</th>
        <th>操作</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(shop,index) of shopList" :key="index">
        <td>{{shop.id}}</td>
        <td>{{shop.name}}</td>
        <td>{{shop.price}}</td>
        <td>{{shop.num}}</td>
        <td>{{shop.stock}}</td>

        <td><button :datafld="!shop.num" @click="addToCart(shop)" class="btn btn-info">添加</button></td>

      </tr>

      </tbody>



    </table>

  </div>


</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    // import vuex from 'vuex';
    export default {
      name:"product",
        data() {
            return {}
        },
        components: {},

        created() {
          // console.log('llll');
          // console.log(vuex);
        },

        computed: {
          ...mapGetters(['shopList'])

        },

        methods: {
          ...mapActions(['addToCart'])

        }


    }
</script>


<style>
  .table td, .table th{
    vertical-align: middle;
    text-align: center;
  }
</style>


<style scoped>
  .item-wrapper{
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: center;
  }

  .item{
    flex: 1;
  }

</style>
