import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const supabaseUrl = 'https://whpplsmodntqdeigfbky.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndocHBsc21vZG50cWRlaWdmYmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNzE5OTgsImV4cCI6MjA2NDY0Nzk5OH0.yDBTYsSPJ4TUZvRHF_l2bX_oR3zoX25-cLuSY9EiVb0'
  const supabase = createClient(supabaseUrl, supabaseKey)
  nuxtApp.provide('supabase', supabase)
})

