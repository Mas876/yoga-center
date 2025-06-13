<template>
  <div class="box">
  <AppHeader />
  <h1>Welcome to the Yoga Center</h1>
  <section id= "activities">
    <h2>Meet our activities</h2>
    <ActivitiesList />
  </section>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import ActivitiesList from '@/components/allactivities.vue'

</script>
<style scoped>
.box {
  padding: 10px;
  background-color: lightblue;
}

@media (min-width: 768px) {
  .box {
    padding: 30px;
  }
}
</style>

