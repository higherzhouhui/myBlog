
import { SkillDetail } from "@/components/SkillDetail";
import { BlogListInterface } from "@/interface/common";
import { APIURL } from "@/service/config";
import { Box } from "@mui/material";
import { Viewport } from "next";

export default function Detail({ params }: { params: { slug: string[] } }) {
  return (
    <Box sx={{ height: '100%', padding: '24px 0', overflow: 'auto' }}>
      <SkillDetail id={params.slug[0]} />
    </Box>
  );
}

export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  width: 'device-width'
}

export async function generateStaticParams() {
  const response = await fetch(`${APIURL}/skilldata.json`, { cache: 'no-store' })
  const data = await response.json()

  return data.map((item: { id: string, title: string }) => ({
    slug: [String(item.id), item.title]
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const response = await fetch(`${APIURL}/skilldata.json`, { cache: 'no-store' })
  const data = await response.json()
  let metaData: BlogListInterface | any = {}
  data.map((item: any) => {
    if (item.id == (params.slug[0] as any)) {
      metaData = item
    }
  })
  return {
    title: metaData.title || '风中追风的博客',
    description: metaData.abstract,
    keywords: metaData.subTitle,
  }
}