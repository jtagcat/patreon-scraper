export interface MediaIdentifier {
  name: string
  url: string
}

export interface AttachmentIdentifier extends FileUrlQS {
  name: string
}

export interface FileUrlQS {
  h: string
  i: string
}

export type Maybe<T> = T | null
