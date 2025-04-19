<script setup lang="ts">
  defineProps<{
    base: string
    title: string
    description?: string
  }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center space-x-2 py-12 space-y-4">
    <Badge
      variant="outline"
      class="font-normal text-sm bg-gradient-to-r from-emerald-300 px-4 py-1 rounded-full to-white bg-clip-text text-transparent border-white/10"
    >
      {{ base }}
    </Badge>

    <h1 class="text-4xl md:text-4xl lg:text-5xl tracking-tight font-normal w-[80%] md:w-[50%]">
      {{  title }}
    </h1>

    <p class="text-neutral-400 md:text-base w-[80%] font-light md:w-[60%] mx-auto">
      {{  description }}
    </p>
  </div>
</template>

<style scoped>

</style>
