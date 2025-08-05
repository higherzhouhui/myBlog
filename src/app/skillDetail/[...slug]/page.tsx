
import { SkillDetail } from "@/components/SkillDetail";
import { BlogListInterface } from "@/interface/common";
import { APIURL } from "@/service/config";
import { Box } from "@mui/material";
import { Metadata } from "next";

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

export default function Detail({ params }: { params: { slug: string[] } }) {
  return (
    <Box sx={{ height: '100%', padding: '24px 0', overflow: 'auto' }}>
      <SkillDetail id={params.slug[0]} />
    </Box>
  );
}


export async function generateStaticParams() {
  const response = await fetch(`${APIURL}/skilldata.json`, { cache: 'no-store' })
  const data = await response.json()

  return data.map((item: { id: string, title: string }) => ({
    slug: [String(item.id), item.title]
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const response = await fetch(`${APIURL}/skilldata.json`, { cache: 'no-store' })
  const data = await response.json()
  let metaData: BlogListInterface | any = {}
  data.map((item: any) => {
    if (item.id == (params.slug[0] as any)) {
      metaData = item
    }
  })

  const title = metaData.title || '风中追风的博客'
  const description = metaData.abstract || '技能展示和项目经验分享'
  const url = `${baseUrl}/skillDetail/${params.slug[0]}/${encodeURIComponent(params.slug[1] || '')}`
  const image = metaData.coverImage || '/static/images/skill.png'

  return {
    title,
    description,
    keywords: metaData.subTitle ? metaData.subTitle.split(',') : ['技能展示', '项目经验', '技术能力'],
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
      type: 'profile',
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