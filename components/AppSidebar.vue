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
  RiCalendarLine,
  RiBarChartLine,
  RiCheckboxCircleLine,
  RiSettings4Line,
  RiCustomerService2Line,
  RiFlashlightLine,
  RiStickyNoteLine,
  RiLayoutGridLine,
  RiDownloadLine,
  RiUserStarLine,
  RiTeamLine
} from "@remixicon/vue";

const props = defineProps<SidebarProps>()

const data = {
  navMain: [
    {
      items: [
        {
          title: 'Tasks',
          url: '#',
          icon: RiCheckboxCircleLine,
          isActive: true,
        },
        {
          title: 'Activities',
          url: '#',
          icon: RiFlashlightLine
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
          icon: RiLayoutGridLine
        },
        {
          title: 'Schedule',
          url: '#',
          icon: RiCalendarLine,
        },
        {
          title: 'Note',
          url: '#',
          icon: RiStickyNoteLine
        },
        {
          title: 'Products',
          url: '#',
          icon: RiDownloadLine
        },
        {
          title: 'Report',
          url: '#',
          icon: RiBarChartLine
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
          icon: RiTeamLine
        },
        {
          title: 'Clients',
          url: '#',
          icon: RiUserStarLine
        },
      ],
    },
    {
      items: [
        {
          title: 'Settings',
          url: '#',
          icon: RiSettings4Line
        },
        {
          title: 'Support',
          url: '#',
          icon: RiCustomerService2Line
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
