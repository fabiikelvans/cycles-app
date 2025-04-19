<script setup lang="ts">

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar';

import {
  PhCalendar,
  PhChartBar,
  PhCheckCircle, PhGearSix, PhHeadset,
  PhLightning,
  PhNote,
  PhSquaresFour,
  PhTrayArrowDown, PhUserCircleCheck, PhUsers
} from "@phosphor-icons/vue";

const props = defineProps<SidebarProps>()

const data = {
  navMain: [
    {
      items: [
        {
          title: 'Tasks',
          url: '#',
          icon: PhCheckCircle,
          isActive: true,
        },
        {
          title: 'Activities',
          url: '#',
          icon: PhLightning
        },
      ],
    },
    {
      title: 'MAIN',
      url: '#',
      items: [
        {
          title: 'Dashboard',
          url: '#',
          icon: PhSquaresFour
        },
        {
          title: 'Schedule',
          url: '#',
          icon: PhCalendar,
        },
        {
          title: 'Note',
          url: '#',
          icon: PhNote
        },
        {
          title: 'Products',
          url: '#',
          icon: PhTrayArrowDown
        },
        {
          title: 'Report',
          url: '#',
          icon: PhChartBar
        },

      ],
    },
    {
      title: 'RECORDS',
      url: '#',
      items: [
        {
          title: 'Team',
          url: '#',
          icon: PhUsers
        },
        {
          title: 'Clients',
          url: '#',
          icon:PhUserCircleCheck
        },
      ],
    },
    {
      items: [
        {
          title: 'Settings',
          url: '#',
          icon: PhGearSix
        },
        {
          title: 'Support',
          url: '#',
          icon: PhHeadset
        },
      ],
    },
  ],
}
</script>

<template >
  <Sidebar v-bind="props" class="side-bg">
    <SidebarHeader>
      <!-- Logo -->
      <div class="flex items-center space-x-1 mx-2">
        <div class="relative h-10 w-10">
          <img src="~/assets/images/logos/logo-1.svg" alt="Cycles logo">
        </div>
        <span class="text-lg font-semibold font-mono">Cycles</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="item in data.navMain" :key="item.title">
        <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="space-y-2">
            <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title" class="py-1">
              <SidebarMenuButton as-child :is-active="childItem.isActive" class="py-4" >
                <a :href="childItem.url">
                  <component
                    v-if="childItem.icon"
                    :is="childItem.icon"
                    size="24"
                    class="icon"
                    weight="duotone"
                  />
                  <span class="text-base">{{ childItem.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped>
.icon {
  height: 20px;
  width: 20px;
}

</style>
