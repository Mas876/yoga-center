<template>
  <!-- First row of teachers cards-->
  <div class="teachers-layout">
    <div class="top-row">
      <TeacherCard class="pointer"
        v-for="teacher in topRow"
        :key="teacher.id"
        :name="teacher.name"
        :description="teacher.bio"
        :teaches="teacher.teaches"
        :photo="teacher.photo_url"
        @click="redirectToActivities"
      />
    </div>
    <!-- Second row of teachers cards-->
    <div class="bottom-row">
      <TeacherCard class="pointer"
        v-for="teacher in bottomRow"
        :key="teacher.id"
        :name="teacher.name" 
        :description="teacher.bio"
        :teaches="teacher.teaches"
        :photo="teacher.photo_url"
        @click="redirectToActivities"

      />
    </div>
    <!-- Texts for loading and error-->
    <div v-if="loading" class="loading">Loading teachers...</div>
    <div v-if="error" class="error">Error loading teachers.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import TeacherCard from '@/components/teachercard.vue'

const { $supabase } = useNuxtApp()
const teachers = ref([])
const loading = ref(true)
const error = ref(null)

/* Function for fetching teachers */
const fetchTeachers = async () => {
  loading.value = true

  const { data: teachersRaw, error: e1 } = await $supabase
    .from('teachers')
    .select('id, name, bio, photo_url')

  if (e1) { error.value = e1; loading.value = false; return }

  
  const { data: links, error: e2 } = await $supabase
    .from('teacher_activities')
    .select('teacher_id, activity_id')

  if (e2) { error.value = e2; loading.value = false; return }

  const { data: acts, error: e3 } = await $supabase
    .from('activities')
    .select('id, name')    

  if (e3) { error.value = e3; loading.value = false; return }

  const nameById = Object.fromEntries(acts.map(a => [a.id, a.name]))
  const namesByTeacher = {}
  links.forEach(l => {
    (namesByTeacher[l.teacher_id] ||= []).push(nameById[l.activity_id])
  })

  teachers.value = teachersRaw.map(t => ({
    id:        t.id,
    name:      t.name,
    bio:       t.bio,
    photo_url: t.photo_url,
    teaches:   (namesByTeacher[t.id] || []).join(', ')
  }))

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

.pointer {
  cursor: pointer;
}

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
