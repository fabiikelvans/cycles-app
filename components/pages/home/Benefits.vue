<script setup lang="ts">

import SectionTitle from "~/components/pages/home/SectionTitle.vue";
import BenefitCard from "~/components/pages/home/BenefitCard.vue";
import { RiBarChartFill, RiDatabase2Fill, RiSpeedFill, RiLinksFill, RiLayoutFill, RiSparklingFill } from '@remixicon/vue';

const items = [
  {
    title: "Automated Reports",
    description: "Generate reports effortlessly and stay informed with ease.",
    icon: RiBarChartFill,
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly connect Cycles with your existing tools for a unified workflow.",
    icon: RiLinksFill,
  },
  {
    title: "Boost Productivity",
    description: "Automate routine tasks to save time and enhance your team's efficiency.",
    icon: RiSpeedFill,
  },
  {
    title: "24/7 AI Support",
    description: "Get round-the-clock assistance with Cycles AI, always ready to help.",
    icon: RiSparklingFill,
  },
  {
    title: "Data Security & Compliance",
    description: "Protect your business with advanced encryption and compliance standards.",
    icon: RiDatabase2Fill,
  },
  {
    title: "Intuitive User Experience",
    description: "Start using Cycles quickly with a user-friendly, straightforward interface.",
    icon: RiLayoutFill,
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
