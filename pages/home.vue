<template>
  <div>
    <AppHeader />
    <VApp>
    <v-main>
      
      <v-sheet color="grey-lighten-4" height="500" class="d-flex align-center">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <h1 class="text-h2 font-weight-bold mb-4">Find your inner peace</h1>
              <v-btn color="primary" size="large">Explore Our Activities</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      
      
      <v-container class="my-16">
        <h2 class="text-h4 font-weight-bold mb-8 text-center">Featured activities</h2>
        
        <v-row>
          <v-col cols="12" md="3" v-for="(activity, index) in activities" :key="index">
            <v-card variant="flat" class="pa-4">
              <v-img
                :src="activity.image"
                height="200"
                cover
                class="mb-4"
              ></v-img>
              <v-card-title class="text-h6">{{ activity.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    </VApp>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

const activities = [
  { title: 'Sunrise meditation', image: '/images/sunrise-meditation.jpg' },
  { title: 'Weekend Yoga Retreat', image: '/images/weekend-retreat.jpg' },
  { title: 'Vinyasa Flow', image: '/images/vinyasa-flow.jpg' },
  { title: 'Deep Relaxation Workshop', image: '/images/relaxation-workshop.jpg' }
]
</script>

