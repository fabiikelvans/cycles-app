<script setup lang="ts">

import {Card} from "~/components/ui/card";
import {PhChartLineUp, PhDotsThreeVertical} from "@phosphor-icons/vue";
import BudgetGraph from "~/components/pages/analytics/BudgetGraph.vue";
</script>

<template>
<Card class="bg-neutral-900 border-none text-white px-4">
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <PhChartLineUp size="20" />
        <h4> Analytics </h4>
      </div>

      <div class="flex items-center justify-center p-3 bg-neutral-800 rounded-full">
        <PhDotsThreeVertical />
      </div>
    </div>

    <div class="mt-6">
      <BudgetGraph />
    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
