<template>
  <div>
    <AppHeader />
    
    <v-main>
      <v-container class="my-10">
        
        <h1 class="text-h3 font-weight-bold mb-6">Contact Us</h1>
        
        <v-row>
          
          <v-col cols="12" md="6" class="pe-md-8">
            <v-card variant="flat" class="pa-6 bg-grey-lighten-4 rounded-lg">
              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">Find us</h2>
                <p class="mb-0">Via Garibaldi 9, 20121 Milan, Italy</p>
                <p>(Near Sempione Park, in the city center)</p>
              </section>
              
              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">Contact info</h2>
                <p class="mb-2">+39 02 1234 5678</p>
                <p class="mb-0">
                  <a href="mailto:info@omyoga.com" class="text-decoration-none">info@omyoga.com</a>
                </p>
              </section>
              
              <section>
                <h2 class="text-h5 font-weight-bold mb-4">Opening Hours</h2>
                <p class="mb-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p class="mb-0">Saturday: 9:00 AM - 3:00 PM</p>
              </section>
            </v-card>
          </v-col>
          
          
          <!--<v-col cols="12" md="6">
            <v-card variant="flat" class="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.044561041535!2d9.18372231557193!3d45.50597297910138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c149346a0aa1%3A0x3d8f2a4c8e7e3b1a!2sVia%20Garibaldi%2C%209%2C%2020121%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses"
                width="100%"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </v-card>
          </v-col>-->
        </v-row>
      </v-container>
    </v-main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
</script>

<style scoped>

a {
  color: inherit; 
  transition: color 0.3s ease;
}

a:hover {
  color: #4CAF50; 
}
</style>

<!--<template>
   <AppHeader />

  <h1>Welcome to the Yoga Center</h1>
  <h2> Our story</h2>
  <p> Our yoga center was born from a deep passion for sharing the physical, 
    mental, and spiritual benefits of this ancient practice. Founded in 2012, 
    it began as a small space in Milano, where a group of yoga enthusiasts gathered 
    to explore the harmony between body and mind. Over time, thanks to the support of our community,
     we have grown into a sanctuary of wellness in Via Garibaldi 9, guiding students every day toward a more 
     balanced and mindful life.</p>
  <h2>Our inspiration</h2>
  <p>We believe yoga is more than just poses—it's a transformative tool that helps people reconnect with themselves,
     reduce stress, and find inner clarity. We are inspired by watching our students discover strength, flexibility, 
     and peace through their practice. Our mission is to make yoga accessible to everyone, regardless of age, fitness level, 
     or experience, fostering an inclusive and judgment-free space.</p>
  <h2>Our goal</h2>
  <h2>Join our Family</h2>
  <p>At Om Yoga Centre, we don't just teach yoga—we share a way of life. We invite you to discover how this practice can transform
     your daily routine. Your journey to harmony starts here!</p>
  
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

</script>-->