<template>
  <h1>後台產品列</h1>
   <div class="container">
    <tr v-for="product in products" :key="product.id">
              <td>{{product.category}}</td>
              <td>{{product.title}}</td>
              <td class="text-end">{{product.origin_price}}</td>
              <td class="text-end">{{product.price}}</td>
              <td>
                <span v-if="product.is_enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"                   
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"                   
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
            </div>

</template>

<script>
const url ='https://vue3-course-api.hexschool.io/api/shang/admin/products'
export default {
  data(){
    return{
products:[]
    }
  },
  methods:{
    getProductAPi(){
      this.$http.get(url).then(res=>{
        if(res.data.success){          
          this.products = res.data.products;
        }
        else{
          alert(res.data.message)
        }
      })
    }

  },
  created(){
     this.getProductAPi()
  }

}
</script>