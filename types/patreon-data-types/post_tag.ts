import {
  DataTypeKey,
  CommonAttributes,
  CommonDataProperties
} from "../response"

export interface PatreonPostTag extends CommonDataProperties {
  attributes: PostTagAttributes
  type: DataTypeKey.PostTag
}

interface PostTagAttributes extends CommonAttributes {
  background_image_url: string | null
  cardinality: number
  is_featured: boolean
  ordinal_number: number | null
  tag_type: TagTypeTypeKey
  value: string
}

enum TagTypeTypeKey {
  UserDefined = "user_defined"
}
