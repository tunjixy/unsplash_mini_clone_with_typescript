<template>
  <div class="md:masonry-2-col lg:masonry-3-col mx-0 md:mx-10">
    <div
      class="inline-block mb-6 align-top"
      v-for="(photo, index) in photos"
      :key="index"
      @click="photoClicked(photo)"
    >
      <div class="w-full relative cursor-pointer">
        <img
          class="w-full bg-light-gray object-cover rounded-md shadow-custom"
          :src="photo.image"
          :alt="photo.description"
        />
        <div
          class="absolute bg-black bg-opacity-40 overflow-hidden inset-0 flex flex-col justify-end rounded-lg px-6 pb-6"
        >
          <h2 class="text-white text-lg font-bold">
            {{ photo.user }}
          </h2>
          <p class="text-gray-100">{{ photo.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Photo from '../types/photo'

defineProps({
  photos: {
    type: Array as PropType<Photo[]>,
    required: true,
  },
})
const emit = defineEmits(['onPhotoClicked'])

function photoClicked(photo: Photo) {
  emit('onPhotoClicked', photo)
}
</script>
