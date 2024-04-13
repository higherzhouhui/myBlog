"use client";
import { BlogListInterface } from "@/interface/common";
import { getSkillListReq } from "@/service/skill";
import { Typography, Stack, Box, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SkillDetail(data: { id: string }) {
  const router = useRouter()
  const handleBack = () => {
    router.back()
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
      const res = await getSkillListReq({ id: id ? parseInt(id) : null })
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
      </Box>
    </Stack>
    <Divider sx={{ mt: 4, mb: 4 }} />
    <div dangerouslySetInnerHTML={{ __html: blogInfo.content || '' }}></div>
  </Box>
}