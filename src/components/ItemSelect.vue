<script setup>
import { ref, watch } from 'vue'
import { useItemComparison, allProducts } from '../composables/itemComparison'

const props = defineProps({
  item: String,
})

const selected = ref(null)

watch(
  () => selected.value,
  newValue => {
    useItemComparison().setItemValue(props.item, newValue)
  }
)
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark max-w-xs">
    <option disabled value="" v-if="allProducts.length === 0">
      Select an item
    </option>
    <template v-else>
      <option v-for="product in allProducts" :value="product">
        {{ product.title }}
      </option>
    </template>
  </select>
</template>
