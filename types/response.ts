import { Response } from "cloudscraper"
import { PatreonAccessRule } from "./patreon-data-types/access_rule"
import { PatreonAttachment } from "./patreon-data-types/attachment"
import { PatreonCampaign } from "./patreon-data-types/campaign"
import { Poll } from "./patreon-data-types/poll"
import { PatreonPollChoice } from "./patreon-data-types/poll_choice"
import { PatreonPost } from "./patreon-data-types/post"
import { PatreonPostTag } from "./patreon-data-types/post_tag"
import { PatreonUser } from "./patreon-data-types/user"
import { PatreonMedia } from "./patreon-data-types/media"

export interface TypedResponse<T> extends Response {
  body: T
}

export interface GenericResponse<T, U> {
  data: T
  included: TDataObject[]
  links: CommonLinks
  meta: U
}

export interface CommonDataProperties {
  id: string
}

export type TDataObject =
  | PatreonUser
  | PatreonPost
  | PatreonPollChoice
  | PatreonPostTag
  | PatreonAccessRule
  | PatreonAttachment
  | PatreonCampaign
  | Poll
  | PatreonMedia

export interface CommonAttributes {}

// tslint:disable-next-line: no-empty-interface
export interface CommonRelationships {}

export type ICommonRelationshipAttributes = GenericRelationshipAttributes<
  DataIdentifier,
  CommonLinks
>

export interface GenericRelationshipAttributes<
  T,
  U extends CommonLinks | void
> {
  data: T
  links?: U
}

export interface CommonLinks {
  first?: string
  next?: string
  related?: string
  self?: string
}

export interface DataIdentifier {
  id: string
  type: DataTypeKey
}

export enum DataTypeKey {
  Attachment = "attachment",
  Post = "post",
  Reward = "reward",
  AccessRule = "access-rule",
  PostTag = "post_tag",
  Campaign = "campaign",
  User = "user",
  Poll = "poll",
  PollChoice = "poll_choice",
  Pledge = "pledge",
  Media = "media"
}
