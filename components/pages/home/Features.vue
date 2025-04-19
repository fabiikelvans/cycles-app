<script setup lang="ts">

import SectionTitle from "~/components/pages/home/SectionTitle.vue";
import FeatureCard from "~/components/pages/home/FeatureCard.vue";

const items = [
  {
    title: "Automate Workflow & Tasks\n",
    description: "Set up automation rules in seconds and let Aurix handle the heavy lifting, so your team can focus on what really matters.",
    image: "/features/1.avif",

  },
  {
    title: "Smart Communication",
    description: "Stay connected and collaborate seamlessly, all in one place with integrated messaging and conferencing tools.",
    image: "/features/2.avif",
  },
  {
    title: "AI Teammate",
    description: "Cycle's AI handles tasks and predicts timelines to keep you on track.",
    image: "/features/3.avif",
  },
  {
    title: "Computer Vision & Image Recognition",
    description: "Unlock new possibilities with our cutting-edge computer vision technology.  Our AI can analyze and interpret visual data",
    image: "/features/5.avif",
  },

  {
    title: "Simple Task Tracking",
    description: "View your work as a to-do list that captures every task in a project or process in one place.",
    image: "/features/4.avif",
  },
];
</script>

<template>
  <div>
    <SectionTitle
      base="Features"
      title="Powerful Features for Enhanced Productivity"
      description="Discover the features that can take your business workflow to the next level."
    />

    <!-- Top Row (3 Columns) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <FeatureCard
        v-for="(item, index) in items.slice(0, 3)"
        :key="index"
        :title="item.title"
        :description="item.description"
        :image="item.image"
      />
    </div>

    <!-- Bottom Row (2 Columns) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FeatureCard
        v-for="(item, index) in items.slice(3)"
        :key="index + 3"
        :title="item.title"
        :description="item.description"
        :image="item.image"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
