<script setup lang="ts">
const props = defineProps<{
  items: { id: string; label: string; checked: boolean }[]
  color?: string // Tailwind color class, like 'text-blue-600'
  bg_color?: string // Tailwind color class, like 'text-blue-600'
}>()

const colorClass = computed(() => props.color || 'text-blue-600')

function toggle(index: number) {
  props.items[index].checked = !props.items[index].checked
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="flex items-center space-x-3 cursor-pointer"
      @click="toggle(index)"
    >
      <!-- Custom circular checkbox -->
      <div
        class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors text-white"
        :class="[
          item.checked ? colorClass : 'border-white',
          item.checked ? bg_color : 'border-1 bg-white/30'
        ]"
      >
        <div
          v-if="item.checked"
          class="w-2.5 h-2.5 rounded-full"
          :class="colorClass"
        />
      </div>

      <!-- Label -->
      <span
        :class="[
          'text-sm font-medium transition-opacity',
          colorClass,
          item.checked ? 'line-through opacity-60' : ''
        ]"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>
