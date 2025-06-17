<template>
  <div style="background-color: #6a953c;">
   <!-- Navbar -->
   <AppHeader />

<!--Map of Milano-->
  <v-img src="/images/map.png" alt="Imagen local"></v-img>
  
   <!-- Footer -->  
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

</script>

