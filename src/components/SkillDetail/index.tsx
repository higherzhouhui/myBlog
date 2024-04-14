"use client";
import { BlogListInterface } from "@/interface/common";
import { getSkillListReq } from "@/service/skill";
import { Typography, Stack, Box, Button, Divider, Link, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const StyledMyMenu = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 60,
  background: '#fff',
  padding: '1rem',
  borderRadius: '6px',
  top: 100,
  maxHeight: 'calc(100vh - 200px)',
  boxShadow: '2px 3px 3px #ccc',
  maxWidth: 250,
}));

export function SkillDetail(data: { id: string }) {
  const router = useRouter()
  const path = usePathname()
  const handleBack = () => {
    router.push('/skill')
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

  useEffect(() => {
    console.log(path)
  }, [path])

  return <Box>
    <Typography security='h1' sx={{ fontSize: 24 }}>{blogInfo?.title}</Typography>
    <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography security='h2' component={'div'}>
        <Typography security='h2' gutterBottom component={'div'}>{blogInfo?.subTitle}</Typography>
        <Typography security='h2' gutterBottom component={'div'}>{blogInfo?.abstract}</Typography>
        <Typography security='desc' component={'div'}>创建时间：{blogInfo?.time}</Typography>
        <Typography security='desc' component={'div'}>更新更新：{blogInfo?.uptime}</Typography>
      </Typography>
      <Box>
        <Button variant="outlined" sx={{ mb: 4 }} onClick={() => handleBack()}>返回</Button>
      </Box>
    </Stack>
    <Divider sx={{ mt: 4, mb: 4 }} />
    <StyledMyMenu>
      {
        blogInfo.hrefList?.map((item: any, index: number) => {
          return <Box key={item.title} sx={{ mb: 1 }}><Link href={`#${item.name}`} color={'secondary'}>{index + 1}.{item.title}</Link></Box>
        })
      }
    </StyledMyMenu>
    <div dangerouslySetInnerHTML={{ __html: blogInfo.content || '' }}></div>
  </Box>
}