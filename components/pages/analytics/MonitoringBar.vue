<script setup lang="ts">
const props = defineProps<{
  domain: string
  uptime: string
  operationalStatus: boolean
  statusData: {
    status: string
  }[]
  barWidth: number
  barGap: number
  startLabel?: string
  endLabel?: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const statusBars = ref<Array<{ status: string }>>([])
const resizeObserver = ref<ResizeObserver | null>(null)

const updateStatusBars = () => {
  if (!containerRef.value) return

  const containerWidth = containerRef.value.offsetWidth
  const totalBarWidth = props.barWidth + props.barGap * 2
  const numberOfBars = Math.floor(containerWidth / totalBarWidth)

  if (props.statusData.length === 0) {
    statusBars.value = []
    return
  }

  // Take the most recent data points that will fit in the container
  const dataLength = props.statusData.length
  const startIndex = Math.max(0, dataLength - numberOfBars)
  const visibleBars = props.statusData.slice(startIndex)

  // Add empty bars if we don't have enough data to fill the container
  if (visibleBars.length < numberOfBars) {
    const emptyBars = Array(numberOfBars - visibleBars.length).fill({
      status: 'empty',
    })
    statusBars.value = [...emptyBars, ...visibleBars]
  } else {
    statusBars.value = visibleBars
  }
}

watch(() => props.statusData, updateStatusBars, { deep: true })

onMounted(() => {
  updateStatusBars()

  resizeObserver.value = new ResizeObserver(updateStatusBars)

  if (containerRef.value) {
    resizeObserver.value.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (resizeObserver.value && containerRef.value) {
    resizeObserver.value.unobserve(containerRef.value)
    resizeObserver.value.disconnect()
  }
})

const hoveredIndex = ref(null)
</script>

<template>
  <UCard variant="subtle">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-(--ui-primary)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span class="font-medium">{{ domain }}</span>
        </div>
        <span class="text-sm dark:text-gray-400">{{ uptime }}</span>
      </div>
    </template>

    <div class="mb-1 mb-2 flex justify-between px-1 text-xs text-gray-200">
      <span>{{ startLabel }}</span>
      <span>{{ endLabel }}</span>
    </div>
    <div ref="containerRef" class="flex h-20 w-full items-center justify-evenly">
      <div
        v-for="(bar, index) in statusBars"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        :key="index"
        class="inline-block h-14 first:rounded-l last:rounded-r"
        :style="{
          width: `${barWidth}px`,
          marginLeft: `${barGap}px`,
          marginRight: `${barGap}px`,
        }"
        :class="{
          'bg-[#713ce9]': bar.status === 'online',
          'bg-gray-200 dark:bg-gray-100': bar.status === 'offline',
          'bg-transparent': bar.status === 'empty',
        }"
      >
        <div
          class="absolute -mt-10 mr-auto ml-1 -translate-x-1/2 rounded-lg border border-(--ui-border) bg-(--ui-bg-inverted) px-2 text-(--ui-bg)"
          v-if="index === hoveredIndex"
        >
          {{ bar.status }}
        </div>
      </div>
    </div>
  </UCard>
</template>
