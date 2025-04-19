<script setup lang="ts">
const props = defineProps<{
  progress: number // From 0 to 100
  color?: string // Tailwind color class (e.g., 'bg-blue-600')
}>()

const progressColor = computed(() => props.color || 'bg-blue-600')

const progressWidth = computed(() =>
  Math.min(Math.max(props.progress, 0), 100)
)
</script>

<template>
  <div class="w-full h-4 bg-white/40 rounded-full overflow-hidden">
    <div
      class="h-full transition-all duration-300"
      :class="progressColor"
      :style="{ width: progressWidth + '%' }"
    ></div>
  </div>
</template>

<style scoped>

</style>
