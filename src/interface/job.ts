export interface JobListInterface {
  id: string,
  category: {name: string, id: number};
  comments_count: number,
  modified_at: string,
  published_at: string,
  creator: string,
  marks_count: number,
  last_comment_at: string,
  last_comment: {user: {nickname: string}},
  summary: string,
  user: JobPublisherInterface,
  views_count: number,
  tags: TagsInterface[],
  touched_at: string,
  title: string,
  expand?: false,
}

export interface TagsInterface {
  id: number,
  name: string,
}

export interface JobPublisherInterface {
  avatar_url: string,
  contents_deleted_count: number,
  created_at: string,
  nickname: string,
  id: string,
  level: number
  roles: string[],
  tag_identity: string,
}