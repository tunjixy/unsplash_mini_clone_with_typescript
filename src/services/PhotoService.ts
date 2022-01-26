import Api from '../services/Api'
import SearchPhoto from '../types/search_photo'

export default {
  searchPhotos(payload: SearchPhoto) {
    return Api().get(
      `search/photos?page=${payload.page}&per_page=${payload.perPage}&query=${payload.query}&orderBy=${payload.orderBy}`
    )
  },
}
