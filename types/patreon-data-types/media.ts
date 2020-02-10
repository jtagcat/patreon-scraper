import {
  CommonDataProperties,
  DataTypeKey,
  CommonAttributes
} from "../response"

export interface PatreonMedia extends CommonDataProperties {
  attributes: MediaAttributes
  type: DataTypeKey.Media
}

interface MediaAttributes extends CommonAttributes {
  download_url: string
  file_name: string
  image_urls: ImageUrls
  metadata: MediaMetadata
}

interface ImageUrls {
  default: string
  original: string
  thumbnail: string
}

interface MediaMetadata {
  dimensions: MediaDimensions
}

interface MediaDimensions {
  h: number
  w: number
}
