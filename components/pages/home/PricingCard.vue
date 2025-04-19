<script setup lang="ts">
defineProps<{
  title: string
  price: string
  duration: string
  description: string
  billed: string
  feature_title: string
  features: string[]
  cta: string
  isHighlighted?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'flex flex-col p-6 rounded-2xl transition-all duration-300  relative',
      isHighlighted
        ? 'bg-gradient-to-t from-emerald-600 to-emerald-600/20 text-white  scale-105 border border-white/40 shadow-lg shadow-emerald-500'
        : 'bg-[#0d1018] text-white border border-white/10'
    ]"
  >

    <!-- Background Image -->
    <div class="w-full h-full absolute top-0 left-0 py-2 transform -translate-y-1 overflow-hidden -z-10">
      <img
        src="/assets/images/grid/dots.svg"
        alt="dots icon"
        class="object-cover w-full h-full opacity-10"
      />
    </div>

    <h3 class="font-light mb-2 text-white/70">{{ title }}</h3>
    <p class="text-4xl font-normal mb-4">
      {{ price }}
      <span class="text-sm font-light tracking-tight">{{ duration }}</span>
    </p>

    <p class="font-light text-sm text-white/70">{{ description }}</p>

    <div class="space-y-2 w-full text-center">
      <button
        :class="[
        'mt-6 px-4 py-2 rounded-lg font-semibold transition w-full hover:cursor-pointer',
        isHighlighted
          ? 'bg-white text-black hover:bg-neutral-200'
          : 'bg-white text-black hover:bg-neutral-200'
      ]"
      >
        {{ cta }}
      </button>

      <p class="font-light text-[14px] text-white/50">{{ billed }}</p>
    </div>

    <hr class="border-gray-200/30 my-8" />

    <h4 class="mb-2 text-[15px] font-normal">{{ feature_title }}</h4>
    <ul class="space-y-2 flex-1">
      <li v-for="(feature, index) in features"
          :key="index"
          :class="[
        'text-[15px] font-light',
        isHighlighted
          ? 'text-white'
          : 'text-neutral-400'
      ]"
      >
        ✓ {{ feature }}
      </li>
    </ul>


  </div>
</template>
