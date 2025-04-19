<script setup lang="ts">
import {RiArrowDownLine, RiArrowUpLine, RiMore2Line} from "@remixicon/vue";
import { BarChart,  Orientation } from 'vue-chrts'
import MonitoringBar from "~/components/pages/analytics/MonitoringBar.vue";

const RevenueData = [
  { month: 'January', desktop: 186},
]
const RevenueCategoriesMultple = {
  desktop: { name: 'January', color: '#713CE9' },
}

const statusData = [
  { hour: 0, status: "online" },
  { hour: 1, status: "online" },
  { hour: 2, status: "online" },
  { hour: 3, status: "online" },
  { hour: 4, status: "online" },
  { hour: 5, status: "online" },
  { hour: 6, status: "online" },
  { hour: 7, status: "online" },
  { hour: 8, status: "online" },
  { hour: 9, status: "online" },
  { hour: 10, status: "online" },
  { hour: 11, status: "offline" },
  { hour: 12, status: "online" },
  { hour: 13, status: "online" },
  { hour: 14, status: "online" },
  { hour: 15, status: "online" },
  { hour: 16, status: "online" },
  { hour: 17, status: "online" },
  { hour: 18, status: "online" },
  { hour: 19, status: "online" },
  { hour: 20, status: "online" },
  { hour: 21, status: "online" },
  { hour: 22, status: "online" },
  { hour: 23, status: "online" },

]

const yFormatter = (i: number): string => `${RevenueData[i]?.month}`

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-11 gap-0 relative">
    <div class="grid col-span-4 space-y-4">
      <h4 class="text-neutral-400 font-light">Total Revenue</h4>
      <div class="flex items-center space-x-2">
        <h1 class="text-4xl font-medium"><span class="text-neutral-500">$</span>24,590<span class="text-neutral-500">.00</span> </h1>
        <p class="text-[#713CE9]">+18.25%</p>
      </div>
      <p class="mt-4 text-neutral-500 text-sm"> Available to spend:<span class="text-white font-semibold">$24,590.00</span></p>

      <div class="flex items-center space-x-2">
        <Button
          size="lg"
          class="bg-neutral-50 text-neutral-800 rounded-full hover:cursor-pointer hover:text-white hover:bg-neutral-800"
        >
          <span class="font-light">Transfer</span>
          <RiArrowUpLine />
        </Button>

        <Button
          size="lg"
          class="bg-neutral-50 text-neutral-800 rounded-full hover:cursor-pointer hover:text-white hover:bg-neutral-800"
        >
          <span class="font-light"> Request </span>
          <RiArrowDownLine />
        </Button>

         <div class="flex items-center justify-center p-2 border rounded-full border-neutral-700 hover:cursor-pointer hover:text-white hover:bg-neutral-800">
           <RiMore2Line size="24" />
         </div>
      </div>
    </div>


    <div class="col-span-3 border-l border-l-neutral-700">
      <p class="py-4 px-3 font-light"> $5,620.00 </p>
      <hr class="border-dashed border-neutral-600" />

      <div class="pt-4 px-3">
        <p class="text-xs"> +24%<span class="text-neutral-500"> Investment</span> </p>

        <div class="mt-6">
          <BarChart
            :data="RevenueData"
            :stacked="true"
            :height="70"
            :categories="RevenueCategoriesMultple"
            :y-axis="['desktop']"
            :group-padding="0"
            :bar-padding="0.2"
            :xNumTicks="6"
            :radius="4"
            :orientation="Orientation.Horizontal"
            :x-formatter="(i) => i.toString()"
            :y-formatter="yFormatter"
            :legend=false
          />
        </div>
      </div>
    </div>


    <div class="grid col-span-4 border-l border-l-neutral-700">
      <p class="py-4 px-3 font-light"> $5,620.00 </p>
      <hr class="border-dashed border-neutral-600" />

      <div class="pt-4 px-3">
        <p class="text-xs"> +13%<span class="text-neutral-500"> Uptime </span> </p>

        <div class="mt-6 overflow-hidden">
          <MonitoringBar domain="" uptime="" :operational-status="false" :status-data="statusData" :bar-width="12" :bar-gap="4" />
        </div>
        <p class="text-xs flex justify-end"> <span class="text-neutral-500 mt-1"> February </span> </p>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
