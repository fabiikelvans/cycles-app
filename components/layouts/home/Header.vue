<script setup lang="ts">
import { RiMenuLine, RiCloseLine } from '@remixicon/vue'
import {watch} from "vue";
import gsap from "gsap";

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const route = useRoute()

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact', href: '#' }
]

watch(isOpen, (value) => {
  if (value) {
    gsap.fromTo(
      dropdownRef.value,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    )
  } else {
    gsap.to(dropdownRef.value, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      ease: 'power2.in',
    })
  }
})

</script>

<template >
  <header class="w-full fixed top-0 left-0 z-[10001] bg-[#07090D]/70 backdrop-blur-md border-b border-b-white/10">
      <div class="max-w-7xl px-6 mx-auto py-4 flex justify-between items-center shadow-md">

        <!-- Logo -->
        <NuxtLink to="/">
        <div class="flex items-center space-x-3">
          <div class="relative h-12 w-12">
            <img src="~/assets/images/logos/logo.svg" alt="Cycles logo">
          </div>
          <span class="text-lg font-semibold font-mono">Cycles</span>
        </div>
        </NuxtLink>

        <!-- Center Nav Links (Desktop Only) -->
        <ul class="hidden lg:flex space-x-6 text-white/60 font-light text-base">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              :class="{
              'text-white font-medium': route.path === link.href,
              'hover:text-white transition-colors': route.path !== link.href
            }"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA Button (Desktop Only) -->
        <div class="hidden lg:block">
          <NuxtLink to="/dashboard/analytics" class="group flex px-5 py-2 rounded-lg items-center justify-center border border-emerald-600 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 text-white font-semibold shadow-[inset_0_1px_0px_0px_#5eead4] hover:bg-gradient-to-b hover:from-emerald-600 hover:via-emerald-600 hover:text-white hover:to-emerald-600 active:[box-shadow:none]">
          <span class="block group-active:[transform:translate3d(0,1px,0)]">
            Get Started
          </span>
          </NuxtLink>
        </div>


        <!-- Mobile Menu Toggle -->
        <div class="lg:hidden z-[10001] relative">
          <button @click="isOpen = !isOpen" class="hover:cursor-pointer">
            <component :is="isOpen ? RiCloseLine : RiMenuLine" size="28" />
          </button>
        </div>
      </div>

      <!-- Mobile Overlay Menu -->
      <div
        v-show="isOpen"
        class="lg:hidden fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
        @click.self="isOpen = false"
      >
        <div
          ref="dropdownRef"
          class="absolute top-20 left-4 right-4 bg-white rounded-xl p-6 shadow-lg z-[10000]"
        >
          <ul class="space-y-4 text-gray-800">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="block font-light text-lg"
                @click="isOpen = false"
                :class="{
                'text-primary font-medium': route.path === link.href,
                'hover:text-primary': route.path !== link.href
              }"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>

          <!-- CTA Mobile -->
          <div class="mt-6">
            <NuxtLink
              to="/signup"
              class="block text-center bg-primary text-white px-5 py-3 rounded-full font-light hover:bg-primary/80 transition"
              @click="isOpen = false"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
</template>

<style scoped>

</style>
