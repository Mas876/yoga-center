<template>
    <div class = "teacher card">
        <img : src = "photo" alt = "teacher card" class = "teachercard" />
        <h2 class = "name">{{ name }}</h2>
        <h4 class = "description">{{description}}</h4>
        <h4 class = "teaches">{{teaches}}</h4>
    </div>
</template>

<script>
export default{
    name: "TeacherCard",
    props:{
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
        photo:{
            type: String,
            required: true,
        }
    },
};
</script>

<style>
    .teacher-card{
        border-radius: 12px;
        padding: 24px;
        width: 280px;
        background-color: #f9f9f9;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        margin: 16px auto;
    }
    .teacher-photo{
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 16px;
        border: 4px solid #e0e0e0;
    }
    .teacher-name{
        font-size: 20px;
        font-weight: 600;
        margin: 8px 0 12px;
        color: #222;
    }
    .teacher-description{
        font-size: 14px;
        color: #444;
        margin-bottom: 8px;
        line-height: 1.4;
    }
</style>