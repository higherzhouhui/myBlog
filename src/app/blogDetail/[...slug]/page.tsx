
import { BlogDetail } from "@/components/BlogDetail";
import { BlogListInterface } from "@/interface/common";
import { APIURL } from "@/service/config";
import { Box } from "@mui/material";
import { Metadata } from "next";

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

export default function Detail({ params }: { params: { slug: string[] } }) {
  return (
    <Box sx={{ height: '100%', padding: '24px 0' }}>
      <BlogDetail id={params.slug[0]} />
    </Box>
  );
}

export async function generateStaticParams() {
  const response = await fetch(`${APIURL}/mydata.json`, { cache: 'no-store' })
  const data = await response.json()

  return data.map((item: { id: string, title: string }) => ({
    slug: [String(item.id), item.title]
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const response = await fetch(`${APIURL}/mydata.json`, { cache: 'no-store' })
  const data = await response.json()
  let metaData: BlogListInterface | any = {}
  data.map((item: any) => {
    if (item.id == (params.slug[0] as any)) {
      metaData = item
    }
  })

  const title = metaData.title || '风中追风的博客'
  const description = metaData.abstract || '精彩的技术文章分享'
  const url = `${baseUrl}/blogDetail/${params.slug[0]}/${encodeURIComponent(params.slug[1] || '')}`
  const image = metaData.coverImage || '/static/images/avatar.png'

  return {
    title,
    description,
    keywords: metaData.tags || ['技术博客', '前端开发', '编程'],
    authors: [{ name: "风中追风", url: baseUrl }],
    creator: "风中追风",
    publisher: "风中追风的博客",
    alternates: {
      canonical: url,
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
      type: 'article',
      locale: 'zh_CN',
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "风中追风的博客",
      publishedTime: metaData.createdAt,
      modifiedTime: metaData.updatedAt,
      authors: ["风中追风"],
      section: metaData.category || '技术分享',
      tags: metaData.tags || ['技术博客'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@higherzhouhui', // 请替换为您的实际Twitter用户名
    },
    category: 'technology',
  }
}