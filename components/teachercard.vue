<template>
  <!-- Show every teacher card -->
  <div class="teacher-card">
    <img :src="photo" :alt="`Photo of ${name}`" class="teacher-photo"/>
    <h2 class="teacher-name">{{ name }}</h2>
    <h4 class="teacher-description">{{ description }}</h4>
    <div class="teacher-teaches">
      <strong>Activities:</strong>
      <ul>
        <li v-for="activity in teaches.split(', ')" :key="activity">{{ activity }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teaches: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.teacher-card {
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 16px auto;
}
.teacher-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 4px solid #e0e0e0;
}
.teacher-name {
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0 12px;
  color: #222;
}
.teacher-description {
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
  line-height: 1.5;
}
.teacher-teaches {
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
  line-height: 1.5;
  text-align: left;
}
.teacher-teaches ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 4px 0 0 0;
  text-align: left;
}
.teacher-teaches strong {
  display: block;
  margin-bottom: 4px;
}
.teacher-card {
  transition:
    box-shadow 0.2s cubic-bezier(.25,.8,.25,1),
    transform 0.2s cubic-bezier(.25,.8,.25,1),
    border-color 0.2s,
    background-color 0.2s;
}
.teacher-card:hover {
  box-shadow: 0 8px 32px rgba(106, 149, 60, 0.18);
  transform: translateY(-8px) scale(1.03);
  background-color: #f4ffe4;
  border-color: #7fb800;
  cursor: pointer;
}
.teacher-photo {
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1);
}
.teacher-card:hover .teacher-photo {
  transform: scale(1.08) rotate(3deg);
}

</style>
