
<template>

  <div class="item-wrapper">

    <div class="item">
      总数

      <!--计算数量-->

      <strong>{{totalNum}}</strong>
    </div>

    <div class="item">
      总价

      <!--计算总额-->

      <strong>{{totalPrice}}</strong>
    </div>

    <div class="item btn btn-danger" @click="clearAllCart">清空购物车</div>

  </div>

</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {}
        },
        components: {},

        created() {
        },

        computed: {
          ...mapGetters(['totalNum','totalPrice'])
        },

        methods: {
          ...mapActions(['clearAllCart'])
        }


    }
</script>


<style>
  .btn{
    cursor: pointer;
  }
</style>


<style scoped>

  .item-wrapper{
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: space-between;
  }

</style>
