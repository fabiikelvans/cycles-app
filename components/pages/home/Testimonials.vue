<script setup lang="ts">
import SectionTitle from "~/components/pages/home/SectionTitle.vue";
import TestimonialCard from "~/components/pages/home/TestimonialCard.vue";

const items = [
  {
    testimonial: "Cycles has streamlined our workflow like never before. The automation tools are intuitive, saving us countless hours every week.",
    name: "James Sullivan",
    designation: "CEO of TechCorp",
    bgColor: "bg-green-400/20",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    testimonial: "Cycles seamless integration with our existing tools was a game-changer. It’s like having an extra team member handling everything!",
    name: "Alex Patel",
    designation: "Co-founder of HealthTech",
    bgColor: "bg-gray-50/20",
    avatar: "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    testimonial: "Switching to Cycles was the best decision. It’s user-friendly, powerful, and perfectly tailored to our business needs.”",
    name: "Michael Chen",
    designation: "CEO of InnovateCo",
    bgColor: "bg-purple-400/20",
    avatar: "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    testimonial: "The AI-powered insights from Aurix have been invaluable. It’s not just a platform; it’s a partner in growing our business.",
    name: "Robert Kim",
    designation: "CEO of HappyWork Ltd.",
    bgColor: "bg-gray-50/20",
    avatar: "https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    testimonial: "Cycles has everything we need to keep our team on track. The collaboration features alone have made a huge difference for us.",
    name: "Eric Rodriguez",
    designation: "Founder of GlobalServe",
    bgColor: "bg-orange-400/20",
    avatar: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    testimonial: "Managing tasks and communication in one place? Cycle nailed it. Our productivity has skyrocketed since we started using it!",
    name: "David Thompson",
    designation: "Founder of ScaleUp",
    bgColor: "bg-blue-400/20",
    avatar: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  ]
</script>

<template>
<div>
  <SectionTitle
    base="Testimonials"
    title="Don't Just Take Our Word for It"
    description="Hear from real users who have transformed their workflows with the power of Cycles."
  />

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TestimonialCard
    v-for="(item, index) in items"
    :key="index"
    :testimonial="item.testimonial"
    :name="item.name"
    :designation="item.designation"
    :avatar="item.avatar"
    :bg-color="item.bgColor"
    />
  </div>
</div>
</template>

<style scoped>

</style>
