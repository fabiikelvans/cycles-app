<script setup lang="ts">

import {RiArrowRightLine} from "@remixicon/vue";
import {Badge} from "~/components/ui/badge";
</script>

<template>
<Card class="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-6 relative h-full space-y-6">
  <img src="/assets/images/grid/grid-1.svg" alt="Grid" class="absolute top-0 right-0 h-full w-fit object-contain overflow-hidden opacity-40 " />

  <div class="flex justify-between items-center">
   <h2 class="text-2xl font-light tracking-tighter">Overall Revenue</h2>

    <div class="flex items-center justify-center bg-white/20 backdrop-blur-xs text-white  p-2 rounded-full">
      <RiArrowRightLine size="20" />
    </div>
  </div>

  <div class="flex flex-col justify-end h-full space-y-1">
    <h1 class="text-4xl md:text-5xl leading-tight">
      $24,815
    </h1>

    <div class="flex items-center space-x-1">
      <Badge variant="secondary" class="bg-white/20 text-white rounded-full">
        +12.4%
      </Badge>
      <p class="text-sm fill-muted-foreground font-light">
        Than last month
      </p>
    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
