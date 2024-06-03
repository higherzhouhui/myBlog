"use client";
import { BlogListInterface } from "@/interface/common";
import { getSkillListReq } from "@/service/skill";
import { Typography, Stack, Box, Button, Divider, Link, styled, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MediaQueryContext } from "../BaseLayout";


export function SkillDetail(data: { id: string }) {
  const { Sm, Middle } = useContext(MediaQueryContext);
  const router = useRouter()
  const handleBack = () => {
    router.push('/skill')
  }
  const StyledMyMenu = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '1px 2px 2px #ccc',
    position: 'fixed',
    top: 160,
    right: Middle ? 60 : 100,
    width: Middle ? 250 : 300,
  }));
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

  return <Box sx={{ background: 'rgba(255,255,255,0.9)', padding: 2, borderRadius: 2 }}>
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
    <Grid container sx={{ position: 'relative', overflow: 'auto' }}>
      <Grid item xs={Sm ? 12 : 9.5}>
        <div dangerouslySetInnerHTML={{ __html: blogInfo.content || '' }}></div>
      </Grid>
    </Grid>
    {
      Sm ? null : <StyledMyMenu>
        <Box sx={{ textAlign: 'center', mb: 1 }}><Button onClick={() => handleBack()} variant="contained">返回</Button></Box>
        {
          blogInfo.hrefList?.map((item: any, index: number) => {
            return <Box key={item.title} sx={{ mb: 1 }}><Link href={`#${item.name}`} color={'primary'}>{index + 1}.{item.title}</Link></Box>
          })
        }
      </StyledMyMenu>
    }
  </Box>
}