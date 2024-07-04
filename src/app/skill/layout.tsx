import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技术分享',
  description: '致力于技术分享与生活记录',
  keywords: 'web,html5, css3, nextjs, nustjs, javascript;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js, uniapp, nodejs',
}


export default function BlogLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
    </>
  );
}