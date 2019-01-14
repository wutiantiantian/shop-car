import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/cart";

Vue.use(Vuex);


export default new Vuex.Store({
  modules:{
    cart
  },

  strict: process.env.NODE_ENV !== "production"
})


//官方: process.env属性返回一个包含用户环境信息的对象

//在生产环境下用严格模式，线上环境下不能用严格模式，会存在很多问题
