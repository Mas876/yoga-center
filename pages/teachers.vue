<template>
   <div style="background-color: #6a953c;">
  <AppHeader />
  <h1>Welcome to the Yoga Center</h1>
  <section id = "teachers">
    <h2>Meet Our Teachers</h2>
    <TeacherList />
  </section>
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import TeacherList from '@/components/allprofessors.vue'

</script>

