//初始化数据

const state = {
  shop_list : [
    {
      id:11,
      name:'番茄',
      price:12,
      num:20,
      stock:20,
    },

    {
      id:22,
      name:'土豆',
      price:14,
      num:13,
      stock:13,
    },


    {
      id:34,
      name:'鸡蛋',
      price:10,
      num:10,
      stock:10,
    },

    {
      id:47,
      name:'红薯',
      price:2,
      num:23,
      stock:23,
    },

    {
      id:48,
      name:'青菜',
      price:2,
      num:23,
      stock:23,
    },
  ],  //商品数据列表
  added:[],  //购物车列表
};

// getter 获取数据

const getters = {
  //商品列表

  shopList: state => state.shop_list,


  //购物车列表

  cartProducts: state => {
    // {id num} 参数的对象解析

    return state.added.map(({id,num}) =>{
      let product = state.shop_list.find(n => n.id == id);

      return {
        ...product,
        num
      };
    });
  },


  //计算总额
  totalPrice:(state,getters) =>{
    let total = 0;
    getters.cartProducts.forEach(n =>{
      total += n.price * n.num
    });
    return total;
  },


  //计算数量

  totalNum:(state,getters) =>{
    let total = 0;
    getters.cartProducts.forEach(n =>{
      total +=n.num;
    });
    return total
  },

};


// action 异步操作
const actions={


  //添加商品到购物车  (整条信息的添加)
  addToCart({commit}, product){
    let stock = '';
    for (let i = 0; i<state.shop_list.length; i++){
      if (state.shop_list[i].id == product.id){
        stock = state.shop_list[i].stock;
      }
    }

    commit("add",{
      id:product.id,
      stock:stock
    });
  },


  //减少商品数量   (整条信息的删除)
  reduceToCart({commit},product){
    let  stock = '';
    for (let i = 0; i<state.shop_list.length; i++){
      if (state.shop_list[i].id == product.id){
        stock = state.shop_list[i].stock
      }
    }

    commit("reduce",{id:product.id, stock:stock})
  },


  //删除指定商品
  delProduct({commit},product){
    commit ("del",product);
  },




  //清除购物车
  clearAllCart({commit}){
    commit("clearAll")
  }









};

const mutations={

  //添加物品到购物车

  add(state,{id,stock}){
    let record = state.added.find( n => n.id == id);

    if (!record){
      state.added.push({
        id,
        num:1
      });
    }else {
      if (record.num >= stock){
        alert("不能再添加了");
        return;
      }
      record.num++;
    }

    //每添加一个商品到购物车，商品列表数量变动一次

    state.shop_list.map(item =>{
      if (item.id == id){
        return (item.num = item.num -1 )
      } else {
        return item
      }
    });
  },


  //减少商品 （当前这条信息的操作）
  reduce(state,{ id, stock}){

    let record = state.added.find( n => n.id == id);

    let index = state.added.indexOf(record);

    if (!record){
      return
    } else {
      if ( record.num > 1){
        record.num--;
      } else {
        state.added.splice(index, 1);
      }

    }
    //购物车每减少一个，商品列表数量变动一次
    state.shop_list.map(item =>{
      if (item.id == id){
        return (item.num = item.num+1)
      } else {
        return item
      }
    })
  },



  // 删除指定商品

  del(state,product){
    state.added.forEach((n,i) =>{
      if (n.id == product.id){
        state.added.splice(i,1);
      }
    });
  },


  //清空购物车

  clearAll(){
    state.added = [];
  }


};

export default {
  state,
  getters,
  actions,
  mutations

};
