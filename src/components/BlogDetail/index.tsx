"use client";
import { BlogListInterface } from "@/interface/common";
import { getBlogListReq } from "@/service/common";
import { Typography, Stack, Box, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BlogDetail(data: { id: string }) {
  const router = useRouter()
  const handleBack = () => {
    router.push('/blog')
  }
  const [blogInfo, setBlogInfo] = useState<BlogListInterface>({
    title: '',
    label: [],
    time: '',
    uptime: '',
    creator: '风中追风',
    type: 'rencetly',
    abstract: '',
    logo: '',
    content: '',
  })
  const initData = async (id: string | null) => {
    try {
      const res = await getBlogListReq({ id: id ? parseInt(id) : null })
      setBlogInfo(res.data.list)
    } catch {

    }
  }
  useEffect(() => {
    initData(data.id)
  }, [data.id])

  return <Box>
    <Typography security='h1' sx={{ fontSize: 24 }}>{blogInfo?.title}</Typography>
    <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography security='h2' component={'div'}>
        {blogInfo?.creator}
        <Typography security='desc' component={'div'}>创建时间：{blogInfo?.time}</Typography>
        <Typography security='desc' component={'div'}>更新更新：{blogInfo?.uptime}</Typography>
      </Typography>
      <Box>
        <Button variant="outlined" sx={{ mb: 4 }} onClick={() => handleBack()}>返回</Button>
        <Typography security='h2'>
          {blogInfo.lookNum || 0}次浏览
        </Typography>
      </Box>
    </Stack>
    <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
      {
        blogInfo.label.map((clabel, cindex) => {
          return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
        })
      }
    </Typography>
    <Divider sx={{ mt: 4, mb: 4 }} />
    <div dangerouslySetInnerHTML={{ __html: blogInfo.content || '' }}></div>
  </Box>
}