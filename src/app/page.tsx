'use client';
import React, { useContext, useEffect, useRef } from "react";
import { Alert, Box, Button, ButtonGroup, Divider, Grid, Modal, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MediaQueryContext } from "@/components/BaseLayout";
import { MenuBook, Home as HomeIcon, Menu as MenuIcon, Computer, CameraAlt, Assignment, PermContactCalendar } from "@mui/icons-material";

import 'swiper/css';


let currentPath = '/'

const menuList = [
  { name: '首页', path: '/', icon: <HomeIcon sx={{ color: currentPath == '/' ? 'primary.main' : '' }} /> },
  { name: '文章', path: '/blog', icon: <MenuBook sx={{ color: currentPath == '/blog' ? 'primary.main' : '' }} /> },
  { name: '技能', path: '/skill', icon: <Computer sx={{ color: currentPath == '/skill' ? 'primary.main' : '' }} /> },
  { name: '项目', path: '/work', icon: <Assignment sx={{ color: currentPath == '/work' ? 'primary.main' : '' }} /> },
  { name: '关于', path: '/about', icon: <PermContactCalendar sx={{ color: currentPath == '/about' ? 'primary.main' : '' }} /> },
  { name: '相册', path: '/photo', icon: <CameraAlt sx={{ color: currentPath == '/photo' ? 'primary.main' : '' }} /> },
]


export default function Home() {
  const router = useRouter()
  const text = '欢迎来到风中追风的Blog！'
  const { Sm } = useContext(MediaQueryContext);
  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typewriter text={text} style={{ height: '30px', lineHeight: '30px', margin: '20px 0', fontSize: '22px' }} />
        <img src={'/static/images/task.png'} alt="bg" style={{ width: '350px', objectFit: 'contain' }} />
        <ButtonGroup color="secondary" aria-label="Medium-sized button group" sx={{ mt: 4 }}>
          {
            menuList.map(item => {
              return <Button key={item.name} variant="contained" onClick={() => handleMenuClick(item.path)}>{item.name}</Button>
            })
          }
        </ButtonGroup>
      </Box>
    </Box >
  );
}


const Typewriter = (props: any) => {
  const [typedText, setTypedText] = useState('');
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const delay = 300; // 每个字符之间的延迟时间（毫秒）
    let currentTextIndex = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (currentTextIndex < props.text.length) {
        setTypedText(props.text.substring(0, currentTextIndex + 1));
        currentTextIndex++;
      } else {
        currentTextIndex = 0
        setTypedText('')
      }
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, [props.text]);

  return (
    <Typography color={'primary.dark'} style={{ ...props.style }}>{typedText}</Typography>
  );
};