'use client';
import React, { useEffect } from "react";
import { BlogListInterface } from "@/interface/common";
import { Avatar, Box, Button, Skeleton, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import { getBlogListReq } from "@/service/common";
export default function Home() {

  const [tabValue, setTabValue] = useState('all');
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter()
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    if (newValue == 'tech') {
      const nlist = blogList.filter(item => {
        return item.type == 'tech'
      })
      setchangeList(nlist)
    }
    if (newValue == 'life') {
      const nlist = blogList.filter(item => {
        return item.type == 'life'
      })
      setchangeList(nlist)
    }
    if (newValue == 'recommend') {
      const nlist = blogList.filter(item => {
        return item.type == 'recommend'
      })
      setchangeList(nlist)
    }
    if (newValue == 'all') {
      setchangeList(blogList)
    }
  };
  const [tabList, setTabList] = useState([
    {
      name: '全部', code: 'all',
    },
    {
      name: '技术', code: 'tech',
    },
    {
      name: '生活', code: 'life',
    },
    {
      name: '推荐', code: 'recommend',
    }
  ])
  const [blogList, setblogList] = useState<BlogListInterface[]>([])
  const [recommentList, setrecommentList] = useState<BlogListInterface[]>([])
  const [changeList, setchangeList] = useState<BlogListInterface[]>([])
  const handleToTeam = (id: number | undefined) => {
    router.push(`/detail?id=${id}`)
  }
  const MyCard = styled('div')(({ theme }) =>
    theme.unstable_sx({
      padding: 2,
      pt: 1,
      borderRadius: 1,
      bgcolor: '#fff',
      boxShadow: 2,
      '&:hover': {
        boxShadow: 4,
      }
    }),
  );
  const MyGrid = styled('div')(({ theme }) =>
    theme.unstable_sx({
      display: 'grid',
      columnGap: 2,
      rowGap: 4,
    }),
  );
  const initData = async () => {
    setLoading(true)
    try {
      const res = await getBlogListReq({})
      setLoading(false)
      setblogList(res.data.list)
      setchangeList(res.data.list)
      const nlist = res.data.list.filter((item: BlogListInterface) => {
        return item.type == 'recommend'
      })
      setrecommentList(nlist)
    } catch {

    }
  }
  useEffect(() => {
    initData()
  }, [])
  return (
    <Box sx={{ padding: 3 }}>
      <Typography security='h1'>
        风中追风的博客
      </Typography>
      <Typography component="div" sx={{ fontSize: 14, mt: 2, fontWeight: 'bold' }}>
        博主力推
      </Typography>
      <Box sx={{ margin: '12px 0' }}>
        <Swiper
          loop={false}
          slidesPerView={'auto'}
          spaceBetween={18}
          onSlideChange={() => { }}
          onSwiper={setSwiper}
          style={{ padding: '12px 0' }}
        >
          {recommentList.map((item, index: number) => (
            <SwiperSlide key={index} style={{ width: '320px' }}>
              <MyCard>
                <Stack direction={'row'}>
                  <Box>
                    <Typography component="div" sx={{ color: '#2E2C34', overflow: 'hidden', fontWeight: 'bold', fontSize: 22, whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '288px' }}>
                      {item.title}
                    </Typography>
                    <Typography component="div" security='h2' sx={{ height: 80, mt: 1, overflow: 'hidden', textOverflow: 'ellipsis', width: '288px' }}>{item.abstract}</Typography>
                    <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px', overflow: 'hidden', width: '288px', height: '40px' }}>
                      {
                        item.label.map((clabel, cindex) => {
                          return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
                        })
                      }
                    </Typography>
                  </Box>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: 'space-between', mt: 5 }}>
                  <Typography component="div" security="h2" sx={{ color: '#84818A', fontSize: 14, pr: 1 }}>
                    作者：{item.creator}
                    <Typography security='desc'>{item.time}</Typography>
                  </Typography>
                  <Button variant="contained" onClick={() => { handleToTeam(item.id) }}>查看详情</Button>
                </Box>
                <Typography security='desc'>{item.lookNum}{' '}次浏览</Typography>
              </MyCard>
            </SwiperSlide>
          ))}
          {
            loading ? [...Array(4)].map((item, index: number) => {
              return <SwiperSlide key={index} style={{ width: '300px' }}>
                <Skeleton variant="rectangular" width={320} height={300} />
              </SwiperSlide>
            }) : null
          }
        </Swiper>
      </Box>
      <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: '20px' }}>
        {
          tabList.map((item, index) => {
            return <Tab label={item.name} key={index} value={item.code} sx={{ fontSize: '14px', textTransform: 'none' }} />
          })
        }
      </Tabs>
      <Box sx={{ mt: 2, width: '100%' }}>
        <MyGrid>
          {changeList.map((item, index: number) => (
            <MyCard key={index} sx={{ p: 3 }}>
              <Stack direction={'row'}>
                <Box>
                  <img src={item.logo} style={{ width: '200px', objectFit: 'contain', minWidth: '200px', borderRadius: '10px', overflow: 'hidden' }} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography component="div" sx={{ color: '#2E2C34', fontWeight: 'bold', fontSize: 22, }}>
                    {item.title}
                  </Typography>
                  <Typography component="div" security='h2' sx={{ height: 80, mt: 2, mb: 2, overflow: 'hidden', wordBreak: 'break-all' }}>{item.abstract}</Typography>
                </Box>
              </Stack>

              <Box sx={{ flex: 1 }}>

                <div dangerouslySetInnerHTML={{ __html: (item.content || '').replace(/<[^>]*>/g, '') }} style={{ height: '120px', overflow: 'auto', width: '100%', fontSize: '12px', color: '#666', textOverflow: 'ellipsis' }} />
                <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
                  {
                    item.label.map((clabel, cindex) => {
                      return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
                    })
                  }
                </Typography>
              </Box>
              <Box sx={{ color: '#666', fontSize: '15px', mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography component="div" security="h2" sx={{ color: '#84818A', fontSize: 14, pr: 1 }}>
                  作者：{item.creator}
                  <Typography security='desc'>{item.time}</Typography>
                  <Typography security='h2'>{item.lookNum}{' '}次浏览</Typography>
                </Typography>
                <Stack direction="row" key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginLeft: '6px' }}>
                    <Button size="large" variant="contained" onClick={() => { handleToTeam(item.id) }}>查看详情</Button>
                  </Typography>
                </Stack>
              </Box>

            </MyCard>
          ))}
          {
            loading ? [...Array(6)].map((item, index: number) => {
              return <Box key={index} style={{ width: '100%' }}>
                <Skeleton variant="rectangular" width={1200} height={300} />
              </Box>
            }) : null
          }
        </MyGrid>
      </Box>
    </Box>
  );
}
