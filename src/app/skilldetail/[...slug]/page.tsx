
import { SkillDetail } from "@/components/SkillDetail";
import { BlogListInterface } from "@/interface/common";
import { apiUrl } from "@/service/config";
import { Box } from "@mui/material";

export default function Detail({ params }: { params: { slug: string[] } }) {
  return (
    <Box sx={{ background: 'rgba(255,255,255,1)', height: '100%', padding: 2, overflow: 'auto' }}>
      <SkillDetail id={params.slug[0]} />
    </Box>
  );
}

export async function generateStaticParams() {
  const response = await fetch(`${apiUrl}/skilldata.json`)
  const data = await response.json()

  return data.map((item: { id: string, title: string }) => ({
    slug: [String(item.id), item.title]
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const response = await fetch(`${apiUrl}/skilldata.json`)
  const data = await response.json()
  let metaData: BlogListInterface | any = {}
  data.map((item: any) => {
    if (item.id == (params.slug[0] as any)) {
      metaData = item
    }
  })
  return {
    title: metaData.title,
    description: metaData.abstract,
  }
}