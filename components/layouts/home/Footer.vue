<script setup lang="ts">

import {PhGithubLogo, PhLinkedinLogo, PhXLogo} from "@phosphor-icons/vue";
</script>

<template>
<div class=" mx-auto py-12 px-7 md:px-20">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="col-span-1 flex md:flex-col flex-row md:justify-between justify-between md:items-center">

      <div class="flex items-center space-x-3">
        <div class="relative h-10 w-10">
          <img src="~/assets/images/logos/logo.svg" alt="Cycles logo">
        </div>
        <span class="text-xl font-semibold font-mono">Cycles</span>
      </div>

      <div class="flex items-center space-x-4">
        <PhXLogo size="24" weight="duotone"  class="hover:cursor-pointer"/>
        <PhGithubLogo size="24" weight="duotone" class="hover:cursor-pointer"/>
        <PhLinkedinLogo size="24" weight="duotone" class="hover:cursor-pointer"/>
      </div>

    </div>

    <div class="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="space-y-4">
        <h4 class="text-base">Product</h4>
        <ul class="space-y-3">
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"> <NuxtLink to="#">Features </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Benefits </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Integration </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Pricing </NuxtLink></li>
        </ul>
      </div>

      <div class="space-y-4">
        <h4 class="text-base"> Company </h4>
        <ul class="space-y-3">
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"> <NuxtLink to="#"> About </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Blog </NuxtLink></li>
        </ul>
      </div>


      <div class="space-y-4">
        <h4 class="text-base"> Resources </h4>
        <ul class="space-y-3">
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"> <NuxtLink to="#"> Contact </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Privacy Policy </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> Terms & Conditions </NuxtLink></li>
        </ul>
      </div>

      <div class="space-y-4">
        <h4 class="text-base">Other</h4>
        <ul class="space-y-3">
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"> <NuxtLink to="#"> 404 </NuxtLink></li>
          <li class="text-sm font-light text-neutral-400 hover:text-neutral-200"><NuxtLink to="#"> 505 </NuxtLink></li>
        </ul>
      </div>

    </div>
  </div>

  <hr class="border border-white/10 my-8 w-[80%] mx-auto" />
  <div class="w-full text-center">
    <p class="text-neutral-400 font-light text-sm">© 2025 Cycles All rights reserved</p>
  </div>
</div>
</template>

<style scoped>

</style>
