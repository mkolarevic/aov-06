<template>
  <p v-if="!cheapItem || !expensiveItem" class="mx-5 text-center">
    Please select both items
  </p>
  <p v-else-if="cheapItem.id == expensiveItem.id" class="mx-5 text-center">
    The two items are the same
  </p>
  <p v-else class="mx-5 text-center">
    You can get <strong>{{ division }}</strong>
    <em>{{ cheapItem }} items</em> for about the same price as a single
    <em>Y {{ expensiveItem }}</em>
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { useItemComparison } from '../composables/itemComparison.js'

const cheapItem = computed(() => useItemComparison().cheapItem.value)
const expensiveItem = computed(() => useItemComparison().expensiveItem.value)
const division = computed(() => useItemComparison().division.value)
</script>
