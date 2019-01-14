<template>
  <div>
    <h4 class="text-center">已选商品</h4>
    <table class="table table-hover table-bordered">
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
      </thead>


      <tbody>
      <tr v-for="(shop,index) of cartProducts" :key="index">
        <td>{{shop.id}}</td>
        <td>{{shop.name}}</td>
        <td>{{shop.price}}</td>
        <td>{{shop.num}}</td>

        <td>
          <button @click="delProduct(shop)" class="btn btn-danger btn-sm">删除</button>

          <button
            :disabled="!(shop.stock - shop.num)"
            @click="addToCart(shop)"
            class="btn btn-danger btn-sm"
          >增加</button>

          <button @click="reduceToCart(shop)" class="btn btn-danger btn-sm">减少</button>
        </td>
    </tr>

      <tr v-if="!cartProducts.length">
        <td colspan="5" class="text-center">您的购物车空空如也</td>
      </tr>
    </tbody>
</table>
</div>
</template>

<script>
   import {mapGetters,mapActions} from  'vuex'
    export default {
        data() {
            return {}
        },
        components: {},

        created() {
        },

        computed: {

          ...mapGetters(['cartProducts'])
        },

        methods: {

          ...mapActions(['delProduct','reduceToCart','addToCart'])

        }


    }
</script>


<style scoped>
  .text-center{
    color: palevioletred;
  }

</style>
