<script setup lang="ts">

import {RiArrowRightLine} from "@remixicon/vue";
import {Badge} from "~/components/ui/badge";
</script>

<template>
<Card class="p-6 relative h-full">
  <img src="/assets/images/grid/grid-2.svg" alt="Grid" class="absolute top-0 right-0 h-full w-fit object-contain overflow-hidden opacity-40 " />
  <div class="flex justify-between items-center">
   <h2 class="text-2xl font-light tracking-tighter">
     Total Insight
   </h2>

    <div class="flex items-center justify-center bg-white/20 backdrop-blur-xs border border-gray-400  p-2 rounded-full">
      <RiArrowRightLine size="20" />
    </div>
  </div>

  <div class="flex flex-col justify-end h-full space-y-1">
    <h1 class="text-4xl md:text-5xl leading-tight">
      $129,762
    </h1>

    <div class="flex items-center space-x-1">
      <Badge variant="destructive" class="bg-destructive/20 text-destructive rounded-full">
        +1.3%
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
