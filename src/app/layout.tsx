import { Metadata, Viewport } from 'next';
import BasicLayOut from '@/components/BaseLayout';
export const metadata: Metadata = {
  title: '风中追风的博客',
  description: '分享工作中需要的技术和生活记录/博客/好文',
  keywords: 'java;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js',
  openGraph: {
    title: "ChatGPT Next Web",
    images: "/nextChat/favicon.ico",
    description: "Your personal ChatGPT Chat Bot.",
  },
  twitter: {
    title: "ChatGPT Next Web",
    images: "/nextChat/favicon.ico",
    description: "Your personal ChatGPT Chat Bot.",
  },
  appleWebApp: {
    title: "ChatGPT Next Web",
    statusBarStyle: "default",
  },
}

export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  width: 'device-width',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <BasicLayOut>
          {props.children}
        </BasicLayOut>
      </body>
    </html>
  );
}