<template>
  <div class="teachers-layout">
    <div class="top-row">
      <TeacherCard
        v-for="teacher in topRow"
        :key="teacher.id"
        :name="teacher.name"
        :description="teacher.bio"
        :teaches="teacher.teaches"
        :photo="teacher.photo_url"
        @click="redirectToActivities"
      />
    </div>
    <div class="bottom-row">
      <TeacherCard
        v-for="teacher in bottomRow"
        :key="teacher.id"
        :name="teacher.name"
        :description="teacher.bio"
        :teaches="teacher.teaches"
        :photo="teacher.photo_url"
        @click="redirectToActivities"
      />
    </div>
    <div v-if="loading" class="loading">Loading teachers...</div>
    <div v-if="error" class="error">Error loading teachers.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import TeacherCard from '@/components/TeacherCard.vue'

const { $supabase } = useNuxtApp()
const teachers = ref([])
const loading = ref(true)
const error = ref(null)

const fetchTeachers = async () => {
  loading.value = true
  const { data, error: fetchError } = await $supabase
    .from('teachers')
    .select('*')
     console.log('Supabase fetch result:', { data, fetchError })
  if (fetchError) {
    console.error(fetchError)
    error.value = fetchError
    loading.value = false
    return
  }
  teachers.value = data
  loading.value = false
}

onMounted(fetchTeachers)

const topRow = computed(() => teachers.value.slice(0, 3))
const bottomRow = computed(() => teachers.value.slice(3))

const router = useRouter()
const redirectToActivities = () => {
  router.push('/activities')
}
</script>

<style scoped>
.teachers-layout {
  background-color: #6a953c;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.top-row,
.bottom-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.loading {
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
.error {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>
