import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '前端工具箱',
  description: '分享前端常用工具',
  keywords: '链游,html5, 简历在线生成, 上海博达数据通信有限公司, 上海红星美凯龙设计云信息科技有限公司, 动态壁纸官网;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js, uniapp, nodejs',
}


export default function BlogLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
    </>
  );
}