<script setup lang="ts">

import { RiMore2Line } from "@remixicon/vue";
import { Progress } from '@/components/ui/progress'
import { ref, watchEffect } from 'vue'

const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => progress.value = 66, 500)
  cleanupFn(() => clearTimeout(timer))
})
</script>

<template>
<Card class="p-6 relative h-full">
  <div class="flex justify-between items-center">
   <h2 class="text-2xl font-light tracking-tighter">
     Finance Balance
   </h2>

    <div class="flex items-center justify-center bg-white/20 backdrop-blur-xs border border-gray-400  p-2 rounded-full">
      <RiMore2Line size="16" weight="fill" />
    </div>
  </div>

  <div class="flex flex-col justify-end h-full space-y-1">
    <h1 class="text-4xl leading-tight">
      $8,456,900
    </h1>

    <div class="flex flex-col space-y-2">
      <Progress v-model="progress" class="w-full h-8 bg-gray-200 rounded-md" />
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-1">
          <div class="h-3 w-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"/>
          <p class="text-sm text-gray-400"> Profit </p>
        </div>

        <div class="flex items-center space-x-1">
          <div class="h-3 w-3 bg-gray-200 rounded-full"/>
          <p class="text-sm text-gray-400"> Earnings </p>
        </div>
      </div>
    </div>
  </div>
</Card>
</template>

<style>
</style>
