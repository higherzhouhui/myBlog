'use client';
import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { FC, memo, useState } from "react";
import { styled } from '@mui/material/styles';
import { useRouter, usePathname } from "next/navigation";
import { clearTimeout } from "timers";

export const Header: FC = memo(() => {
  const [currentPath, setCurrentPath] = useState('/')
  const [isScrollTop, setScrollTop] = useState(true)
  const menuList = [
    { name: '文章', path: '/blog' },
    { name: '作品', path: '/work' },
    { name: 'divider', path: '/' },
    { name: '分享', path: '/skill' },
    { name: '生活', path: '/profile' },
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
    background: 'rgba(255,255,255,0.1)',
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
        const isTop = window.scrollY ? false : true
        setScrollTop(isTop)
      }, 500);
    } catch (error: any) {
      console.log(error)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])


  return (
    <StyledBoxBase sx={{ bgcolor: isScrollTop ? 'rgba(0,0,0,0.1)' : 'secondary.dark', boxShadow: isScrollTop ? 'none' : '0.5px 0.5px 0.5px #ccc' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '500px', justifyContent: 'space-around' }}>
        {
          menuList.map((item, index) => {
            // eslint-disable-next-line @next/next/no-img-element
            return item.name == 'divider' ? <div onClick={() => handleMenuClick(item.path)} key={index}><img style={{ width: '50px', objectFit: 'contain', borderRadius: '50%', border: path == item.path ? '2px solid #06f' : '2px solid transparent', cursor: 'pointer' }} src="/static/images/logo.jpg" alt="logo" /></div> :
              <StyledButtonBase variant={currentPath == item.path ? 'contained' : 'text'} key={index} onClick={() => handleMenuClick(item.path)}>
                {item.name}
              </StyledButtonBase>
          })
        }
      </Box>
    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;