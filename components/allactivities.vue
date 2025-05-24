<template>
    <div class="activity-layout">
        <ActivityCard   
            v-for="activity in activities"
            :key="activity.id"
            v-bind="activity"
        />
    </div>
</template>

<script>
import ActivityCard from "@/components/activitycard.vue";

export default{
    components: { ActivityCard },
    data(){
        return{
            activities: [
                {
                    id: 1,
                    name: "Vinyasa Flow",
                    description: 
                    "It is a dynamic practice that allows you to strengthen, flex, and balance your body and mind, guided by  David Lee.",
                    photo: "/images/activity1.png",
                },
                {
                    id: 2,
                    name: "Hatha Yoga",
                    description: 
                    "A balanced practice that combines breath, movement, and alignment to build strength, flexibility, and mindfulness, guided by Ana Rodriguez.",
                    photo: "/images/activity2.png",
                },
                {
                    id: 3,
                    name: "Sunrise meditation",
                    description: 
                    "Start your day with peace through a guided meditation that awakens your body with the first light of dawn, guided by Emily Stone.",
                    photo: "/images/activity3.png",
                },
                {
                    id: 4,
                    name: "Weekend Yoga Retreat",
                    description: 
                    "Escape, relax, and recharge with a rejuvenating weekend of yoga, meditation, guided by  Ana Rodriguez and Leo Kim.",
                    photo: "/images/activity4.png",
                },
                {
                    id: 5,
                    name: "Yoga for Beginners",
                    description: 
                    "Start your journey with simple and accessible poses that build strength, flexibility, and inner peace.guided by Ana Rodriguez",
                    photo: "/images/activity5.png",
                },
                {
                    id: 6,
                    name: "Deep Relaxation Workshop",
                    description: 
                    "Unwind, release tension, and restore your energy with guided techniques for profound relaxation and inner peace, guided by Sara Bloom.",
                    photo: "/images/activity6.png",
                },
                {
                    id: 7,
                    name: "Yin yoga",
                    description: 
                    "A slow, deep practice that enhances flexibility, relieves tension, and promotes relaxation through long-held poses, guided by  Leo Kim.",
                    photo: "/images/activity7.png",
                },
                {
                    id: 8,
                    name: "Yoga for Stress Relief",
                    description: "Calm your mind and body with gentle poses, breathwork, and relaxation techniques to release tension",
                    photo: "/images/activity8.png",
                }
            ],
        }
    },
};
</script>

<style scoped>
    .activity-layout{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
        padding: 40px;
        justify-content: center;
        background-color: #6a953c;
    }
</style>