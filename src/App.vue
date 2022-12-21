<script setup>
import { onMounted } from 'vue'
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import {
  useItemComparison,
  itemOne,
  itemTwo,
} from './composables/itemComparison.js'

onMounted(() => {
  useItemComparison().getProducts()
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect item="itemOne" />
      <ItemSelect item="itemTwo" />
    </div>
    <ComparisonSummary />
  </div>
</template>
