<script lang="ts" setup>
import {
  LineChart,
  type BulletLegendItemInterface,
  CurveType,
  LegendPosition,
} from 'vue-chrts'

type chartDataItem = {
  month: string
  desktop: number
  mobile: number
}

const chartData = [
  { month: 'January', desktop: 186, mobile: 186 },
  { month: 'February', desktop: 305, mobile: 305 },
  { month: 'March', desktop: 237, mobile: 237 },
  { month: 'April', desktop: 260, mobile: 209 },
  { month: 'May', desktop: 209, mobile: 209 },
  { month: 'June', desktop: 250, mobile: 214 },
]

const categories: Record<string, BulletLegendItemInterface> = {
  desktop: { name: 'Desktop', color: '#713CE9' },
  mobile: { name: 'Mobile', color: '#4e26b0' },
}

const xFormatter = (i: number): string | number => `${chartData[i]?.month}`
</script>
<template>
  <LineChart
    :data="chartData"
    :height="275"
    y-label="Number of visits"
    :x-num-ticks="2"
    :categories="categories"
    :x-formatter="xFormatter"
    :grid-line-y="true"
    :curve-type="CurveType.MonotoneX"
    :legend-position="LegendPosition.Top"
  />
</template>
