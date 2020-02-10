import {
  DataTypeKey,
  CommonAttributes,
  CommonDataProperties
} from "../response"

export interface PatreonPollChoice extends CommonDataProperties {
  attributes: PollChoiceAttributes
  type: DataTypeKey.PollChoice
}

interface PollChoiceAttributes extends CommonAttributes {
  choice_type: ChoiceTypeTypeKey
  num_responses: number
  position: number
  text_content: string
}

enum ChoiceTypeTypeKey {
  Toggle = "toggle"
}
