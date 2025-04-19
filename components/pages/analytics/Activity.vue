<script setup lang="ts">

import {Card} from "~/components/ui/card";
import {RiArrowRightLine, RiGlobalLine} from "@remixicon/vue";
import ActivityGraph from "~/components/pages/analytics/ActivityGraph.vue";
</script>

<template>
<Card class="bg-neutral-900 border-none text-white px-4">
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <RiGlobalLine size="20" />
        <h4> Activity by time </h4>
      </div>

      <div class="flex items-center justify-center p-3 bg-neutral-800 rounded-full">
        <RiArrowRightLine />
      </div>
    </div>

    <div class="mt-6">
      <ActivityGraph/>
    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
