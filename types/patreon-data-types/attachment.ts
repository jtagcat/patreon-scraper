import {
  DataTypeKey,
  CommonAttributes,
  CommonDataProperties
} from "../response"

export interface PatreonAttachment extends CommonDataProperties {
  attributes: AttachmentAttributes
  type: DataTypeKey.Attachment
}

interface AttachmentAttributes extends CommonAttributes {
  name: string
  url: string
}
