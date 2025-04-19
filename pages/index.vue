<script setup lang="ts">
import Hero from "~/components/pages/home/Hero.vue";
import Partners from "~/components/pages/home/Partners.vue";
import Features from "~/components/pages/home/Features.vue";
import Message from "~/components/pages/home/Message.vue";
import Benefits from "~/components/pages/home/Benefits.vue";
import Integrations from "~/components/pages/home/Integrations.vue";
import Testimonials from "~/components/pages/home/Testimonials.vue";
import Pricing from "~/components/pages/home/Pricing.vue";
import FAQ from "~/components/pages/home/FAQ.vue";
import CTA from "~/components/pages/home/CTA.vue";

definePageMeta({
  layout: 'layout-default',
});
</script>

<template>
  <div class="overflow-hidden overscroll-x-none space-y-2 md:space-y-24">
   <div>
     <Hero/>
     <Partners/>
   </div>
    <Features/>
    <Message/>
    <Benefits/>
    <Integrations/>
    <Testimonials/>
    <Pricing/>
    <FAQ/>
    <CTA/>
  </div>
</template>

