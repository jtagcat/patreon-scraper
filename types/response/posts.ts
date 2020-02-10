import { PatreonPost } from "../patreon-data-types/post"
import { GenericResponse } from "../response"

export type TPostsResponse = GenericResponse<PatreonPost[], PostsResponseMeta>

interface PostsResponseMeta {
  pagination: PaginationInfo
}

interface PaginationInfo {
  cursors: CursorsInfo
  total: number
}

interface CursorsInfo {
  next: string
}
