<template>
    <div class = "activity-card">
        <img :src="photo" alt="`Photo of ${name}`" class="activity-photo"/>
        <div class="activity-text">
            <h2 class = "activity-name">{{ name }}</h2>
            <h4 class = "activity-description">{{description}}</h4> 
        </div>
    </div>
</template>

<script>
export default{
    name: "ActivityCard",
    props:{
        name: {
            type: String,
            required: true,
        },
        description:{
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

<style scoped>
    .activity-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e0e0e0;
        border: 4px solid #33691e;
        border-radius: 8px;
        padding: 16px;
        max-width: 600px;
        margin: 16px auto;
    }
    .activity-photo{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 16px;
    }
    .activity-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
    }
    .activity-name{
        font-weight: bold;
        font-size: 16px;
        margin-bottom:8px;
        text-align: left;
    }
    .activity-description{
        font-size: 14px;
        color: #333;
        text-align: left;
        line-height: 1.5;
    }
</style>