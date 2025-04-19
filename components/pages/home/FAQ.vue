<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const accordionItems = [
  { value: 'item-1', title: 'What is Cycles and how does it work?', content: 'Cycles is an all-in-one automation tool powered by AI and machine learning. It helps businesses streamline tasks, manage projects, and collaborate with teams effortlessly. The AI teammate provides smart suggestions to improve workflows and track progress in real time.' },
  { value: 'item-2', title: 'Can I use Cycles for free?', content: 'Yes! Cycles offers a Free plan with access to essential features for up to 3 users. It’s perfect for small teams or individuals who want to explore our core functionalities.' },
  { value: 'item-3', title: 'What integrations does Cycles support?', content: 'Cycles integrates with a variety of popular tools including Slack, Google Drive, Zapier, Trello, and more. These integrations allow you to connect with your favorite apps and streamline your workflows.' },
  { value: 'item-4', title: 'How secure is Cycles?', content: 'We take security very seriously. Cycles uses industry-standard encryption and offers role-based access controls to ensure that your data is protected and only accessible to authorized users.' },
]

</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start py-12 md:py-24">

  <div class="flex flex-col space-x-2 py-12 space-y-4">
    <Badge
      variant="outline"
      class="font-normal text-sm bg-gradient-to-r from-emerald-300 px-4 py-1 rounded-full to-white bg-clip-text text-transparent border-white/10"
    >
      FAQ
    </Badge>

    <h1 class="text-4xl md:text-4xl lg:text-5xl tracking-tight font-normal w-[80%]">
      Got questions? We've got answers.
    </h1>

    <p class="text-neutral-400 md:text-base w-[80%] font-light">
      Find answers to common questions about Cycles and its capabilities.
    </p>
  </div>

  <div class="mt-0 md:mt-12">
    <Accordion type="single" class="w-full space-y-2" collapsible >
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value" class="border border-white/20 px-4 rounded-xl">
        <AccordionTrigger class="hover:underline font-normal text-base">{{ item.title }}</AccordionTrigger>
        <AccordionContent class="font-light text-neutral-400 text-base relative ">
          <div class="absolute h-40 w-40 bg-white/10 blur-2xl -bottom-2 left-[25%]" />
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>
</template>

<style scoped>

</style>
