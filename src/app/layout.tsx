import { Metadata } from 'next';
import BasicLayOut from '@/components/BaseLayout';

export const metadata: Metadata = {
  title: '风中追风的博客',
  description: '分享工作中需要的技术和生活记录',
  keywords: 'java;vue;前端;react,javascript;博客;技术分享;生活记录',
}


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BasicLayOut>
          {props.children}
        </BasicLayOut>
      </body>
    </html>
  );
}