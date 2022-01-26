<template>
  <div class="relative">
    <input
      @input="onChange($event)"
      v-model="searchQuery"
      class="appearance-none w-full py-4 bg-white shadow-custom leading-tight rounded-md pl-12 pr-4 border focus:border-primary outline-none text-sm text-primary placeholder-primary"
      type="text"
      :placeholder="placeholder"
      @keydown.enter="navigateToSearchResultScreen"
    />
    <img
      v-svg-inline
      class="text-secondary absolute w-4 h-4 top-4 left-5"
      src="@/assets/icons/search.svg"
      alt="search icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  placeholder: {
    type: String,
    default: 'Search',
  },
})
const emit = defineEmits(['search'])
const router = useRouter()

const searchQuery = ref('')

function onChange(e: Event) {
  searchQuery.value = (e.target as HTMLInputElement).value
  emit('search', (e.target as HTMLInputElement).value)
}

function navigateToSearchResultScreen() {
  router.push(`/search-result/${searchQuery.value}`)
}
</script>
