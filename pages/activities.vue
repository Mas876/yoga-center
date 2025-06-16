<template>
   <div style="background-color: #6a953c;">
  <AppHeader />
  <section id= "activities">
    <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; margin-left: 2.5rem;" class="text-white">Meet our activities</h1>

    <ActivitiesList />
  </section>
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import ActivitiesList from '@/components/allactivities.vue'

</script>


