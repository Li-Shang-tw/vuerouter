<template>
  <h1>cart</h1>
     <!-- 購物車列表 -->
          <div class="text-end">
            <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts">清空購物車</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-for ="cart in cartData.carts" :key="cart.id">
                <tr >
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click='deleteSingleCart(cart.id)'>
                      <i class="fas fa-spinner fa-pulse"></i>
                      x
                    </button>
                  </td>
                  <td>
                    {{cart.product.title  }}
                    <div class="text-success">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <input 
                             min="1" type="number" class="form-control" v-model="cart.qty" @blur="editCart(cart.id,cart.product.id,cart.qty)">
                        <span class="input-group-text" id="basic-addon2">{{  }}</span>
                      </div>
                    </div>
                  </td>                 
                  <td class="text-end">
                    <small class="text-success">折扣價：</small>
                    {{cart. total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cartData.total }}</td>
              </tr>
              <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cartData.final_total }}</td>
              </tr>
            </tfoot>
          </table>
    <!--訂單聯絡資訊-->
        
</template>

<script>
export default {
  data(){
    return{
      cartData:[]
    }
  },
  methods:{
   getCartAPI(){
    const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
     this.$http.get(url).then(res=>{
       if(res.data.success){
       this.cartData =res.data.data;           
       }
       else{
         alert(res.data.message)
       }
       
     })
    },
    editCart(cartid,productid,qty){
      //轉換型別
      qty = parseInt(qty);
        const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cartid}`;
     this.$http.put(url,{ "data": { "product_id":productid,"qty":qty } }).then(res=>{
       if(res.data.success){
                 alert(res.data.message);
                this.getCartAPI()  
       }
       else{
         alert(res.data.message)
       }
       
     })     
    },
    deleteSingleCart(cartid){
            const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cartid}`;
     this.$http.delete(url).then(res=>{
       if(res.data.success){
                 alert(res.data.message);
                this.getCartAPI()  
       }
       else{
         alert(res.data.message)
       }
       
     })
    },
    deleteAllCarts(){
         const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
     this.$http.delete(url).then(res=>{
       if(res.data.success){
                 alert(res.data.message);
                this.getCartAPI()  
       }
       else{
         alert(res.data.message)
       }
       
     })

    }
  },
  created(){
   this.getCartAPI()
  }
}
</script>