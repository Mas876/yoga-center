<template>
  <div class="teachers-layout">
    <div class="top-row">
      <TeacherCard
        v-for="teacher in topRow"
        :key="teacher.id"
        v-bind="teacher"
      />
    </div>
    <div class="bottom-row">
      <TeacherCard
        v-for="teacher in bottomRow"
        :key="teacher.id"
        v-bind="teacher"
      />
    </div>
  </div>
</template>

<script>
import TeacherCard from "@/components/TeacherCard.vue";

export default {
  components: { TeacherCard },
  data() {
    return {
      topRow: [
        {
          id: 1,
          name: "Ana Rodriguez",
          description:
            "Certified Hatha Yoga instructor with 10+ years of experience. Specializes in mindful movement and breathing techniques.",
          teaches:
            "Hatha Yoga, Yoga for Beginners, Weekend Yoga Retreat",
          photo: "/images/id1.png",
        },
        {
          id: 2,
          name: "Leo Kim",
          description:
            "Experienced yoga teacher with a focus on balance, flexibility and breath. Trained in Yin Yoga and restorative practices.",
          teaches: "Yin Yoga, Weekend Yoga Retreat",
          photo: "/images/id2.png",
        },
        {
          id: 3,
          name: "Emily Stone",
          description:
            "Meditation and mindfulness expert with a background in psychology. Loves guiding early morning sessions to start the day with clarity.",
          teaches: "Sunrise Meditation",
          photo: "/images/id3.png",
        },
      ],
      bottomRow: [
        {
          id: 4,
          name: "David Lee",
          description:
            "Dynamic Vinyasa instructor passionate about creative flows and body alignment. Background in physical therapy and anatomy.",
          teaches: "Vinyasa Flow",
          photo: "/images/id4.png",
        },
        {
          id: 5,
          name: "Sara Bloom",
          description:
            "Calm and compassionate yoga teacher focusing on stress relief and emotional balance. Specialist in Yoga Nidra and breathing techniques.",
          teaches: "Deep Relaxation Workshop, Yoga for Stress Relief",
          photo: "/images/id5.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.teachers-layout {
  background-color: #6a953c;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.top-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.bottom-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
