<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Revenue from "~/components/pages/analytics/Revenue.vue";
import Budget from "~/components/pages/analytics/Budget.vue";
import Activity from "~/components/pages/analytics/Activity.vue";
import Transaction from "~/components/pages/analytics/Transaction.vue";

definePageMeta({
  layout: 'layout-analytics'
});

useHead({
  title: 'Cycles | Analytics',
})

</script>

<template>
<div class="container my-12 space-y-6">
  <div class="flex items-center justify-between">
    <h1 class="text-4xl font-light">Welcome back, <span class="text-neutral-400">John</span></h1>

    <div class="hidden md:block">
      <ToggleGroup type="single" class="border border-neutral-800" >
        <ToggleGroupItem value="a" class="px-6">
          Week
        </ToggleGroupItem>
        <ToggleGroupItem value="b" class="px-6">
          Month
        </ToggleGroupItem>
        <ToggleGroupItem value="c" class="px-6">
          Year
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>

  <Revenue/>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
    <Budget />
    <Activity/>
    <Transaction/>
  </div>

</div>
</template>

<style scoped>

</style>
