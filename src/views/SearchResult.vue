<template>
  <div>
    <app-header>
      <p class="text-xl md:text-3xl">
        <span class="text-primary font-bold">
          {{ loading.photos ? 'Searching For ' : 'Search Results For ' }}
        </span>
        <span class="text-secondary">"{{ $route.params.search }}"</span>
      </p>
    </app-header>
    <div class="-mt-10">
      <div class="container">
        <template v-if="loading.photos">
          <div class="md:masonry-2-col lg:masonry-3-col mx-10">
            <div
              class="w-full inline-block mb-6 align-top"
              v-for="(i, index) in 8"
              :key="index"
            >
              <ui-placeholder-block />
            </div>
          </div>
        </template>
        <template v-else-if="!loading.photos && loading.error">
          <ui-error-state @tryAgain="fetchPhotos">
            Error searching for photo
          </ui-error-state>
        </template>
        <template v-else>
          <ui-empty-state v-if="photos.length === 0">
            No photo available for "{{ $route.params.search }}"
          </ui-empty-state>
          <photo-list v-else :photos="photos" @onPhotoClicked="photoClicked" />
        </template>
      </div>
    </div>
    <ui-modal :show="showModal" @close="hideModal">
      <photo-detail :photo="currentPhoto" />
    </ui-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useSearchPhoto from '../composables/photo'
import Photo from '../types/photo'

const route = useRoute()

const { loading, photos, fetchPhotos } = useSearchPhoto(
  route.params.search as string
)
const showModal = ref(false)
const currentPhoto = ref<Photo>()

onMounted(() => {
  fetchPhotos()
})

function hideModal() {
  showModal.value = false
}
function photoClicked(photo: Photo) {
  currentPhoto.value = photo
  showModal.value = true
}
</script>
