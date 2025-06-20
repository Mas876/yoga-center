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
  background-color: #fff;  
  color: #333;             
  padding: 1.5rem;
  border-radius: 18px;
  width: 45%;
  min-width: 300px;
  box-shadow: 0 6px 24px rgba(52, 105, 30, 0.12);
  transition: 
    box-shadow 0.2s cubic-bezier(.25,.8,.25,1), 
    transform 0.2s cubic-bezier(.25,.8,.25,1);
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

.highlight-card {
  border: 2.5px solid #7fb800; 
  position: relative;
  overflow: hidden;
}

.highlight-card:hover {
  box-shadow: 0 16px 48px rgba(52, 105, 30, 0.21);
  transform: translateY(-8px) scale(1.04);
  border-color: #33691e;
  background-color: #f4ffe4;
  transition:
    box-shadow 0.22s cubic-bezier(.25,.8,.25,1),
    transform 0.22s cubic-bezier(.25,.8,.25,1),
    border-color 0.22s,
    background-color 0.22s;
}

.highlight-photo {
  transition: transform 0.32s cubic-bezier(.25,.8,.25,1);
}

.highlight-card:hover .highlight-photo {
  transform: scale(1.09) rotate(-2deg);
}


</style>
