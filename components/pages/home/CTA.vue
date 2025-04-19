<script setup lang="ts">
import {FlickeringGrid} from "~/components/ui/flickering-grid";



const gradientStyle = `
  background: conic-gradient(from 0deg, #34d399, #3b82f6, #8b5cf6, #ec4899, #34d399);
`;
</script>

<template>
  <div class="relative py-12 md:py-32 overflow-hidden">

    <!-- Gradient Spin Behind -->
    <div
      class="absolute w-[400px] h-[400px] left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl opacity-40 animate-spin z-0"
      :style="gradientStyle"
    ></div>

    <ClientOnly>
      <div class="object-cover w-[400px] md:w-[700px] mx-auto h-[400px] md:h-[700px] absolute -bottom-[40%] left-0 md:left-[20%] rounded-full overflow-hidden">
        <FlickeringGrid
          class="relative inset-0 rounded-full z-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
          :square-size="2"
          :grid-gap="6"
          color="#3a3a3a"
          :max-opacity="0.5"
          :flicker-chance="0.3"
          :width="1200"
          :height="800"
        />
      </div>
    </ClientOnly>
    <!-- CTA Content -->
    <div class="relative flex flex-col items-center text-center w-full mx-auto space-y-6 md:space-y-10 z-10">
      <h1 class="text-5xl md:text-6xl font-medium w-[80%] md:w-[60%] mx-auto bg-gradient-to-r from-neutral-600 via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
        Ready to Revolutionize Your Workflow?
      </h1>
      <p class="w-[80%] md:w-[40%] mx-auto text-neutral-300 font-light">
        Join thousands of forward-thinking companies already using Cycles to dominate their industries.
      </p>
      <NuxtLink
        to="/signup"
        class="group flex px-5 py-2 rounded-lg items-center justify-center border border-emerald-600 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 text-white font-semibold shadow-[inset_0_1px_0px_0px_#5eead4] hover:bg-gradient-to-b hover:from-emerald-600 hover:via-emerald-600 hover:text-white hover:to-emerald-600 active:[box-shadow:none]"
      >
        <span class="block group-active:[transform:translate3d(0,1px,0)]">
          Start Free Trial
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>


</style>
