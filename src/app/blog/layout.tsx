import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '精选好文分享',
  description: '致力于分享互联网技术、人生、生活、推荐以及求职机会',
  keywords: 'web,html, css, nextjs, nustjs, javascript;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js, uniapp, nodejs',
}


export default function BlogLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
    </>
  );
}