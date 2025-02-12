import { Metadata, Viewport } from "next";
import BasicLayOut from "@/components/BaseLayout";
export const metadata: Metadata = {
  title: "风中追风的博客",
  description:
    "一个专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容。作者是一名全栈开发者，擅长React、Node.js、Python、AWS等技术栈，致力于分享实用的编程技巧和行业见解。",
  keywords:
    "前端开发, 后端开发, 全栈开发, React, Node.js, Python, AWS, 云计算, 人工智能, 技术博客, 编程教程, 个人成长",
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
};

export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  width: "device-width",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <BasicLayOut>{props.children}</BasicLayOut>
      </body>
    </html>
  );
}
