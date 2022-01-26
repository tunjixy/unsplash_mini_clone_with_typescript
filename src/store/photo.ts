import { defineStore } from 'pinia'
import PhotoService from '../services/PhotoService'
import SearchPhoto from '../types/search_photo'
import PhotoResponse from '../types/photo_response'

export const usePhoto = defineStore('photo', {
  actions: {
    searchPhotos(payload: SearchPhoto) {
      return new Promise<PhotoResponse>((resolve, reject) => {
        PhotoService.searchPhotos(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => reject(err))
      })
    },
  },
})
