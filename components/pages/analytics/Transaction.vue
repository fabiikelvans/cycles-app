<script setup lang="ts">

import {Card} from "~/components/ui/card";
import {RiSearchLine, RiReceiptLine} from "@remixicon/vue";
import TransactionTable from "~/components/pages/analytics/TransactionTable.vue";
</script>

<template>
<Card class="bg-neutral-900 border-none text-white px-4">
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <RiReceiptLine size="20" />
        <h4> Recent Transactions </h4>
      </div>

      <div class="flex items-center justify-center p-3 bg-neutral-800 rounded-full">
        <RiSearchLine />
      </div>
    </div>

    <div class="mt-6">
      <TransactionTable />
    </div>
  </div>
</Card>
</template>

<style scoped>

</style>
