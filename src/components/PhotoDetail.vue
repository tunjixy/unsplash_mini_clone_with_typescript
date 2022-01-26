<template>
  <div>
    <div class="w-full">
      <img :src="photo.image" :alt="photo.description" />
      <div class="py-4 px-8">
        <h2 class="text-primary text-lg font-bold">
          {{ photo.user }}
        </h2>
        <p class="text-secondary">{{ photo.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Photo from '../types/photo'

defineProps({
  photo: {
    type: Object as PropType<Photo>,
    required: true,
  },
})
</script>
