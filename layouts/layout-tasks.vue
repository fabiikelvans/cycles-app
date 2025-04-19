<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'

import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {RiNotification3Fill, RiQuestionFill} from "@remixicon/vue";


</script>



<template>
  <SidebarProvider >
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4  bg-gradient-to-r from-white via-purple-50 to-red-50">
        <SidebarTrigger class="-ml-1" />
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-4"
        />
        <div class="flex items-center justify-between w-full">
          <div class="-space-y-1">
            <p class="text-sm text-muted-foreground">Welcome,</p>
            <h4>Jane McClain</h4>
          </div>

         <div class="hidden md:block">
           <SearchForm/>
         </div>

          <div class="flex items-center space-x-2">
            <div class="flex items-center justify-center p-2 rounded-full bg-white">
              <RiQuestionFill size="20"/>
            </div>

            <div class="flex items-center justify-center p-2 rounded-full bg-white">
              <RiNotification3Fill size="20"/>
            </div>
          </div>
        </div>
      </header>
     <main>
       <slot>
       </slot>
     </main>
    </SidebarInset>
  </SidebarProvider>
</template>


<style scoped>

</style>
