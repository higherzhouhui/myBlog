'use client';
import React, { useEffect } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { FC, memo, useState } from "react";
import { styled } from '@mui/material/styles';
import { useRouter, usePathname } from "next/navigation";
import { clearTimeout } from "timers";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import HomeIcon from '@mui/icons-material/Home';

export const Header: FC = memo(() => {
  const [currentPath, setCurrentPath] = useState('/')
  const [scrollDis, setScrollTop] = useState(0)
  const [isShowHeader, setIsShowHeader] = useState(true)
  const menuList = [
    { name: '文章', path: '/blog' },
    { name: '作品', path: '/work' },
    { name: 'divider', path: '/' },
    { name: '技巧', path: '/skill' },
    { name: '相册', path: '/photo' },
  ]
  const router = useRouter()
  const path = usePathname()
  const handleMenuClick = (path: string) => {
    router.push(path)
  }
  const StyledBoxBase = styled(Box)(({ theme }) => ({
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 12px',
    zIndex: 10,
    position: 'fixed',
    top: 0,
    width: '100%',
    overflow: 'hidden',
  }));
  const StyledButtonBase = styled(Button)(({ theme }) => ({
    fontSize: 16,
  }));

  useEffect(() => {
    setCurrentPath(path)
  }, [path])

  const onScroll = () => {
    let timer: any = ''
    try {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setScrollTop(window.scrollY)
        if (window.scrollY > 500) {
          let flag = menuList.some(item => {
            return item.path == path
          })
          setIsShowHeader(flag)
        } else {
          setIsShowHeader(true)
        }
      }, 500);
    } catch (error: any) {
      console.log(error)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])


  return (
    <StyledBoxBase sx={{ bgcolor: !scrollDis ? 'rgba(0,0,0,0.1)' : '#0b1120', boxShadow: !scrollDis ? 'none' : '0.5px 0.5px 0.5px #ccc', height: isShowHeader ? '80px' : '0', transition: 'all 0.5s' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '500px', justifyContent: 'space-around' }}>
        {
          menuList.map((item, index) => {
            // eslint-disable-next-line @next/next/no-img-element
            return item.name == 'divider' ? <Box sx={{ color: '#fff', cursor: 'pointer' }} onClick={() => handleMenuClick(item.path)} key={index}><HomeIcon color={currentPath == item.path ? 'inherit' : 'primary'} sx={{ width: 40, height: 40 }} /></Box> :
              <StyledButtonBase variant={currentPath == item.path ? 'contained' : 'text'} key={index} onClick={() => handleMenuClick(item.path)}>
                {item.name}
              </StyledButtonBase>
          })
        }
      </Box>
      <Box sx={{ position: 'fixed', right: 100, bottom: 20, display: scrollDis > 200 ? 'block' : 'none' }} onClick={() => scrollTop()}>
        <IconButton aria-label="Example">
          <ArrowCircleUpIcon color='primary' sx={{ width: 50, height: 50 }} />
        </IconButton>
      </Box>
    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;