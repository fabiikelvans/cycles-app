<script setup lang="ts">

import { PhLaptop, PhUsers, PhBriefcase, PhTarget, PhShield } from '@phosphor-icons/vue'

const tasks = ref([
  { id: 1, label: 'Interview', date: 'May 12, 10:30', icon: PhLaptop, done: true },
  { id: 2, label: 'Team meeting', date: 'May 13, 14:00', icon: PhUsers, done: true },
  { id: 3, label: 'Project Update', date: 'May 14, 09:00', icon: PhBriefcase, done: false },
  { id: 4, label: 'Discuss Q3 Goals', date: 'May 15, 11:15', icon: PhTarget, done: false },
  { id: 5, label: 'HR Policy Review', date: 'May 16, 13:00', icon: PhShield, done: false },
])

const toggleDone = (taskId: number) => {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) task.done = !task.done
}
</script>

<template>
<Card class="relative w-full p-6 rounded-4xl bg-white/50 backdrop-blur-lg border-none shadow-none">
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-light"> Onboarding </h2>

   <h1 class="text-4xl font-extralight">18%</h1>
  </div>

    <div class="flex w-full px-4 mx-auto">
      <!-- Bar 1 -->
      <div class="flex flex-col items-start w-[50%]">
        <span class="text-sm ">30%</span>
        <div class="h-12 w-full bg-yellow-400 rounded-md flex items-center px-4">
          <p class=" font-light">Task</p>
        </div>
      </div>

      <!-- Bar 2 -->
      <div class="flex flex-col items-start w-[35%]">
        <span class="text-sm ">25%</span>
        <div class="h-12 w-full bg-foreground rounded-md"></div>
      </div>

      <!-- Bar 3 -->
      <div class="flex flex-col items-start w-[15%]">
        <span class="text-sm ">8%</span>
        <div class="h-12 w-full bg-neutral-500/80 rounded-md"></div>
      </div>
    </div>

  <div class="relative">
    <div class="relative w-full h-[380px]">
      <!-- White div (shown partially) -->
      <div class="absolute inset-x-0 top-0 bg-white h-[5%] w-[80%] mx-auto rounded-t-3xl"></div>

      <!-- Gray div (shown partially) -->
      <div class="absolute inset-x-0 top-[5%] bg-neutral-400 h-[10%] w-[90%] mx-auto rounded-t-3xl"></div>

      <!-- Black div (top div with content) -->
      <div class="absolute inset-x-0 top-[10%] bg-neutral-800 text-white rounded-3xl h-full p-6">
       <div class="space-y-4">
         <div class="flex items-center justify-between w-full">
           <h2 class="text-lg font-light"> Time tracker </h2>
           <h1 class="text-4xl font-extralight"> 2/8 </h1>
         </div>

         <div>

           <div class="space-y-4">
             <div
               v-for="task in tasks"
               :key="task.id"
               class="flex items-center justify-between w-full"
             >
               <div class="flex items-center space-x-4">
                 <div
                   class="flex items-center justify-center p-3 rounded-full"
                   :class="[
            task.done ? 'bg-neutral-700 text-white' : 'bg-white text-foreground'
          ]"
                 >
                   <component :is="task.icon" size="18" />
                 </div>
                 <div class="-space-y-1">
                   <label
                     :for="`task-${task.id}`"
                     class="text-base font-light leading-none"
                     :class="{ 'line-through text-neutral-400': task.done }"
                   >
                     {{ task.label }}
                   </label>
                   <p class="text-sm font-light text-neutral-400">
                     {{ task.date }}
                   </p>
                 </div>
               </div>

               <!-- Custom Checkbox -->
               <div
                 class="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center transition-colors"
                 :class="task.done ? 'bg-yellow-500' : 'bg-neutral-600'"
                 @click="toggleDone(task.id)"
               >
                 <div
                   v-if="task.done"
                   class="w-2.5 h-2.5 bg-white rounded-full"
                 ></div>
               </div>


               <!--               <Checkbox-->
<!--                 :checked="task.done"-->
<!--                 :id="`task-${task.id}`"-->
<!--                 :class="task.done ? 'bg-yellow-500' : 'bg-neutral-600'"-->
<!--                 class="rounded-full bg-neutral-600 border-none"-->
<!--                 @change="toggleDone(task.id)"-->
<!--               />-->
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
  </div>

  <div>

 </div>
</Card>
</template>

<style scoped>

</style>
