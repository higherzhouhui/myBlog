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
  subTitle?: string,
  hrefList?: any[],
}

export interface BlogRequestInterface {
  id: number | string | null,
  type?: string,
}

export interface BlogResponseInterface {
  code: number,
  data: {
    list: BlogListInterface[],
  }
}