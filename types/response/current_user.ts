import { PatreonUser } from "../patreon-data-types/user"
import { GenericResponse } from "../response"

export type TCurrentUserResponse = GenericResponse<PatreonUser, void>
