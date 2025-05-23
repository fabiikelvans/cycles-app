<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useRoute } from 'vue-router'
import type { NavLink } from '~/types'
import IconWrapper from '~/components/layouts/analytics/IconWrapper.vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RiMailFill, RiSearchLine, RiMenuFill, RiCloseFill } from '@remixicon/vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
  <main class="bg-foreground text-background min-h-screen">
    <div class="max-w-7xl mx-auto py-4 px-4">
     <div class="relative">
       <nav class="flex justify-between items-center relative">

         <!-- Logo -->
         <NuxtLink to="/">
         <div class="flex items-center space-x-3">
           <div class="relative h-12 w-12">
             <img src="~/assets/images/logos/purple-logo.svg" alt="Cycles logo">
           </div>
           <span class="text-2xl font-semibold font-mono">Cycles</span>
         </div>
         </NuxtLink>

         <!-- Desktop Nav Links -->
         <div class="hidden md:block">
           <ul class="flex items-center space-x-4">
             <li v-for="link in navLinks" :key="link.href">
               <NuxtLink
                 :to="link.href"
                 class="block py-3 px-5 font-light rounded-full transition-colors duration-200"
                 :class="{
                  'bg-white text-primary': route.path === link.href,
                  'bg-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300 hover:shadow-inner hover:shadow-neutral-700': route.path !== link.href
                }"
               >
                 {{ link.name }}
               </NuxtLink>
             </li>
           </ul>
         </div>

         <!-- Mobile Menu Icon -->
         <div class="md:hidden flex items-center space-x-2">
           <button @click="isOpen = !isOpen">
             <IconWrapper>
               <component :is="isOpen ? RiCloseFill : RiMenuFill" size="28" />
             </IconWrapper>
           </button>
         </div>

         <!-- Right Icons (always visible) -->
         <div class="hidden md:flex items-center space-x-2">
           <IconWrapper>
             <RiSearchLine size="24" weight="light" />
           </IconWrapper>
           <IconWrapper>
             <RiMailFill size="24" weight="light" />
           </IconWrapper>

           <DropdownMenu>
             <DropdownMenuTrigger as-child>
               <Avatar class="h-14 w-14 hover:cursor-pointer">
                 <AvatarImage
                   src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60"
                   alt="@unovue"
                   class="object-cover"
                 />
                 <AvatarFallback>CN</AvatarFallback>
               </Avatar>
             </DropdownMenuTrigger>
             <DropdownMenuContent class="w-56">
               <DropdownMenuLabel>My Account</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                 <DropdownMenuItem>
                   <span>Profile</span>
                   <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                   <span>Billing</span>
                   <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                   <span>Settings</span>
                   <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                   <span>Keyboard shortcuts</span>
                   <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                 </DropdownMenuItem>
               </DropdownMenuGroup>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                 <DropdownMenuItem>
                   <span>Team</span>
                 </DropdownMenuItem>
                 <DropdownMenuSub>
                   <DropdownMenuSubTrigger>
                     <span>Invite users</span>
                   </DropdownMenuSubTrigger>
                   <DropdownMenuPortal>
                     <DropdownMenuSubContent>
                       <DropdownMenuItem>
                         <span>Email</span>
                       </DropdownMenuItem>
                       <DropdownMenuItem>
                         <span>Message</span>
                       </DropdownMenuItem>
                       <DropdownMenuSeparator />
                       <DropdownMenuItem>
                         <span>More...</span>
                       </DropdownMenuItem>
                     </DropdownMenuSubContent>
                   </DropdownMenuPortal>
                 </DropdownMenuSub>
                 <DropdownMenuItem>
                   <span>New Team</span>
                   <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                 </DropdownMenuItem>
               </DropdownMenuGroup>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                 <span>GitHub</span>
               </DropdownMenuItem>
               <DropdownMenuItem>
                 <span>Support</span>
               </DropdownMenuItem>
               <DropdownMenuItem disabled>
                 <span>API</span>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                 <span>Log out</span>
                 <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
               </DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
         </div>
       </nav>

       <!-- Mobile Dropdown Menu -->
       <div
         v-show="isOpen"
         ref="dropdownRef"
         class="md:hidden mt-4 bg-neutral-900 rounded-xl p-4 shadow-lg"
       >
         <ul class="space-y-2">
           <li v-for="link in navLinks" :key="link.href">
             <NuxtLink
               :to="link.href"
               class="block py-2 px-4 font-light rounded-full transition-colors duration-200"
               @click="isOpen = false"
               :class="{
          'bg-primary text-white': route.path === link.href,
          'text-gray-300 hover:bg-gray-100 hover:text-gray-900': route.path !== link.href
        }"
             >
               {{ link.name }}
             </NuxtLink>
           </li>
         </ul>
       </div>
     </div>

      <slot>

      </slot>

    </div>
  </main>
</template>

<style scoped>

main {
  font-family: Inter, sans-serif;

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
