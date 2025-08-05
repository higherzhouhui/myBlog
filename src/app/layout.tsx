import { Metadata, Viewport } from "next";
import BasicLayOut from "@/components/BaseLayout";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "风中追风的博客 - 技术分享与个人成长",
    template: "%s | 风中追风的博客",
  },
  description:
    "一个专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容。作者是一名全栈开发者，擅长React、Node.js、Python、AWS等技术栈，致力于分享实用的编程技巧和行业见解。",
  keywords: [
    "前端开发", "后端开发", "全栈开发", "React", "Node.js", "Python", 
    "AWS", "云计算", "人工智能", "技术博客", "编程教程", "个人成长",
    "JavaScript", "TypeScript", "Next.js", "Vue.js", "Web开发"
  ],
  authors: [{ name: "风中追风", url: baseUrl }],
  creator: "风中追风",
  publisher: "风中追风的博客",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseUrl,
    title: "风中追风的博客 - 技术分享与个人成长",
    description:
      "专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容。作者是一名全栈开发者，擅长React、Node.js、Python、AWS等技术栈，致力于分享实用的编程技巧和行业见解。",
    images: [
      {
        url: '/static/images/avatar.png',
        width: 1200,
        height: 630,
        alt: '风中追风的博客',
      },
    ],
    siteName: "风中追风的博客",
  },
  twitter: {
    card: 'summary_large_image',
    title: "风中追风的博客 - 技术分享与个人成长",
    description:
      "专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容。作者是一名全栈开发者，擅长React、Node.js、Python、AWS等技术栈，致力于分享实用的编程技巧和行业见解。",
    images: ['/static/images/avatar.png'],
    creator: '@higherzhouhui', // 请替换为您的实际Twitter用户名
  },
  appleWebApp: {
    title: "风中追风的博客",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: 'your-google-verification-code', // 请替换为您的Google验证码
    yandex: 'your-yandex-verification-code', // 请替换为您的Yandex验证码
    yahoo: 'your-yahoo-verification-code', // 请替换为您的Yahoo验证码
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Suspense fallback={<Loading />}>
          <BasicLayOut>{props.children}</BasicLayOut>
        </Suspense>
      </body>
    </html>
  );
}
