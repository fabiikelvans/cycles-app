<script setup lang="ts">
import {RainbowButton} from "~/components/ui/rainbow-button";
import {BorderBeam} from "~/components/ui/border-beam";
import {FlickeringGrid} from "~/components/ui/flickering-grid";

const gradientStyle = `
  background: conic-gradient(from 0deg, #34d399, #3b82f6, #8b5cf6, #ec4899, #34d399);
`;
</script>

<template>
  <div class="flex flex-col items-center text-center w-full mt-20">
    <div class="text-center space-y-6 z-10">
      <div class="flex items-center justify-center space-x-2 w-[90%] mx-auto">
        <Badge class="bg-emerald-500 text-whiten font-normal text-[11px] rounded-full uppercase">New</Badge>
        <p class="font-normal text-sm bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
          Cycle AI is now available!
        </p>
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium">
        All-in-one Platform to Simplify
        <br>
        Your Business Workflow
      </h1>

      <p class="text-neutral-400 md:text-lg w-[80%] font-light md:w-[60%] mx-auto">
        Harness the power of AI and machine learning for seamless project management and team collaboration.
      </p>

      <div>
        <NuxtLink to="/dashboard/analytics">
          <RainbowButton> Try Cycle for Free </RainbowButton>
        </NuxtLink>
      </div>
    </div>

    <div class="relative">
      <div class="absolute w-[400px] h-[400px] left-[35%] rounded-full blur-3xl opacity-70 animate-slow-spin z-0"
           :style="gradientStyle"></div>
      <ClientOnly>
        <div class="object-cover w-[400px] md:w-[700px] mx-auto h-[400px] md:h-[700px] absolute -top-[30%] left-0 md:left-[22%] rounded-full overflow-hidden z-0">
          <FlickeringGrid
            class="relative inset-0 rounded-full z-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
            :square-size="2"
            :grid-gap="6"
            color="#3a3a3a"
            :max-opacity="0.6"
            :flicker-chance="0.3"
            :width="1200"
            :height="800"
          />
        </div>
      </ClientOnly>
      <ClientOnly>
        <div
          class="relative mt-20 mb-6 flex h-[700px] w-full flex-col items-start justify-start overflow-hidden rounded-lg md:shadow-xl"
        >
          <img src="/assets/images/hero.svg" alt="img" class="w-full h-auto object-top" />
          <div class="absolute w-full h-full bottom-0 right-0 bg-gradient-to-t from-[#07090D] to-black/0 rounded-b-lg z-10" />

          <BorderBeam
            :size="250"
            :duration="12"
            :delay="9"
            :border-width="2"
          />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>

</style>
