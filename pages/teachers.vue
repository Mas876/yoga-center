<template>
   <div style="background-color: #6a953c;">

     <!-- Navbar -->
  <AppHeader />

<!--List of Teachers-->
  <section id = "teachers">
    <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; margin-left: 2.5rem;" class="text-white">Meet Our Teachers</h1>
    <TeacherList />
  </section>

   <!-- Footer -->
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import TeacherList from '@/components/allprofessors.vue'

</script>

