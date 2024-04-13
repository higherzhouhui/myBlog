import { BlogListInterface, BlogRequestInterface, BlogResponseInterface } from '@/interface/common';
import service from '@/utils/request';


export const getSkillListReq = (params: BlogRequestInterface) => {
  return service<BlogResponseInterface>({
    url: '/api/skill',
    method: 'GET',
    params,
  });
};
export const PostSkillListReq = (data: BlogListInterface) => {
  return service<any>({
    url: '/api/skill',
    method: 'POST',
    data,
  });
};

export const DleteSkillListReq = (data: {id: number}) => {
  return service<any>({
    url: '/api/skill',
    method: 'DELETE',
    data,
  });
};
