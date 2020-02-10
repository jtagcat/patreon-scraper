import {
  DataTypeKey,
  CommonAttributes,
  CommonDataProperties,
  ICommonRelationshipAttributes,
  CommonRelationships,
  GenericRelationshipAttributes
} from "../response"
import { Maybe } from "../common"

export interface PatreonPost extends CommonDataProperties {
  attributes: PostAttributes
  relationships: PostRelationships
  type: DataTypeKey.Post
}

interface PostAttributes extends CommonAttributes {
  change_visibility_at: Date | null
  comment_count: number
  content: string
  created_at?: Date | null
  current_user_can_delete: boolean
  current_user_can_view: boolean
  current_user_has_liked: boolean
  deleted_at?: Date | null
  edit_url?: string
  edited_at?: Date | null
  // TODO: embed type
  embed: Maybe<any>
  image: Maybe<ImageAttributes>
  is_automated_monthly_charge?: boolean
  is_paid: boolean
  like_count: number
  min_cents_pledged_to_view: Maybe<number>
  patreon_url: string
  patron_count: number
  pledge_url: string
  post_file: Maybe<FileAttributes>
  // TODO: metadata type
  post_metadata: Maybe<unknown>
  post_type: ApiPostTypeKey
  published_at: Date
  scheduled_for?: Date | null
  teaser_text: Maybe<string>
  thumbnail?: ThumbnailData
  title: string
  upgrade_url?: string
  url: string
  was_posted_by_campaign_owner: boolean
}

interface PostRelationships extends CommonRelationships {
  access_rules?: ICommonRelationshipAttributes[]
  attachments?: ICommonRelationshipAttributes[]
  campaign?: ICommonRelationshipAttributes
  poll?: GenericRelationshipAttributes<any | null, void>
  user?: ICommonRelationshipAttributes
  user_defined_tags?: ICommonRelationshipAttributes[]
}

export interface FileAttributes extends CommonAttributes {
  name: string
  url: string
}

interface ImageAttributes extends CommonAttributes {
  height: number
  large_url: string
  thumb_url: string
  url: string
  width: number
}

export enum ApiPostTypeKey {
  ImageFile = "image_file",
  ImageEmbed = "image_embed",
  AudioFile = "audio_file",
  VideoEmbed = "video_embed",
  AudioEmbed = "audio_embed",
  Text = "text_only",
  LegacyImage = "image",
  Link = "link",
  Poll = "poll",
  Livestream = "livestream",
  LivestreamCrowdcast = "livestream_crowdcast",
  LivestreamYoutube = "livestream_youtube",
  Deleted = "deleted"
}

interface ThumbnailData {
  huge: string
  large: string
  large_2: string
  old_thumb: string
  small: string
  small_2: string
  square_large: string
  square_large_2: string
  square_small: string
  square_small_2: string
  url: string
}
