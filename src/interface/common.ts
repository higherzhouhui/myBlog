export interface BlogListInterface {
  id?: number,
  title: string;
  label: string[],
  time?: string,
  uptime?: string,
  creator: string,
  lookNum?: number,
  type: string,
  abstract: string,
  logo: string,
  content?: string,
}

export interface BlogRequestInterface {
  id: number | null,
  type?: string,
}

export interface BlogResponseInterface {
  code: number,
  data: {
    list: BlogListInterface[],
  }
}