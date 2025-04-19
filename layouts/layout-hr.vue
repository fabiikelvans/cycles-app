<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useRoute } from 'vue-router'
import type { NavLink } from '~/types'
import IconWrapper from '~/components/layouts/analytics/IconWrapper.vue'
import {RiMenuFill, RiCloseFill, RiSettings4Fill, RiNotification3Fill, RiUserFill} from '@remixicon/vue'

const navLinks: NavLink[] = useNavLinks()
const route = useRoute()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

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


<template>
  <main class="min-h-screen  overflow-hidden">
    <div class="mx-auto py-4 px-12 md:px-24">
     <div class="relative">
       <nav class="flex justify-between items-center relative">

         <!-- Logo -->
         <NuxtLink to="/">
         <div class="flex items-center py-2 px-4 border border-gray-800/60 rounded-full">
           <span class="text-xl font-light font-mono">Cycles</span>
         </div>
         </NuxtLink>

         <div class="flex items-center space-x-2">
           <!-- Desktop Nav Links -->
           <div class="hidden lg:block">
             <ul class="flex items-center space-x-4 bg-white rounded-full p-1">
               <li v-for="{ href, name } in navLinks" :key="href">
                 <NuxtLink
                   :to="href"
                   class="bg-none py-3 px-5 font-light rounded-full transition-colors duration-200 flex items-center space-x-2"
                   :class="{
                  'bg-foreground text-white': route.path === href,
                  'text-gray-800': route.path !== href
                }"
                 >
                   <span>{{ name }}</span>
                 </NuxtLink>
               </li>
             </ul>
           </div>

           <div class="hidden lg:flex items-center justify-center space-x-2 py-2 px-4 transition-colors duration-200 rounded-full  bg-white/80 backdrop-blur-md  hover:cursor-pointer hover:bg-white/40 hover:text-gray-900">
             <RiSettings4Fill size="20" weight="light" />
             <p class="text-base font-light">Settings</p>
           </div>


           <div class="hidden lg:flex items-center space-x-2">
             <div class="flex items-center justify-center p-3 transition-colors duration-200 rounded-full  bg-white/80 backdrop-blur-md hover:cursor-pointer hover:bg-white/40 hover:text-gray-900">
               <RiNotification3Fill size="20" weight="light" />
             </div>
             <div class="flex items-center justify-center p-3 transition-colors duration-200 rounded-full  bg-white/80 backdrop-blur-md hover:cursor-pointer hover:bg-white/40 hover:text-gray-900">
               <RiUserFill size="20" weight="light" />
             </div>
           </div>
         </div>

         <!-- Mobile Menu Icon -->
         <div class="lg:hidden flex items-center space-x-2 z-[10001] relative">
           <button @click="isOpen = !isOpen">
             <IconWrapper>
               <component :is="isOpen ? RiCloseFill : RiMenuFill" size="28" />
             </IconWrapper>
           </button>
         </div>



       </nav>

       <!-- Mobile Dropdown Menu -->
       <div
         v-show="isOpen"
         class="lg:hidden fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
         @click.self="isOpen = false"
       >
         <div
           ref="dropdownRef"
           class="absolute top-20 left-4 right-4 bg-neutral-900 rounded-xl p-4 shadow-lg z-[10000]"
         >
           <ul class="space-y-2">
             <li v-for="link in navLinks" :key="link.href">
               <NuxtLink
                 :to="link.href"
                 class="block py-2 px-4 font-light rounded-full transition-colors duration-200"
                 @click="isOpen = false"
                 :class="{
            'bg-primary text-white shadow-sm': route.path === link.href,
            'text-gray-300 hover:bg-gray-100 hover:text-gray-900': route.path !== link.href
          }"
               >
                 {{ link.name }}
               </NuxtLink>
             </li>
           </ul>
         </div>
       </div>



     </div>

      <slot>

      </slot>

    </div>
  </main>
</template>

<style scoped>
main{
  font-family: 'Outfit', sans-serif;
  background-color: rgb(254, 243, 199);
  background-image: radial-gradient(at 31% 87%, rgb(255, 255, 255) 0, transparent 93%), radial-gradient(at 47% 14%, rgb(243, 244, 246) 0, transparent 83%), radial-gradient(at 77% 38%, rgb(253, 224, 71) 0, transparent 42%), radial-gradient(at 4% 95%, rgb(229, 231, 235) 0, transparent 51%), radial-gradient(at 66% 88%, rgb(254, 249, 195) 0, transparent 36%), radial-gradient(at 69% 38%, rgb(249, 250, 251) 0, transparent 32%), radial-gradient(at 0% 0%, rgb(243, 244, 246) 0, transparent 16%);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
