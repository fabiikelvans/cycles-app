<script setup lang="ts">
import {PhArrowUpRight} from "@phosphor-icons/vue";

const series = [
  {
    name: 'Work Hours',
    data: [6, 7.5, 8, 7, 6.5, 5, 0], // Sun to Sat
  },
]

const chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false, // ✅ Hides the menu/toolbar
    },
  },
  colors: ['#ffb703'], // ✅ Tailwind emerald-500 for example

  grid: {
    show: false, // ✅ This hides all grid lines
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  },
  yaxis: {
    title: {
      text: 'Hours',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `${val} hours`
      },
    },
  },
}
</script>

<template>
<Card class="relative w-full h-80 p-6 rounded-4xl bg-white/50 backdrop-blur-lg border-none shadow-none">
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-light">Progress</h2>
    <div class="p-3 flex items-center justify-center rounded-full bg-white">
      <PhArrowUpRight size="18" />
    </div>
  </div>

 <div>
   <div class="flex items-center space-x-4">
     <h1 class="text-4xl font-extralight">6.1h</h1>
     <p class="text-sm font-light">Work Time <br> this week</p>
   </div>

   <div>
     <apexchart
       width="100%"
       type="bar"
       :options="chartOptions"
       :series="series"
       :y-grid-line="false"
     />
   </div>
 </div>
</Card>
</template>

<style scoped>

</style>
