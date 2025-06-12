<template>
  <AppHeader />
  <h1>Welcome to the Yoga Center</h1>
  <highlightstext/>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import highlightstext from '@/components/highlightstext.vue'
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
