
"use client"
import { getBlogListReq } from "@/service/common";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BlogListInterface } from "@/interface/common";
export default function Detail() {
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
  const id = useSearchParams().get('id')
  const initData = async (id: string | null) => {
    try {
      const res = await getBlogListReq({ id: id ? parseInt(id) : null })
      setBlogInfo(res.data.list)
    } catch {

    }
  }
  useEffect(() => {
    initData(id)
  }, [id])

  return (
    <Box sx={{ background: 'rgba(255,255,255,1)', height: '100%', padding: 2, overflow: 'auto' }}>
      <Typography security='h1' sx={{ fontSize: 24 }}>{blogInfo?.title}</Typography>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography security='h2'>
          {blogInfo?.creator}
          <Typography security='desc'>创建时间：{blogInfo?.time}</Typography>
          <Typography security='desc'>更新更新：{blogInfo?.uptime}</Typography>
        </Typography>
        <Typography security='h2'>
          {blogInfo.lookNum || 0}次浏览
        </Typography>
      </Stack>
      <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
        {
          blogInfo.label.map((clabel, cindex) => {
            return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
          })
        }
      </Typography>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <div dangerouslySetInnerHTML={{ __html: blogInfo.content || '' }} />
    </Box>
  );
}