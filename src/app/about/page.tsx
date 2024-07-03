import AboutComp from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于—个人简介',
  description: '8年工作经验，科班出身，精通前端三要素，从事web前端相关工作经验丰富',
  keywords: 'web,html, css, nextjs, nustjs, javascript;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js, uniapp, nodejs',
}

export default function About() {
  return (
    <AboutComp />
  );
}