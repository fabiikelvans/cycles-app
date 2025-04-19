<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-2'

const accordionItems = [
  { value: 'item-1', title: 'Pension Contributions', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Devices', content: '💻 MacBook Pro M4 - 32GB 1TB ' },
  { value: 'item-3', title: 'Compensation Summary', content: 'Yes! You can use the transition prop to configure the animation.' },
  { value: 'item-4', title: 'Employee Benefits', content: 'Yes! You can use the transition prop to configure the animation.' },
]
</script>

<template>
<Card class="relative w-full h-80 p-6 rounded-4xl bg-white/50 backdrop-blur-lg border-none shadow-none">
  <div>
    <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
        <AccordionTrigger class="font-light text-base">{{ item.title }}</AccordionTrigger>
        <AccordionContent class="font-light">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</Card>
</template>

<style scoped>

</style>
