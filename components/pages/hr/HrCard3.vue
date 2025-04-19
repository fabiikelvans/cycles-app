<script setup lang="ts">
import {RiAlarmFill, RiArrowRightUpLine, RiRefreshLine, RiPauseFill, RiPlayFill} from "@remixicon/vue";

const totalTime = 5 * 60 // Full circle represents 5 minutes
const timeLeft = ref(2 * 60 + 32) // Starts at 2:32

const isRunning = ref(false)
let interval: number | null = null

const radius = 80
const circumference = 2 * Math.PI * radius

const dashOffset = computed(() => {
  const progress = timeLeft.value / totalTime
  return circumference * (1 - progress)
})

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

function toggleTimer() {
  isRunning.value ? stopTimer() : startTimer()
}

function startTimer() {
  if (!interval) {
    isRunning.value = true
    interval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 1
      } else {
        stopTimer()
      }
    }, 1000)
  }
}

function stopTimer() {
  isRunning.value = false
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

function resetTimer() {
  stopTimer()
  timeLeft.value = totalTime
}

onBeforeUnmount(() => {
  stopTimer()
})
</script>

<template>
<Card class="relative w-full h-80 p-6 rounded-4xl bg-white/50 backdrop-blur-lg border-none shadow-none">
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-light"> Time tracker </h2>
    <div class="p-3 flex items-center justify-center rounded-full bg-white">
      <RiArrowRightUpLine size="18" />
    </div>
  </div>

 <div>
   <div class="flex flex-col items-center justify-center space-y-1">
     <div class="relative w-44 h-44">
       <!-- Static Circle -->
       <svg class="w-full h-full transform -rotate-90">
         <circle
           class="text-gray-300"
           stroke="currentColor"
           stroke-width="8"
           fill="transparent"
           r="80"
           cx="90"
           cy="90"
           stroke-dasharray="2 6"
         />
         <!-- Progress Circle -->
         <circle
           class="text-yellow-400 transition-all duration-100"
           stroke="currentColor"
           stroke-width="14"
           stroke-linecap="round"
         fill="transparent"
         :stroke-dasharray="circumference"
         :stroke-dashoffset="dashOffset"
         r="80"
         cx="90"
         cy="90"
         />

       </svg>
       <!-- Time Text -->
       <div class="absolute inset-0 flex items-center justify-center text-gray-800">
         <div class="text-center">
           <h1 class="text-4xl font-extralight">{{ formattedTime }}</h1>
           <p class="text-sm font-light"> Work Time </p>
         </div>
       </div>
     </div>

   </div>
   <!-- Controls -->
   <div class="flex items-center justify-between">
     <div class="flex items-center space-x-4">
       <button
         class="p-3 bg-white rounded-full flex items-center justify-center"
         @click="toggleTimer"
       >
         <component :is="isRunning ? RiPauseFill : RiPlayFill" class="w-4 h-4" />
       </button>

       <button
         class="p-3 bg-white rounded-full flex items-center justify-center"
         @click="resetTimer"
       >
         <RiRefreshLine/>
       </button>
     </div>

     <div class="p-3 bg-foreground text-white rounded-full flex items-center justify-center">
       <RiAlarmFill />
     </div>
   </div>
 </div>
</Card>
</template>

<style scoped>

</style>
