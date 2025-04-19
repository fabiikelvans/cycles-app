<script setup lang="ts">


import {PhBriefcase, PhUserPlus, PhUsers} from "@phosphor-icons/vue";
import HrCard1 from "~/components/pages/hr/HrCard1.vue";
import HrCard2 from "~/components/pages/hr/HrCard2.vue";
import HrCard3 from "~/components/pages/hr/HrCard3.vue";
import HrCard4 from "~/components/pages/hr/HrCard4.vue";
import HrCard5 from "~/components/pages/hr/HrCard5.vue";
import HrCard6 from "~/components/pages/hr/HrCard6.vue";

definePageMeta({
  layout: 'layout-hr'
});

useHead({
  title: 'Cycles | Human Resources',
})
</script>

<template>
<div class="container my-12 space-y-8 min-h-screen">
    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight">
      Welcome in, Mikey
    </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="flex flex-col md:flex-row md:items-center items-start space-x-1 w-full">
        <div class="gap-6 w-[15%] space-y-2 ">
          <h4 class="font-light">Interviews</h4>
          <div class="flex items-center font-light text-sm justify-start rounded-full bg-foreground text-white h-12 px-4">
            15%
          </div>
        </div>

        <div class="gap-6 w-[15%] space-y-2 ">
          <h4 class="font-light"> Hired </h4>
          <div class="flex items-center font-light text-sm justify-start rounded-full bg-yellow-400 text-white h-12 px-4">
            15%
          </div>
        </div>

        <div class="gap-6 w-[60%] space-y-2 ">
          <h4 class="font-light"> Project time </h4>
          <div class="relative flex items-center font-light text-sm justify-start rounded-full h-12 px-4 overflow-hidden text-black border ">
            <!-- Gray diagonal stripes -->
            <div class="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(-45deg,rgba(156,163,175,0.6)_25%,transparent_25%,transparent_50%,rgba(156,163,175,0.6)_50%,rgba(156,163,175,0.6)_75%,transparent_75%,transparent)] animate-loading-stripes"></div>

            <!-- Foreground Content -->
            <span class="relative z-10">60%</span>
          </div>



        </div>

        <div class="gap-6 w-[10%]  space-y-2">
          <h4 class="font-light"> Output </h4>
          <div class="flex items-center font-light text-sm justify-start rounded-full border border-gray-800/50 bg-transparent h-12 px-4">
            10%
          </div>
        </div>
    </div>

    <div class="justify-self-start md:justify-self-end flex items-center space-x-8">
      <div>
        <div class="flex items-end space-x-1 space-y-1">
          <div class="bg-foreground/20 p-1 h-fit w-fit rounded-md">
            <PhUsers size="16" />
          </div>
          <h1 class="text-5xl md:text-6xl font-extralight">78</h1>
        </div>
        <p class="text-sm font-light"> Employee </p>
      </div>

      <div>
        <div class="flex items-end space-x-1 space-y-1">
          <div class="bg-foreground/20 p-1 h-fit w-fit rounded-md">
            <PhUserPlus size="16" />
          </div>
          <h1 class="text-5xl md:text-6xl font-extralight"> 56 </h1>
        </div>
        <p class="text-sm font-light"> Hiring </p>
      </div>

      <div>
        <div class="flex items-end space-x-1 space-y-1">
          <div class="bg-foreground/20 p-1 h-fit w-fit rounded-md">
            <PhBriefcase size="16" />
          </div>
          <h1 class="text-5xl md:text-6xl font-extralight"> 124 </h1>
        </div>
        <p class="text-sm font-light"> Projects </p>
      </div>
    </div>


  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
    <div><HrCard1/></div>
    <div><HrCard2/></div>
    <div><HrCard3/></div>
    <div class="row-span-2 h-full">
      <HrCard4/>
    </div>
    <div>
      <HrCard5/>
    </div>
    <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
      <HrCard6/>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>
