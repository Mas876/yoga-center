<template>
   <AppHeader />

  <h1>Welcome to the Yoga Center</h1>

  <v-img src="/images/map.png" alt="Imagen local"></v-img>
  
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

</script>
<style scoped>
  .box{
    padding:10px;
    background-color: lightblue;
  }
  @media (min-width:768px){
    .box{
      padding:30px;
    }
  }
</style>
