'use client';
import React, { useEffect } from "react";
import { BlogListInterface } from "@/interface/common";
import { Box, Icon, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import FaceIcon from '@mui/icons-material/Face';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import { useRouter } from 'next/navigation';
import { getBlogListReq } from "@/service/common";
import 'swiper/css';
import { GitHub } from "@mui/icons-material";

export default function Home() {

  const [tabList, setTabList] = useState([
    {
      icon: <GitHub />, link: 'https://github.com/higherzhouhui',
    },
    {
      icon: <BusinessIcon />, link: 'https://www.jizaoji.top',
    },
  ])


  return (
    <Box sx={{ padding: 3, display: 'flex', gap: 2 }}>
      <Box sx={{ width: 300, height: 500, bgcolor: 'primary.light', borderRadius: 2, p: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <FaceIcon sx={{ width: 50, height: 50 }} />
          <Typography>风中追风</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><SchoolIcon />毕业院校(2013-2017)：</Box>
          <Typography sx={{ fontSize: 14 }}>陕西科技大学——计算机系——物联网工程</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><LaptopWindowsIcon />标签：</Box>
          <Typography sx={{ fontSize: 14 }}>陕西科技大学——计算机系——物联网工程</Typography>
        </Box>
        <Stack direction={'row'} sx={{ gap: 2, justifyContent: 'center' }}>
          {
            tabList.map(item => {
              return <a href={item.link} key={item.link}>{item.icon}</a>
            })
          }
        </Stack>
      </Box>
      <Box sx={{ flex: 1, bgcolor: 'primary.light', borderRadius: 2 }}></Box>
    </Box >
  );
}
