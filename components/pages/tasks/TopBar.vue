<script setup lang="ts">

import {Separator} from "~/components/ui/separator";
import {PhCaretDown, PhFunnel, PhPlus} from "@phosphor-icons/vue";


const users = [
  {
    src: "https://github.com/unovue.png",
    alt: "@unovue",
    fallback: "CN",
  },
  {
    src: "https://github.com/vercel.png",
    alt: "@vercel",
    fallback: "VC",
  },
  {
    src: "https://github.com/nuxt.png",
    alt: "@nuxt",
    fallback: "NX",
  },
  {
    src: "https://github.com/unovue.png",
    alt: "@unovue",
    fallback: "CN",
  },
];
</script>

<template>
  <Card class="flex flex-col md:flex-row items-center justify-between w-full px-6">
    <div class="flex items-center space-x-4 md:space-x-8">
      <div>
        <h2 class="text-lg">May</h2>
        <p class="text-sm text-muted-foreground">Today, is Sunday, May 14th, 2025</p>
      </div>

      <div>
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-10"
        />
      </div>

      <div class="flex items-center space-x-2">
        <h2 class="text-lg"> Board </h2>
        <p>-</p>
        <Button variant="ghost">
          <span>Daily Tasks</span>
          <PhCaretDown/>
        </Button>
      </div>
    </div>

    <div class="flex items-center space-x-6">
      <div class="flex -space-x-3">
        <Avatar v-for="(user, index) in users" :key="index" class="border-2 border-background">
          <AvatarImage :src="user.src" :alt="user.alt" />
          <AvatarFallback>{{ user.fallback }}</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-10"
        />
      </div>

      <div class="flex items-center space-x-2">
        <Button variant="secondary">
          <PhFunnel />
          <span>Filters</span>
        </Button>

        <Button>
          <PhPlus />
          <span> Create task </span>
        </Button>
      </div>
    </div>
  </Card>

</template>

<style scoped>

</style>
