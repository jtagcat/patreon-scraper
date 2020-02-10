import {
  DataTypeKey,
  CommonAttributes,
  CommonDataProperties,
  CommonRelationships,
  GenericRelationshipAttributes
} from "../response"

export interface PatreonAccessRule extends CommonDataProperties {
  attributes: AccessRuleAttributes
  relationships: AccessRuleRelationships
  type: DataTypeKey.AccessRule
}

interface AccessRuleAttributes extends CommonAttributes {
  access_rule_type: AccessRuleTypeKey
  amount_cents: number | null
  post_count: number
}

enum AccessRuleTypeKey {
  Patrons = "patrons"
}

interface AccessRuleRelationships extends CommonRelationships {
  tier?: GenericRelationshipAttributes<any | null, void>
}
