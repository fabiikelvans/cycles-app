<script setup lang="ts">
defineProps<{
  testimonial: string
  avatar: string
  name: string
  designation: string
  bgColor?: string // e.g. 'rgba(34,197,94,0.2)' or 'bg-green-500/20'
}>()
</script>

<template>
  <Card class="relative px-6 py-8 bg-[#0d1018] text-white border border-white/5 flex flex-col space-y-6 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/assets/images/grid/dots.svg"
        alt="dots background"
        class="w-full h-full object-cover opacity-10"
      />
    </div>

    <!-- Custom Colored Blur -->
    <div
      class="h-32 w-32 blur-2xl absolute bottom-0 left-0 overflow-hidden"
      :class="bgColor"
    />

    <!-- Testimonial Text -->
    <h3 class="relative z-10 text-base font-extralight leading-relaxed max-w-xl">
      "{{ testimonial }}"
    </h3>

    <!-- User Info -->
    <div class="relative z-10 flex items-center gap-4 ">
      <!-- Avatar -->
      <img
        :src="avatar"
        alt="Avatar"
        class="w-12 h-12 rounded-full object-cover border border-white/20"
      />

      <!-- Name and Designation -->
      <div class="text-left space-y-1">
        <h4 class="text-base font-normal text-neutral-400">{{ name }}</h4>
        <p class="text-sm text-neutral-500">{{ designation }}</p>
      </div>
    </div>
  </Card>
</template>
