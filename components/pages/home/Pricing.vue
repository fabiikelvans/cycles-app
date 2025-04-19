<script setup lang="ts">
import SectionTitle from "~/components/pages/home/SectionTitle.vue";
import PricingCard from "~/components/pages/home/PricingCard.vue";

const plans = [
  {
    title: 'Starter',
    price: '$0',
    duration: 'Forever',
    billed: 'Billed monthly.',
    description: 'Perfect for small teams and startups',
    feature_title: 'Free Plan includes',
    features: [
      'Collaborate with up to 3 teammates',
      'Core task management features',
      'Unlimited projects and tasks',
      'Board and list views',
      'Basic integrations'
    ],
    cta: 'Start Free Trial',
  },
  {
    title: 'Pro',
    price: '$29',
    duration: 'per month',
    billed: 'Billed monthly.',
    feature_title: 'All Free plan features, plus',
    description: 'Advanced tools for growing teams',
    features: [
      'Collaborate with up to 10 teammates',
      'Custom workflows and templates',
      'Advanced tracking & reports',
      'Priority integrations',
      'Email support'
    ],
    cta: 'Choose Pro',
    isHighlighted: true,
  },
  {
    title: 'Enterprise',
    price: '$52',
    feature_title: 'All Pro plan features, plus',
    description: 'Complete collaboration for larger teams.',
    duration: 'per month',
    billed: 'Billed monthly.',
    features: [
      'Up to 25 teammates',
      'Unlimited workflows & automations',
      'Real-time analytics',
      'Premium integrations',
      'Priority support'
    ],
    cta: 'Sign Up Now',
  },
]
</script>

<template>
<div class="py-12">
  <SectionTitle
    base="Pricing"
    title="Choose the Perfect Plan for Your Business"
    description="Whether you're just starting or scaling up, Cycle has a plan that fits your needs."
  />

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <PricingCard
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </div>
</div>
</template>

<style scoped>

</style>
