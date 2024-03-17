'use client';
import React from "react";
import { BlogListInterface, TeamComplete, UserOrganization } from "@/interface/organization";
import { Avatar, Box, Button, CardActions, IconButton, Pagination, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { stringAvatar } from "@/utils/common";
import FullFeaturedCrudGrid from "@/components/Table";
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextPage } from "next";
import { useRouter } from 'next/navigation';
import BasicTable from "@/components/Table";
import { dataList } from '@/data/mydata';
import 'swiper/css';

const Home: NextPage = () => {
  const [tabValue, setTabValue] = useState('all');
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter()
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const [tabList, setTabList] = useState([
    {
      name: '全部', code: 'all',
    },
    {
      name: '最新', code: 'recently',
    },
    {
      name: '推荐', code: 'recomend',
    },
    {
      name: '最受欢迎', code: 'most',
    }
  ])
  const [blogList, setblogList] = useState<BlogListInterface[]>(dataList)
  const handleToTeam = (id: number | string) => {
    router.push(`/detail?id=${id}`)
  }
  const MyCard = styled('div')(({ theme }) =>
    theme.unstable_sx({
      padding: 2,
      pt: 1,
      borderRadius: 1,
      bgcolor: '#fff',
      boxShadow: 1,
      '&:hover': {
        boxShadow: 2,
      }
    }),
  );
  const MyGrid = styled('div')(({ theme }) =>
    theme.unstable_sx({
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: 2,
      rowGap: 2,
      boxShadow: 1,
      '&:hover': {
        boxShadow: 2,
      }
    }),
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography security='h1' color='#fff'>
        风中追风的博客
      </Typography>
      <Typography component="div" sx={{ color: '#fff', fontSize: 14, mt: 2, fontWeight: 'bold' }}>
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
          {blogList.map((item, index: number) => (
            <SwiperSlide key={index} style={{ width: '320px' }}>
              <MyCard>
                <Stack direction={'row'}>
                  <Box>
                    <Typography component="div" sx={{ color: '#2E2C34', fontWeight: 'bold', fontSize: 22, }}>
                      {item.title}
                    </Typography>
                    <Typography security='h2'>{item.abstract}</Typography>
                    <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
                      {
                        item.label.map((clabel, cindex) => {
                          return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
                        })
                      }
                    </Typography>
                  </Box>
                </Stack>
                <Box sx={{ color: '#666', fontSize: '15px', mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography component="div" security="h2" sx={{ color: '#84818A', fontSize: 14, pr: 1 }}>
                    作者：{item.creator}
                    <Typography security='desc'>{item.time}</Typography>
                  </Typography>
                  <Stack direction="row" key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginLeft: '6px' }}>
                      <Typography security='desc'>{item.lookNum}{' '}次浏览</Typography>
                    </Typography>
                  </Stack>
                </Box>
                <Button size="small" variant="outlined" onClick={() => { handleToTeam(item.id) }}>查看详情</Button>
              </MyCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{ borderBottom: '1px solid #EBEAED', marginBottom: '20px' }}>
        {
          tabList.map((item, index) => {
            return <Tab label={item.name} key={index} value={item.code} sx={{ fontSize: '14px', color: '#2E2C34', textTransform: 'none' }} />
          })
        }
      </Tabs>
      <Box sx={{ mt: 2, width: '100%' }}>
        <MyGrid>
          {blogList.map((item, index: number) => (
            <MyCard key={index}>
              <Stack direction={'row'}>
                <img src={item.logo} style={{ width: '150px', objectFit: 'contain', minWidth: '150px' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography component="div" sx={{ color: '#2E2C34', fontWeight: 'bold', fontSize: 22, }}>
                    {item.title}
                  </Typography>
                  <Typography security='h2'>{item.abstract}</Typography>

                  <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
                    {
                      item.label.map((clabel, cindex) => {
                        return <Button variant="outlined" key={cindex} size="small" sx={{ marginRight: 1, mt: 1 }}>{clabel}</Button>
                      })
                    }
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ color: '#666', fontSize: '15px', mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography component="div" security="h2" sx={{ color: '#84818A', fontSize: 14, pr: 1 }}>
                  作者：{item.creator}
                  <Typography security='desc'>{item.time}</Typography>
                </Typography>
                <Stack direction="row" key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginLeft: '6px' }}>
                    <Typography security='desc'>{item.lookNum}{' '}次浏览</Typography>
                  </Typography>
                </Stack>
              </Box>
              <Button size="small" variant="outlined" onClick={() => { handleToTeam(item.id) }}>查看详情</Button>
            </MyCard>
          ))}
        </MyGrid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination count={10} color="primary" page={pageNum} onChange={(_, cpage) => setPageNum(cpage)} />
        </Box>
      </Box>
    </Box>
  );
}

Home.displayName = 'Home'

export default Home
