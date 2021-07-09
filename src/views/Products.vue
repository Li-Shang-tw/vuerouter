


<template>
  <h1>商品列</h1>
     <div class="container">
        <div class="mt-4">
          <!-- 產品Modal -->
          <product ></product>
          <!-- 產品Modal -->
         
          <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td style="width: 200px">                 
                    <img :src="product.imageUrl" alt="" srcset=""  style="height: 100px; background-size: cover; background-position: center">                 
                </td>
                <td>
                  {{ product.title }}
                </td>
                <td>
                  <div class="h5">{{  }} 元</div>
                  <del class="h6">原價 {{ product.origin_price }} 元</del>
                  <div class="h5">現在只要 {{ product.price  }} 元</div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="fas fa-spinner fa-pulse"></i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="addtoCart(product.id,1)">
                      <i class="fas fa-spinner fa-pulse"></i>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 購物車列表 -->
         
        </div>
        <div class="my-5 row justify-content-center">
     
        </div>
        
      </div> 
</template>

<script>
import product from '../components/product.vue';

export default {
    data(){
    return {
     products:[],    
     
    }
  },
  methods:{
    getProductsApi(){ 
      console.log(process.env.VUE_APP_API)          
     const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
     this.$http.get(url).then(res=>{
       if(res.data.success){
       this.products =res.data.products;      
       
       }
       else{
         alert(res.data.message)
       }
       
     })
    },
    addtoCart(id,qty){
    const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
    this.$http.post(url,{ "data": { "product_id":id,"qty":qty} }).then(res=>{
      if(res.data.success){
        alert(res.data.message);
      }
      else{
      alert(res.data.message)
      }
    })
    },
    
  
  },
  mounted(){
    this.getProductsApi();  
    
    
  }, 
  components:{
product
  }
}
</script>