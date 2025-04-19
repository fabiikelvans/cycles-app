<template>
  <div ref="loader" class="fixed inset-0 bg-[#07090D]  z-[10002] loader flex items-center justify-center">
    <img src="/assets/images/logos/logo.svg" alt="Logo" class="w-24 h-24" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const loader = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({
    delay: 1, // Delay to show the logo briefly
  })

  tl.to(loader.value, {
    yPercent: -100,
    duration: 1.2,
    ease: 'power2.inOut',
  }).set(loader.value, { display: 'none' })
})
</script>

<style scoped>
/* Optional: prevent scroll while loading */
body {
  overflow: hidden;
}
</style>
