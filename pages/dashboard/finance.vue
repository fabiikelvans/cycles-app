<script setup lang="ts">
import {PhDownloadSimple, PhGearSix} from "@phosphor-icons/vue";
import DateRange from "~/components/ui/date/DateRange.vue";
import RevenueCard from "~/components/pages/finance/RevenueCard.vue";
import InsightCard from "~/components/pages/finance/InsightCard.vue";
import BalanceCard from "~/components/pages/finance/BalanceCard.vue";
import SalesSummary from "@/components/pages/finance/SalesSummary.vue";
import SaleCategory from "~/components/pages/finance/SaleCategory.vue";

definePageMeta({
  layout: 'layout-finance'
});

useHead({
  title: 'Cycles | Finance',
})

const tabs = [
  {
  name: "Summary",
  },
  {
    name: "Insight",
  },
  {
    name: "Service",
  },
  {
    name: "Target",
  },
]

</script>

<template>
<div class="container my-12 space-y-6">
  <div class="flex items-center justify-between">
    <div class="space-y-2">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight">
        Sales Overview
      </h1>
      <p class="text-muted-foreground">Let's see the current statistic performance </p>
    </div>

    <div class="hidden md:flex items-center space-x-3">
      <Button size="lg" variant="secondary" class="bg-white shadow-sm hover:cursor-pointer">
        <span> Export Data </span>
        <PhDownloadSimple/>
      </Button>

      <Button size="icon" variant="secondary" class="bg-white shadow-sm hover:cursor-pointer rounded-full h-11 w-11">
        <PhGearSix size="24" />
      </Button>
    </div>
  </div>

  <div class="flex items-center justify-between">
    <div class="">
      <ul class="flex items-center space-x-4">
        <li v-for="({ name }, index) in tabs" :key="index">
    <span
      :class="[
        'py-1.5 md:py-3 px-3 md:px-5 text-sm md:text-base font-light rounded-full transition-colors duration-200 flex items-center space-x-2 hover:cursor-pointer',
        index === 0 ? 'bg-black text-white' : 'bg-gray-50',
      ]"
    >
      {{ name }}
    </span>
        </li>
      </ul>

    </div>

    <div class="hidden md:block">
     <DateRange/>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <RevenueCard />
    <InsightCard/>
    <BalanceCard/>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="col-span-2">
      <SalesSummary/>
    </div>
    <div  class="col-span-1">
      <SaleCategory/>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>
