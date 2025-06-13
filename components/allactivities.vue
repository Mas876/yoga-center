<template>
  <div class="activity-layout">
    <ActivityCard   
      v-for="activity in activities"
      :key="activity.id"
      v-bind="activity"
      @click="redirectToTeachers"
    />
    <div v-if="loading">Loading activities...</div>
    <div v-if="error" style="color: red;">Error loading activities</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ActivityCard from '@/components/activitycard.vue'
const { $supabase } = useNuxtApp()
const activities = ref([])
const loading = ref(true)
const error = ref(null)

const fetchActivities = async () => {
  loading.value = true
  const { data, error: fetchError } = await $supabase
    .from('activities')
    .select('*')
  if (fetchError) {
    error.value = fetchError
    loading.value = false
    return
  }
  activities.value = data
  loading.value = false
}

onMounted(fetchActivities)

const router = useRouter()
const redirectToTeachers = () => {
  router.push('/teachers')
}
</script>

<style scoped>
.activity-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 40px;
  justify-content: center;
  background-color: #6a953c;
}
</style>
