<template>
  <html lang="en"></html>
  <div style="background-color: #6a953c;">
     <!-- Navbar -->
    <AppHeader />
    <VApp>
    <v-main style="background-color: #6a953c;">

      
        <h1>Welcome to the Yoga Center</h1>

           <!-- Photo of yoga in the montain -->
        <v-sheet
  :style="'background: url(/images/home1.jpeg) no-repeat center center; background-size: cover;'"
  height="500"
  class="d-flex align-center"
>
      <!--Text and buttom inside the photo-->
         
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <h1 class="text-h2 font-weight-bold mb-4" style="color: white !important;">Find your inner peace</h1>
              <v-btn color="primary" size="large" to="/activities">Explore Our Activities</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      
      <!-- List of the features activities-->
      <v-container class="my-16" >
        <h2 class="text-h4 font-weight-bold mb-8 text-center">Featured activities</h2>
        
        <v-row>
          <v-col cols="12" md="3" v-for="(activity, index) in activities" :key="index">
            <v-card variant="flat" class="pa-4" to="/highlights">
              <v-img
                :src="activity.image"
                height="200"
                alt="activity"
                cover
                class="mb-4 pointer"
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
  { title: 'Sunrise meditation', image: '/images/sunrise.jpeg' },
  { title: 'Weekend Yoga Retreat', image: '/images/yogaretrait.jpeg' },
  { title: 'Vinyasa Flow', image: '/images/vinyasa.jpeg' },
  { title: 'Deep Relaxation Workshop', image: '/images/deeprelaxation.jpeg' }
]
</script>

 <style scoped>

.pointer {
  cursor: pointer;
}
</style>