<template>
  <div class="highlights-layout">
    <div class="top-row">
      <div
        v-for="highlight in topRow"
        :key="highlight.id"
        class="highlight-card"
      >
        <img :src="highlight.photo" :alt="'Photo of ' + highlight.name" class="highlight-photo" />
        <h2 class="highlight-name">{{ highlight.name }}</h2>
        <h4 class="highlight-description">{{ highlight.description }}</h4>
        <p class="highlight-schedule">{{ highlight.schedule }}</p>
        <p class="highlight-duration">{{ highlight.duration }}</p>
      </div>
    </div>
    <div class="bottom-row">
      <div
        v-for="highlight in bottomRow"
        :key="highlight.id"
        class="highlight-card"
      >
        <img :src="highlight.photo" :alt="'Photo of ' + highlight.name" class="highlight-photo" />
        <h2 class="highlight-name">{{ highlight.name }}</h2>
        <h4 class="highlight-description">{{ highlight.description }}</h4>
        <p class="highlight-schedule">{{ highlight.schedule }}</p>
        <p class="highlight-duration">{{ highlight.duration }}</p>
      </div>
    </div>
  </div>


</template>

<script setup>
const topRow = [
  {
    id: 1,
    name: "Sunrise Meditation",
    description:
      "Immerse yourself in a revitalizing meditation experience as the sun rises over the horizon. Sunrise Meditation is a practice designed to balance your mind, relax your body, and set a positive intention for the day.",
    schedule:
      "Schedule:\nTeaching every morning from 6:00 a.m. to 7:00 a.m.,\n with Professor Ana Rodriguez.",
    duration:
      "Duration:\n Each session lasts 60 minutes, divided into:\n 10 minutes of conscious breathing and preparation.\n 40 minutes of guided meditation.10 minutes of closing reflection and gratitude.",
    photo: "/images/highlight1.png",
  },
  {
    id: 2,
    name: "Weekend Yoga Retreat",
    description:
      "Enjoy a weekend retreat designed to renew your energy, reduce stress, and deepen your yoga practice. Weekend Yoga Retreat combines yoga, meditation, and healthy eating in a tranquil, natural setting.",
    schedule:
      "Schedule:\n From Friday at 5:00 p.m. to Sunday at 12:00 p.m.\n with Professor Leo Kim",
    duration:
      "Duration:\n A total of 48 hours, including:\n Morning and afternoon yoga classes.\n Guided meditation at sunrise and sunset.\n Mindfulness and wellness workshops.\n Healthy meals and time for rest.",
    photo: "/images/highlight2.png",
  },
];

const bottomRow = [
  {
    id: 3,
    name: "Vinyasa Flow",
    description:
      "Let yourself be carried away by the fluidity of movement with Vinyasa Flow, a dynamic practice where breathing and postures come together in a harmonious dance.",
    schedule:
      "Schedule:\n Tuesdays and Thursdays from 7:00 p.m. to 8:00 p.m.,\n with Professor David Lee",
    duration:
      "Duration:\n Each session lasts 60 minutes, divided into:\n 10 minutes of warm-up and breathing.\n 40 minutes of fluid posture sequence.\n 10 minutes of relaxation and final meditation.",
    photo: "/images/highlight3.png",
  },
  {
    id: 4,
    name: "Deep Relaxation Workshop",
    description:
      "Immerse yourself in a profound experience of relaxation and well-being with the Deep Relaxation Workshop, designed to reduce stress, calm the mind, and restore inner balance.",
    schedule:
      "Schedule:\n One Saturday a month from 4:00 p.m. to 6:00 p.m.\n with Professor Sara Bloom",
    duration:
      "Duration:\n Each workshop lasts 2 hours and includes\n: Deep breathing techniques and guided relaxation.\n Restorative yoga and meditation practices.\n Sound therapy with Tibetan singing bowls and healing vibrations.",
    photo: "/images/highlight4.png",
  },
];
</script>

<style scoped>
.highlights-layout {
  background-color: #7a9a3d;
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
  background-color: #7a9a3d;
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
</style>
