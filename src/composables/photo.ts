import { ref } from 'vue'
import { usePhoto } from '../store/photo'
import Photo from '../types/photo'

export default function useSearchPhoto(query: string) {
  const store = usePhoto()

  const photos = ref<Photo[]>([])
  const loading = ref({
    photos: false,
    error: false,
  })

  async function fetchPhotos() {
    try {
      loading.value.photos = true
      loading.value.error = false
      const response = await store.searchPhotos({
        page: 1,
        perPage: 8,
        orderBy: 'latest',
        query: query ?? 'African',
      })
      loading.value.photos = false
      if (response) {
        photos.value = response.results.map((photo) => {
          return {
            user: photo.user.name,
            description: photo.alt_description,
            location: photo.user.location,
            image: photo.urls.regular,
          }
        })
      }
    } catch (err) {
      loading.value.photos = false
      loading.value.error = true
    }
  }

  return {
    loading,
    photos,
    fetchPhotos,
  }
}
