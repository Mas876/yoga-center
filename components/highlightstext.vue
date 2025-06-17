<template>
  <div class="highlights-layout">
    <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;" class="text-white">Highlights</h1>
    <div class="top-row">
      <div
        v-for="highlight in topRow"
        :key="highlight.id"
        class="highlight-card pointer"
        @click="redirectToTeachers"
      >
        <img :src="highlight.photo" :alt="'Photo of ' + highlight.name" class="highlight-photo" />
        <h2 class="highlight-name">{{ highlight.name }}</h2>
        <h4 class="highlight-description">{{ highlight.description }}</h4>
        <p v-if="highlight.schedule" class="highlight-schedule">{{ highlight.schedule }}</p>
        <p v-if="highlight.duration" class="highlight-duration">{{ highlight.duration }}</p>
      </div>
    </div>
    <div class="bottom-row">
      <div
        v-for="highlight in bottomRow"
        :key="highlight.id"
        class="highlight-card pointer"
        @click="redirectToTeachers"
      >
        <img :src="highlight.photo" :alt="'Photo of ' + highlight.name" class="highlight-photo" />
        <h2 class="highlight-name">{{ highlight.name }}</h2>
        <h4 class="highlight-description">{{ highlight.description }}</h4>
        <p v-if="highlight.schedule" class="highlight-schedule">{{ highlight.schedule }}</p>
        <p v-if="highlight.duration" class="highlight-duration">{{ highlight.duration }}</p>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading highlights...</div>
    <div v-if="error" class="error">Error loading highlights.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const { $supabase } = useNuxtApp()
const highlights = ref([])
const loading = ref(true)
const error = ref(null)

const fetchHighlights = async () => {
  loading.value = true
  const { data, error: fetchError } = await $supabase
    .from('activities')
    .select('*')
    .eq('highlight', true)
  if (fetchError) {
    error.value = fetchError
    loading.value = false
    return
  }
  highlights.value = data
  loading.value = false
}

onMounted(fetchHighlights)

const router = useRouter()
const redirectToTeachers = () => {
  router.push('/teachers')
}

const topRow = computed(() => highlights.value.slice(0, 2))
const bottomRow = computed(() => highlights.value.slice(2, 4))
</script>

<style scoped>
.highlights-layout {
  background-color: #6a953c;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}
.top-row,
.bottom-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.highlight-card {
  background-color: #6a953c;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  width: 45%;
  min-width: 300px;
}
.highlight-photo {
  width: 120px;
  border-radius: 50%;
  margin-top: 1rem;
}
.highlight-name {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
.highlight-description,
.highlight-schedule,
.highlight-duration {
  margin-bottom: 0.5rem;
}
.highlight-schedule,
.highlight-duration {
  white-space: pre-wrap;
  margin-bottom: 0.5rem;
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

.pointer {
  cursor: pointer;
}

</style>
