<script setup lang="ts">
import {RiArrowRightSLine, RiMore2Fill, RiAddLine} from "@remixicon/vue";

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <RiArrowRightSLine size="16"/>
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>

      <div class="flex items-center space-x-2">
        <RiAddLine size="16"/>
        <RiMore2Fill size="16"/>
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
