
import { BlogDetail } from "@/components/BlogDetail";
import { BlogListInterface } from "@/interface/common";
import { Box } from "@mui/material";

export default function Detail({ params }: { params: { slug: string[] } }) {
  return (
    <Box sx={{ background: 'rgba(255,255,255,1)', height: '100%', padding: 2, overflow: 'auto' }}>
      <BlogDetail id={params.slug[0]} />
    </Box>
  );
}

export async function generateStaticParams() {
  // const response = await fetch('http://localhost:3356/mydata.json')
  // const data = await response.json()
  const staticList = [
    {
      id: '95379130157204',
      title: '2024年令人眼前一亮的Web框架'
    },
    {
      id: '7830128514090',
      title: '2024 Vue 生态工具推荐'
    },
    {
      id: '31229246375886',
      title: '🔥 2024 推荐一款 Vue3 移动端模板 （⚠十个理由）'
    },
    {
      id: '83644761055536',
      title: '一个 url 就把人家网站克隆了？'
    },
    {
      id: '7281921563597',
      title: '也谈一下 30+ 程序员的出路'
    },
    {
      id: '60101455073577',
      title: '转岗，转什么？副业，红利期早已过去'
    },
  ]
  return staticList.map((item: { id: string, title: string }) => ({
    slug: [String(item.id), item.title]
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const response = await fetch('http://localhost:3356/mydata.json')
  const data = await response.json()
  let metaData: BlogListInterface | any = {}
  data.map((item: BlogListInterface) => {
    if (item.id == (params.slug[0] as any)) {
      metaData = item
    }
  })
  return {
    title: metaData.title,
    description: metaData.abstract,
  }
}