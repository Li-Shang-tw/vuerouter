<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">六腳電商</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
       <router-link to="/" class="nav-item nav-link">Home</router-link> 
        <router-link to="/products" class="nav-item nav-link">商品頁</router-link>
    <router-link to="/cart" class="nav-item nav-link">前台購物車</router-link> 
    <router-link to="/admin/products" class="nav-item nav-link">後台商品頁</router-link> 
    </div>
  </div>
</nav>
  <div class="nav">
   
  </div>
  <router-view />
</template>

<style lang="scss">
@import './assets/all.scss';
</style>
