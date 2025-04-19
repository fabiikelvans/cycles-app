<script setup lang="ts">
import {PhCaretRight, PhDotsThreeOutlineVertical, PhPlus} from "@phosphor-icons/vue";

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <PhCaretRight weight="fill" size="16"/>
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>

      <div class="flex items-center space-x-2">
        <PhPlus  size="16"/>
        <PhDotsThreeOutlineVertical weight="fill" size="16"/>
      </div>
    </div>

    <hr>

    <div class="space-y-4">
      <slot></slot>
    </div>
  </Card>
</template>

<style scoped>

</style>
