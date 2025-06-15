<template>
   <div style="background-color: #6a953c;">
  <!-- Navbar -->
  <AppHeader />
  <!--Text for Contacts-->
  <AppContact/>
  <!-- Footer -->
  <AppFooter />
  </div>
</template>



<script setup>
import AppHeader from '@/components/header.vue'
import AppContact from '@/components/textContacts.vue'
import AppFooter from '@/components/footer.vue'
</script>


