import { computed, ref } from 'vue'
export const itemOne = ref(null)
export const itemTwo = ref(null)
export const allProducts = ref([])

export const useItemComparison = () => {
  async function getProducts() {
    allProducts.value = await fetch('https://dummyjson.com/products')
      .then(res => res?.json())
      .then(data => data.products)
      .catch(err => [])
    console.log(allProducts.value)
  }

  function setItemValue(itemName, value) {
    if (itemName === 'itemOne') {
      itemOne.value = value
      console.log(itemOne.value)
      return
    }
    if (itemName === 'itemTwo') {
      itemTwo.value = value
      return
    }
  }

  const cheapItem = computed(() => {
    if (!itemOne.value || !itemTwo.value) return null
    if (itemOne.value.price < itemTwo.value.price) return itemOne.value
    if (itemOne.value.price > itemTwo.value.price) return itemTwo.value
    return itemTwo.value
  })

  const expensiveItem = computed(() => {
    if (!itemOne.value || !itemTwo.value) return null
    if (itemOne.price.value > itemTwo.price.value) return itemOne.value
    if (itemOne.price.value < itemTwo.price.value) return itemTwo.value
    return itemOne.value
  })

  const division = computed(() => {
    if (!expensiveItem.value || !cheapItem.value) {
      return 0
    }
    return (expensiveItem.value.price / cheapItem.value.price).toFixed(1)
  })

  return {
    division,
    cheapItem,
    expensiveItem,
    getProducts,
    setItemValue,
  }
}
