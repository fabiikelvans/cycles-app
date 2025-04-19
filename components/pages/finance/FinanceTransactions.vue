<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import {BarChart, LegendPosition, LineChart} from 'vue-chrts'

type RevenueDataItem = {
  month: string
  desktop: number
  mobile: number
}

const RevenueData: RevenueDataItem[] = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]
const RevenueCategoriesMultple = {
  desktop: { name: 'Desktop', color: '#61C080' },
  mobile: { name: 'Mobile', color: '#FF7C5D' },
}
const xFormatter = (i: number): string => `${RevenueData[i]?.month}`
const yFormatter = (i: number) => i
</script>

<template>
<Card class="p-6 relative space-y-0 h-full">
  <div class="flex justify-between items-center">
   <h4 class="font-medium"> Transactions </h4>

    <Button variant="secondary">
      <span class="text-sm"> Weekly </span>
      <PhCaretDown/>
    </Button>
  </div>

  <hr>
  <div>
    <BarChart
      :data="RevenueData"
      :stacked="true"
      :height="500"
      :categories="RevenueCategoriesMultple"
      :y-axis="['desktop', 'mobile']"
      :group-padding="0"
      :bar-padding="0.2"
      :xNumTicks="6"
      :radius="4"
      :x-formatter="xFormatter"
      :y-formatter="yFormatter"
      :y-grid-line="false"
      :legend-position="LegendPosition.Top"
    />
  </div>
</Card>
</template>

<style scoped>

</style>
