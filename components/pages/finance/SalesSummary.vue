<script setup lang="ts">
import { PhCaretDown} from "@phosphor-icons/vue";
// Define months
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

// Generate random sales data for each product
const generateData = () =>
  months.map(() => Math.floor(Math.random() * 100) + 1)

const numberOfProducts = 12
const series = ref(
  Array.from({ length: numberOfProducts }, (_, i) => ({
    name: `Product ${i + 1}`,
    data: generateData()
  }))
)

const chartOptions = ref({
  chart: {
    type: 'heatmap',
    height: 1000, // Increase for 50 rows
    toolbar: { show: true },
    zoom: { enabled: true }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'category',
    categories: months
  },
  // title: {
  //   text: 'Monthly Sales Summary (50 Products)',
  //   align: 'left',
  //   style: {
  //     fontSize: '18px'
  //   }
  // },
  grid: {
    padding: {
      right: 20
    }
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 2,
      useFillColorAsStroke: false,
      colorScale: {
        ranges: [
          { from: 0, to: 30, color: '#89909F', name: 'Low' },
          { from: 31, to: 70, color: '#F6AE2D', name: 'Medium' },
          { from: 71, to: 100, color: '#4f39f6', name: 'High' }
        ]
      }
    }
  }
})
</script>

<template>
<Card class="p-6 relative h-full">
  <div class="flex justify-between items-center">
   <h2 class="text-3xl md:text-4xl tracking-tighter">
     Sales Summary
   </h2>

    <div class="hidden md:flex items-center space-x-2">
      <Button variant="outline" size="lg" class="rounded-full">
        <span> This Year </span>
        <PhCaretDown/>
      </Button>

      <Button variant="outline" size="lg" class="rounded-full">
        <span> Summary </span>
        <PhCaretDown/>
      </Button>
    </div>
  </div>

  <div class="flex flex-col justify-end h-full space-y-1">
    <div>
      <apexchart
        type="heatmap"
        height="450"
        :options="chartOptions"
        :series="series"
      />

    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
