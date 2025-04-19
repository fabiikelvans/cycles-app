<script setup lang="ts">

import SectionTitle from "~/components/pages/home/SectionTitle.vue";
import BenefitCard from "~/components/pages/home/BenefitCard.vue";
import { PhChartBar, PhDatabase, PhGauge, PhIntersect, PhLayout, PhSparkle } from "@phosphor-icons/vue";

const items = [
  {
    title: "Automated Reports",
    description: "Generate reports effortlessly and stay informed with ease.",
    icon: PhChartBar,
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly connect Cycles with your existing tools for a unified workflow.",
    icon: PhIntersect,
  },
  {
    title: "Boost Productivity",
    description: "Automate routine tasks to save time and enhance your team's efficiency.",
    icon: PhGauge,
  },
  {
    title: "24/7 AI Support",
    description: "Get round-the-clock assistance with Cycles AI, always ready to help.",
    icon: PhSparkle,
  },
  {
    title: "Data Security & Compliance",
    description: "Protect your business with advanced encryption and compliance standards.",
    icon: PhDatabase,
  },
  {
    title: "Intuitive User Experience",
    description: "Start using Cycles quickly with a user-friendly, straightforward interface.",
    icon: PhLayout,
  },
];
</script>

<template>
<div>
  <SectionTitle
    base="Benefits"
    title="Why Businesses Choose Cycles"
    description="Unlock the full potential of your business with unparalleled efficiency and productivity."
  />

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <BenefitCard
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :description="item.description"
      :icon="item.icon"
    />

  </div>
</div>
</template>

<style scoped>

</style>
