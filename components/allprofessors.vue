<template>
    <div>
        <TeacherCard
            v-for = "teacher in professors"
            :key = "teacher.id"
            :name = "teacher.name"
            :description = "teacher.description"
            :teaches = "teacher.teaches"
            :foto = "teacher.photo"
        />
    </div>
</template>

<script>
    import TeacherCard from "@/components/teacher.vue";
    export default{
        components: {TeacherCard},
        data(){
            return{
                professors:[
                {
                    id: 1, 
                    name:"Ana Rodriguez", 
                    description: "Certified Hatha Yoga instructor with 10+ years of experience. Specializes in mindful movement and breathing techniques.", 
                    teaches:"Hatha Yoga, Yoga for Beginners, Weekend Yoga Retreat", 
                    photo: require("@/components/id1.png")
                },
                {
                    id: 2,
                    name: "Leo Kim",
                    description: "Experienced yoga teacher with a focus on balance, flexibility and breath.Trained in Yin Yoga and restorative practices.",
                    teaches: "Yin Yoga, Weekend Yoga Retreat",
                    photo: require("@/components/id2.png")
                },
                {
                    id: 3,
                    name: "Emily Stone",
                    description:"Meditation and mindfulness expert with a background in psychology.  Loves guiding early morning sessions to start the day with clarity.",
                    teaches:"Sunrise Meditation",
                    photo: require("@/components/id3.png")
                },
                {
                    id: 4,
                    name: "David Lee",
                    description: "Dynamic Vinyasa instructor passionate about creative flows and body alignment. Background in physical therapy and anatomy.",
                    teaches:"Vinyasa Flow",
                    photo: require("@/components/id4.png")
                },
                {
                    id: 5,
                    name: "Sara Bloom",
                    description: "Calm and compassionate yoga teacher focusing on stress relief and emotional balance. Specialist in Yoga Nidra and breathing techniques.",
                    teaches: "Deep Relaxation Workshop, Yoga for Stress Relief",
                    photo: require("@/components/id5.png")
                },
                ],

            };
        },
    };
</script>