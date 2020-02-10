import { PatreonPost } from "../patreon-data-types/post"
import { GenericResponse } from "../response"

export type TStreamResponse = GenericResponse<PatreonPost[], StreamResponseMeta>

interface StreamResponseMeta {
  posts_count: number
}
