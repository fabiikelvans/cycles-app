<script setup lang="ts">

defineProps<{
  icon: any
  title: string
  description: string
}>()

</script>

<template>
  <Card class="relative px-6 py-8 bg-[#0d1018] text-white border-white/5 flex flex-col items-center text-center w-full mx-auto space-y-4 z-20">
    <!-- Background Image -->
    <div class="w-full h-full absolute top-0 left-0 py-2 transform -translate-y-1 overflow-hidden -z-10">
      <img
        src="/assets/images/grid/dots.svg"
        alt="dots icon"
        class="object-cover w-full h-full opacity-10"
      />
    </div>
    <!-- Icon wrapper centered -->
    <div class="bg-[#07090D] p-4 rounded-lg shadow-inner shadow-white/20 flex items-center justify-center w-fit h-fit">
      <component
        v-if="icon"
        :is="icon"
        size="24"
        class="text-white"
        weight="duotone"
      />
    </div>

    <!-- Title & Description -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-neutral-400 font-light text-sm w-[70%] mx-auto">{{ description }}</p>
    </div>
  </Card>

</template>

<style scoped>

</style>
