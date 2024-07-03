import { JobListInterface } from '@/interface/job';
import service from '@/utils/request';


export const getJobListReq = (params: {page: number}) => {
  return service<JobListInterface>({
    url: '/api/job',
    method: 'GET',
    params,
  });
};
export const PostJobListReq = (data: JobListInterface) => {
  return service<any>({
    url: '/api/job',
    method: 'POST',
    data,
  });
};

export const DeleteJobListReq = (data: {id: number}) => {
  return service<any>({
    url: '/api/job',
    method: 'DELETE',
    data,
  });
};
