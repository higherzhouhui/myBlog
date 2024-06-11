'use client';
import React, { useEffect, useContext } from "react";
import { BlogListInterface } from "@/interface/common";
import { Box, Button, Skeleton, Stack, Tab, Tabs, Typography, styled, Pagination, Grid } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { getBlogListReq } from "@/service/common";
import 'swiper/css';
import { MediaQueryContext } from "@/components/BaseLayout";

export default function Home() {
  const [tabValue, setTabValue] = useState('all');
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter()
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const { Sm } = useContext(MediaQueryContext);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
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
  const [blogList, setBlogList] = useState<BlogListInterface[]>([])
  const [recommendList, setRecommendList] = useState<BlogListInterface[]>([])
  const [changeList, setChangeList] = useState<BlogListInterface[]>([])
  const handleToTeam = (item: BlogListInterface) => {
    router.push(`/detail/${item.id}/${item.title}`)
  }
  const MyCard = styled(Box)(({ theme }) =>
    theme.unstable_sx({
      padding: 2,
      pt: 1,
      borderRadius: 1,
      backgroundColor: theme.palette.mode == 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
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
      rowGap: 2,
    }),
  );
  const handleChangePage = (e: any) => {
    setPageNum(e)
  }
  const initData = async () => {
    setLoading(true)
    try {
      const res = await getBlogListReq({ id: null })
      let list = res.data.list
      list.sort((a: any, b: any) => {
        return new Date(b.uptime).getTime() - new Date(a.uptime).getTime()
      })
      setLoading(false)
      setBlogList(list)
      const nList = list.filter((item: BlogListInterface) => {
        return item.type == 'recommend'
      })
      setRecommendList(nList)
    } catch {

    }
  }

  const updateBlogList = () => {
    if (!blogList.length) {
      return
    }
    let nList: any[] = []
    if (tabValue == 'tech') {
      nList = blogList.filter(item => {
        return item.type == 'tech'
      })
    }
    if (tabValue == 'life') {
      nList = blogList.filter(item => {
        return item.type == 'life'
      })
    }
    if (tabValue == 'recommend') {
      nList = blogList.filter(item => {
        return item.type == 'recommend'
      })
    }
    if (tabValue == 'all') {
      nList = blogList
    }
    setTotal(Math.ceil(nList.length / 10))
    const _list = nList.slice(10 * (pageNum - 1), pageNum * 10)
    setChangeList(_list)
  }

  useEffect(() => {
    initData()
  }, [])

  useEffect(() => {
    updateBlogList()
  }, [pageNum, tabValue, blogList])

  return (
    <Box sx={{ padding: Sm ? '0 12px' : '12px 0' }}>
      <Typography security='h1' sx={{ color: 'secondary.light' }}>
        Welcome
      </Typography>
      <Typography component="div" sx={{ fontSize: 14, mt: 2, fontWeight: 'bold' }} color='primary'>
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
          {recommendList.map((item, index: number) => (
            <SwiperSlide key={index} style={{ width: Sm ? '100%' : '320px' }} onClick={() => { handleToTeam(item) }}>
              <MyCard>
                <Stack direction={'row'}>
                  <Box>
                    <Typography component="div" sx={{ color: 'primary.light', overflow: 'hidden', fontWeight: 'bold', fontSize: 22, whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '288px' }}>
                      {item.title}
                    </Typography>
                    <Typography component="div" security='h2' color={'primary'} sx={{ height: 80, mt: 1, overflow: 'hidden', textOverflow: 'ellipsis', width: '288px' }}>{item.abstract}</Typography>
                    <Typography component="div" sx={{ fontSize: 14, marginTop: '8px', overflow: 'hidden', width: '288px', height: '40px' }}>
                      {
                        item.label.map((cLabel, cIndex) => {
                          return <Button variant="outlined" key={cIndex} size="small" sx={{ marginRight: 1, mt: 1 }}>{cLabel}</Button>
                        })
                      }
                    </Typography>
                  </Box>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: 'space-between', mt: 5 }}>
                  <Typography component="div" security="h2" sx={{ color: 'secondary.dark', fontSize: 14, pr: 1 }}>
                    作者：{item.creator}
                    <Typography security='desc'>{item.time}</Typography>
                  </Typography>
                  <Button variant="contained" onClick={() => { handleToTeam(item) }}>查看详情</Button>
                </Box>
                <Typography color={'GrayText'} security='desc'>{item.lookNum}{' '}次浏览</Typography>
              </MyCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {
        loading ? <Grid container spacing={2}>
          {
            [...Array(Sm ? 1 : 4)].map((item, index: number) => {
              return <Grid item xs={Sm ? 12 : 3} key={index}><Skeleton sx={{ bgcolor: 'primary.light' }} variant="rectangular" height={300} key={index} /></Grid>
            })
          }
        </Grid> : null
      }
      <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: '20px' }}>
        {
          tabList.map((item, index) => {
            return <Tab label={item.name} key={index} value={item.code} sx={{ fontSize: '14px', textTransform: 'none', color: 'primary.light' }} />
          })
        }
      </Tabs>
      <Box sx={{ mt: 2, width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'right', mb: 2 }}><Pagination onChange={(e, page) => handleChangePage(page)} count={total} color="primary" page={pageNum} /></Box>
        <MyGrid>
          {changeList.map((item, index: number) => (
            <MyCard key={index} sx={{ p: 2 }} onClick={() => handleToTeam(item)}>
              <Stack direction={'row'}>
                <Box>
                  <img src={item.logo} style={{ width: '80px', objectFit: 'contain', minWidth: '80px', borderRadius: '10px', overflow: 'hidden' }} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography component="div" sx={{ color: 'primary.light', fontWeight: 'bold', fontSize: 22, }}>
                    {item.title}
                  </Typography>
                  <Typography component="div" security='h2' color={'primary'} sx={{ maxHeight: 80, mt: 2, overflow: 'hidden', wordBreak: 'break-all' }}>{item.abstract}</Typography>
                </Box>
              </Stack>
            </MyCard>
          ))}
          {
            loading ? [...Array(6)].map((item, index: number) => {
              return <Box key={index} style={{ width: '100%' }}>
                <Skeleton sx={{ bgcolor: 'primary.light' }} variant="rectangular" width={'100%'} height={120} />
              </Box>
            }) : null
          }
        </MyGrid>
      </Box>
    </Box>
  );
}
