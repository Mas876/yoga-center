<template>
  <div style="background-color: #6a953c;">
    <AppHeader />
    
    <main style="max-width: 1200px; margin: 0 auto; padding: 20px; background-color: #6a953c;" class="text-white">
      <!-- Sección Our Story -->
      <section style="margin-bottom: 40px;">
        <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;">Our story</h1>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          Our yoga center was born from a deep passion for sharing the physical, mental,
          and spiritual benefits of this ancient practice. Founded in 2012, it began as a
          small space in Milano, where a group of yoga enthusiasts gathered to explore
          the harmony between body and mind.
        </p>
        <p style="line-height: 1.6;">
          Over time, thanks to the support of our
          community, we have grown into a sanctuary of wellness in Via Garibaldi 9,
          guiding students every day toward a more balanced and mindful life.
        </p>
      </section>

      <!-- Sección Our Inspiration -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;">Our inspiration</h2>
        <p style="line-height: 1.6;">
          We believe yoga is more than just poses—it's a transformative tool that helps
          people reconnect with themselves, reduce stress, and find inner clarity. We are
          inspired by watching our students discover strength, flexibility, and peace
          through their practice. Our mission is to make yoga accessible to everyone,
          regardless of age, fitness level, or experience, fostering an inclusive and
          judgment-free space.
        </p>
      </section>

      <!-- Sección Our Goals -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;">Our goal</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div v-for="(goal, index) in goals" :key="index" 
               style="padding: 30px 20px; background-color: #B8A47E; border-radius: 50%/30%; 
                      display: flex; flex-direction: column; align-items: center; text-align: center;
                      min-height: 180px; justify-content: center;">
            <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.5rem;">{{ goal.title }}</h3>
            <p style="line-height: 1.5;">{{ goal.description }}</p>
          </div>
        </div>
      </section>

      <!-- Sección Join our family -->
      <section style="margin-bottom: 40px; padding: 40px; background-color: #4CAF50; color: white; text-align: center; border-radius: 8px;">
        <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">Join our family</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
          At Om Yoga Centre, we don't just teach yoga—we share a way of life. We invite
          you to discover how this practice can transform your daily routine. Your journey
          to harmony starts here!
        </p>
        <a href="/contacts" style="display: inline-block; padding: 10px 20px; border: 2px solid white; border-radius: 4px; color: white; text-decoration: none;">
          Contact Us
        </a>
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

const goals = [
  {
    title: 'Promote Holistic Well-being',
    description: 'Through classes designed to balance body, mind, and emotions.'
  },
  {
    title: 'Adapt to Your Needs',
    description: 'We offer a variety of styles and levels, from beginners to advanced practitioners.'
  },
  {
    title: 'Build Community',
    description: 'We want everyone who walks through our doors to feel welcomed and part of a family.'
  },
  {
    title: 'Cultivate Awareness',
    description: 'We integrate mindfulness, breathwork, and meditation into our sessions.'
  }
]
</script>


