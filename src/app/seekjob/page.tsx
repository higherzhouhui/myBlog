import SeekJobComp from '@/components/SeekJob';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '机会-专注远程工作交流，提供用人单位与求职者沟通的桥梁',
  description: '具有8年历史的远程工作招聘社区，也是远程办公互联网工作者们的聚集地。在社区，我们进行有价值的话题讨论，也分享远程、外包、零活、兼职、驻场等非主流工作机会。「只工作，不上班」是我们倡导的工作态度。',
  keywords: '社区,专注远程办公及招聘,远程办公从电鸭开始,远程工作,自由职业,兼职外包,在家工作,remote working,remotely,freelancer,',
}

export default function SeekJob() {
  return (
    <SeekJobComp />
  );
}