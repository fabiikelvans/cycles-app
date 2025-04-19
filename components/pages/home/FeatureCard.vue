<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  image?: string

}>()
</script>

<template>
  <Card class="p-6 bg-[#0d1018] text-white border-white/10">
    <div class="space-y-2">
      <h1 class="text-2xl ">
        {{ title }}
      </h1>
      <p class="font-light text-sm text-neutral-400">
        {{ description }}
      </p>
    </div>

    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-full absolute top-0 left-0 transform -translate-y-1 overflow-hidden z-0">
        <img
          src="/assets/images/grid/dots.svg"
          alt="dots icon"
          class="object-cover w-full h-full opacity-0"
        />
      </div>

      <!-- Image from props (if provided) -->
      <div v-if="image" class="relative z-10 flex justify-center w-full h-48 ">
        <img :src="image" alt="Feature image" class=" object-cover" />
      </div>

      <!-- Slot content -->
      <div class="relative z-10 px-4 pb-4">
        <slot />
      </div>
    </div>
  </Card>
</template>

<style scoped>

</style>
