<script setup lang="ts">
import {RiMore2Fill, RiLink, RiNotification3Fill} from "@remixicon/vue";

const props = defineProps<{
  tag_1: string;
  tag_2: string;
  title: string;
  bgColor?: string; // Add the bgColor prop
  mainColor?: string; // Add the bgColor prop
  notification?: string;
  links?: string;
}>();

const users = [
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2VzfGVufDB8fDB8fHww",
    alt: "@unovue",
    fallback: "CN",
  },
  {
    src: "https://images.unsplash.com/photo-1613730317814-1cede28e0151?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZhY2VzfGVufDB8fDB8fHww",
    alt: "@vercel",
    fallback: "VC",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhY2VzfGVufDB8fDB8fHww",
    alt: "@nuxt",
    fallback: "NX",
  },
  {
    src: "https://images.unsplash.com/photo-1608549036505-ead5b1de5417?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZhY2VzfGVufDB8fDB8fHww",
    alt: "@unovue",
    fallback: "CN",
  },
];
</script>

<template>
  <Card :class="['p-3 border-none shadow-none hover:cursor-pointer', bgColor ? bgColor : '']">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <Badge :class="`bg-white/60 ${mainColor}`">#{{ tag_1 }}</Badge>
        <Badge :class="`bg-white/60 ${mainColor}`">#{{ tag_2 }}</Badge>
      </div>

      <div class="flex items-center justify-center rounded-sm border border-black/60 h-6 w-6 mix-blend-overlay">
        <RiMore2Fill size="12" weight="fill" class="text-black"/>
      </div>
    </div>

    <div :class="` font-semibold text-lg ${mainColor}`">
      <h2>{{title}}</h2>

      <div class="mt-2">
        <slot></slot>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex -space-x-3">
        <Avatar v-for="(user, index) in users" :key="index" class="border-2 border-background h-6 w-6" >
          <AvatarImage :src="user.src" :alt="user.alt" />
          <AvatarFallback>{{ user.fallback }}</AvatarFallback>
        </Avatar>
      </div>

      <div class="flex items-center space-x-2">
        <Badge variant="outline" size="lg" :class="`${mainColor} border border-white`">
          <RiNotification3Fill size="20"/>
          <span>{{ notification }}</span>
        </Badge>

        <Badge variant="outline" :class="`${mainColor} border border-white`">
          <RiLink />
          <span>{{ links }}</span>
        </Badge>
      </div>
    </div>
  </Card>
</template>

<style scoped>
</style>
