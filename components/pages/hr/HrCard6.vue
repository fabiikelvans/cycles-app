<script setup lang="ts">

// Days and times to show in the grid
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const times = ['08:00', '09:00', '10:00', '11:00']

// Task definitions
const tasks = ref([
  {
    name: 'Weekly team sync',
    startDay: 'Mon',
    endDay: 'Tue',
    startTime: '09:00',
    endTime: '10:00',
    color: 'bg-yellow-500',
  },
  {
    name: 'Onboarding session',
    startDay: 'Wed',
    endDay: 'Thu',
    startTime: '09:00',
    endTime: '11:00',
    color: 'bg-neutral-600',
  },
])

// Helpers
const parseHour = (t: string) => parseInt(t.split(':')[0])
const dayIndex = (d: string) => days.indexOf(d)

// Check if a time+day cell is within a task's time range
function isInTaskSlot(task: any, day: string, time: string) {
  const hour = parseHour(time)
  const dayIdx = dayIndex(day)
  const taskStartHour = parseHour(task.startTime)
  const taskEndHour = parseHour(task.endTime)
  const taskStartDayIdx = dayIndex(task.startDay)
  const taskEndDayIdx = dayIndex(task.endDay)

  // Check if day is within task day range
  if (dayIdx < taskStartDayIdx || dayIdx > taskEndDayIdx) return false

  // If it's the start day, only allow cells from startTime onward
  if (dayIdx === taskStartDayIdx && hour < taskStartHour) return false

  // If it's the end day, only allow cells before endTime
  if (dayIdx === taskEndDayIdx && hour >= taskEndHour) return false

  return true
}
</script>

<template>
<Card class="relative w-full h-80 p-6 rounded-4xl bg-white/50 backdrop-blur-lg border-none shadow-none">
  <div class="w-full overflow-x-auto">

    <div class="flex items-center justify-between">
      <Badge variant="secondary" class="text-sm font-light bg-white">March</Badge>
      <h2 class="text-lg font-light"> April, 2025 </h2>
      <Badge variant="secondary" class="text-sm font-light bg-white" >May</Badge>
    </div>

    <!-- Header row: Days -->
    <div class="grid grid-cols-8 text-sm font-medium text-neutral-600 border-b border-neutral-300">
      <div></div>
      <div v-for="day in days" :key="day" class="py-2 text-center">
        {{ day }}
      </div>
    </div>

    <!-- Grid: time rows x day columns -->
    <div class="grid grid-cols-8 border-l border-neutral-300">
      <div v-for="time in times" :key="time" class="contents">
        <!-- Time label (left column) -->
        <div class="border-r border-b border-neutral-300 text-xs text-neutral-500 px-2 py-4">
          {{ time }}
        </div>

        <!-- Calendar cells -->
        <div
          v-for="day in days"
          :key="`${day}-${time}`"
          class="border-r border-b border-neutral-300 h-16 px-1 py-1"
        >
          <div v-for="task in tasks" :key="task.name + time + day">
            <div
              v-if="isInTaskSlot(task, day, time)"
              class="w-full h-full rounded px-2 py-1"
              :class="task.color"
            >
              <p class="text-sm text-white">
                {{ task.name }}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
