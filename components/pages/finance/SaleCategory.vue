<script setup lang="ts">

import {PhArrowUpRight} from "@phosphor-icons/vue";

import { ref } from 'vue'

// Example sales data (in raw units) for three products
const salesDataUnits = ref([500, 300, 200]) // Number of sales for Product A, B, C
const totalSales = salesDataUnits.value.reduce((acc, val) => acc + val, 0) // Calculate the total sales

// Calculate the percentage for each product
// Adjust the chart options to reflect the number of sales in the center
const chartOptions = ref({
  chart: {
    type: 'radialBar',
    height: 377,
    width: 500,
    offsetY: 0
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        margin: 0,
        size: '60%' // Inner space for the center
      },
      track: {
        background: '#eaeaea',
        strokeWidth: '100%'
      },
      dataLabels: {
        name: {
          show: true,
          fontSize: '16px',
          color: '#000',
          offsetY: 20,
          text: 'Product Sales' // Show the label in the center
        },
        value: {
          fontSize: '28px',
          offsetY: 50,
          formatter: () => `${totalSales} Sales` // Show the total number of sales in the center
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        { offset: 0, color: '#4f39f6', opacity: 1 },
        { offset: 50, color: '#4f39f6', opacity: 1 },
        { offset: 50.1, color: '#FEB019', opacity: 1 },
        { offset: 80, color: '#FEB019', opacity: 1 },
        { offset: 80.1, color: '#FF4560', opacity: 1 },
        { offset: 100, color: '#FF4560', opacity: 1 }
      ]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Product Sales Breakdown']
})
</script>

<template>
<Card class="p-6 relative h-full">
  <div class="flex justify-between items-center">
    <h2 class="text-3xl md:text-4xl tracking-tighter">
      Sales Category
    </h2>

    <div class="flex items-center justify-center bg-white/20 backdrop-blur-xs border border-gray-400  p-2 rounded-full">
      <PhArrowUpRight size="20" />
    </div>
  </div>

  <div class="flex flex-col items-center w-full">
    <apexchart
      type="radialBar"
      width="377"
      height="400"
      :series="[100]"
      :options="chartOptions"
    />
    <div class="space-y-2 text-base text-center font-medium">
      <p><span class="inline-block w-4 h-4 rounded-full bg-[#00E396] mr-2"></span> E-commerce (50%)</p>
      <p><span class="inline-block w-4 h-4 rounded-full bg-[#FEB019] mr-2"></span> Brand Ambassador (30%)</p>
      <p><span class="inline-block w-4 h-4 rounded-full bg-[#FF4560] mr-2"></span> Direct Buy (20%)</p>
    </div>
  </div>

</Card>
</template>

<style scoped>

</style>
