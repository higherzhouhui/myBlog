import { BlogListInterface, BlogRequestInterface, BlogResponseInterface } from '@/interface/common';
import service from '@/utils/request';

export const getBlogListReq = (params: BlogRequestInterface) => {
  return service<BlogResponseInterface>({
    url: '/api/blog',
    method: 'GET',
    params,
  });
};
export const PostBlogListReq = (data: BlogListInterface) => {
  return service<any>({
    url: '/api/blog',
    method: 'POST',
    data,
  });
};
