import { ImageAPI } from "./image-api.model"

export interface PhotoList {
  page: number
  limit: number
  images: ImageAPI[]
}
