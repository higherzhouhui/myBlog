'use client';
import React, { useEffect } from "react";
import { Box, Button, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, Switch, styled } from "@mui/material";
import { FC, memo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { clearTimeout } from "timers";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Link from "next/link";
import Image from "next/image"
import { switchBgStyle, switchTheme } from "@/utils/event";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



export const Header: FC = memo(() => {
  const [currentPath, setCurrentPath] = useState('/')
  const [scrollDis, setScrollTop] = useState(0)
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [theme, setTheme] = useState(true)
  const [type, setType] = useState('Colors')

  const typeList = [
    { label: '五彩线条', value: 'Colors' },
    { label: '永恒流星', value: 'AmongUs' },
    { label: '碰撞气泡', value: 'Confetti' },
    { label: '聚焦折线', value: 'Explosions' },
    { label: '缤纷水果', value: 'FireWorks' },
  ]

  const menuList = [
    { name: '首页', path: '/' },
    { name: '文章', path: '/blog' },
    { name: '技能', path: '/skill' },
    { name: '作品', path: '/work' },
    { name: '相册', path: '/photo' },
  ]
  const router = useRouter()
  const path = usePathname()
  const handleMenuClick = (path: string) => {
    router.push(path)
  }
  const StyledBoxBase = styled(Box)(({ theme }) => ({
    height: '80px',
    zIndex: 10,
    position: 'fixed',
    top: 0,
    width: '100%',
    overflow: 'hidden',
  }));

  const handleChange = (e: any) => {
    const value = e.target.value
    setType(value)
    localStorage.setItem('storageType', value)
    switchBgStyle({ type: value })
  }
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

  const handleSwitchTheme = (e: any) => {
    const value = e.target.checked
    const themeData = {
      theme: value ? 'dark' : 'light'
    }
    localStorage.setItem('themeMode', value ? 'dark' : 'light')
    switchTheme(themeData)
  }



  useEffect(() => {
    const storageTheme = localStorage.getItem('themeMode') || 'dark'
    const storageType = localStorage.getItem('storageType') || 'Colors'
    setType(storageType)
    switchBgStyle({ type: storageType })
    if (storageTheme == 'dark') {
      switchTheme({ theme: 'dark' })
      setTheme(true)
    } else {
      switchTheme({ theme: 'light' })
      setTheme(false)
    }
    window.addEventListener('scroll', onScroll)
  }, [])


  return (
    <StyledBoxBase sx={{ bgcolor: !scrollDis ? 'rgba(0,0,0,0.2)' : '#0b1120', boxShadow: !scrollDis ? 'none' : '0.5px 0.5px 0.5px #333', height: isShowHeader ? '80px' : '0', transition: 'all 0.5s' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Box sx={{ display: 'flex' }}>
          <Link href='/'><Image src={'/static/images/logo.png'} objectFit="contain" alt="logo" width={100} height={40} /></Link>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 8 }}>
            {
              menuList.map((item, index) => {
                // eslint-disable-next-line @next/next/no-img-element
                return <StyledButtonBase variant={currentPath == item.path ? 'contained' : 'text'} key={index} onClick={() => handleMenuClick(item.path)}>
                  {item.name}
                </StyledButtonBase>
              })
            }
          </Box>
        </Box>
        <Box sx={{ marginRight: '-1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FormControl sx={{ width: '130px', color: '#fff' }} size="small">
            <InputLabel id="demo-simple-select-label">BgStyle</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              sx={{ color: '#eee' }}
              onChange={handleChange}
              value={type}
            >
              {
                typeList.map((item) => {
                  return <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>
                })
              }
            </Select>
          </FormControl>
          <FormControlLabel
            onChange={(e) => handleSwitchTheme(e)}
            control={<MaterialUISwitch defaultChecked={theme} />}
            label=""
          />
        </Box>
      </Box>

      <Box sx={{ position: 'fixed', right: 100, bottom: 20, display: scrollDis > 200 ? 'block' : 'none' }} onClick={() => scrollTop()}>
        <IconButton aria-label="Example">
          <ArrowCircleUpIcon sx={{ width: 50, height: 50, color: 'primary.light' }} />
        </IconButton>
      </Box>
    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;