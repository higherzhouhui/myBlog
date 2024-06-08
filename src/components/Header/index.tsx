'use client';
import React, { useContext, useEffect } from "react";
import { Box, Button, Divider, Drawer, FormControl, FormControlLabel, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Select, Switch, styled } from "@mui/material";
import { memo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { clearTimeout } from "timers";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Link from "next/link";
import Image from "next/image"
import { switchBgStyle } from "@/utils/event";
import { MediaQueryContext } from "@/components/BaseLayout";
import { MenuBook, Home, Menu as MenuIcon, Computer, CameraAlt, Assignment, PermContactCalendar } from "@mui/icons-material";


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
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#fff',
    borderRadius: 20 / 2,
  },
}));



export const Header = memo(({ theme, handleSwitchTheme }: { theme: string, handleSwitchTheme: (e: any) => void }) => {
  const [currentPath, setCurrentPath] = useState('/')
  const [scrollDis, setScrollTop] = useState(0)
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [type, setType] = useState('Colors')
  const { Sm, Middle, Big } = useContext(MediaQueryContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const typeList = [
    { label: '五彩线条', value: 'Colors' },
    { label: '永恒流星', value: 'AmongUs' },
    { label: '碰撞气泡', value: 'Confetti' },
    { label: '聚焦折线', value: 'Explosions' },
    { label: '缤纷水果', value: 'FireWorks' },
  ]

  const menuList = [
    { name: '首页', path: '/', icon: <Home sx={{ color: currentPath == '/' ? 'primary.main' : '' }} /> },
    { name: '文章', path: '/blog', icon: <MenuBook sx={{ color: currentPath == '/blog' ? 'primary.main' : '' }} /> },
    { name: '技能', path: '/skill', icon: <Computer sx={{ color: currentPath == '/skill' ? 'primary.main' : '' }} /> },
    { name: '项目', path: '/work', icon: <Assignment sx={{ color: currentPath == '/work' ? 'primary.main' : '' }} /> },
    { name: '关于', path: '/about', icon: <PermContactCalendar sx={{ color: currentPath == '/about' ? 'primary.main' : '' }} /> },
    { name: '相册', path: '/photo', icon: <CameraAlt sx={{ color: currentPath == '/photo' ? 'primary.main' : '' }} /> },
  ]
  const router = useRouter()
  const path = usePathname()
  const handleMenuClick = (path: string) => {
    toggleDrawer(false)
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



  useEffect(() => {
    const storageType = localStorage.getItem('storageType') || 'Colors'
    setType(storageType)
    switchBgStyle({ type: storageType })
    onScroll()
    window.addEventListener('scroll', onScroll)
  }, [])


  return (
    <StyledBoxBase sx={{ bgcolor: !scrollDis ? 'rgba(0,0,0,0.2)' : '#0b1120', boxShadow: !scrollDis ? 'none' : '0.5px 0.5px 0.5px #333', height: isShowHeader ? Sm ? '60px' : '80px' : '0', transition: 'all 0.5s' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center', width: '100%', maxWidth: Big ? 1400 : Middle ? 1160 : '100%', margin: '0 auto', padding: Sm ? '0 12px' : 0 }}>
        <Box sx={{ display: 'flex' }}>
          <Link href='/'><Image src={'/static/images/logo.png'} objectFit="contain" alt="logo" width={Sm ? 70 : 100} height={Sm ? 30 : 40} /></Link>
          <Box sx={{ display: Sm ? 'none' : 'flex', alignItems: 'center', gap: '20px', marginLeft: 8 }}>
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
        <Box>
          {
            Sm ? <Box>
              <Button onClick={toggleDrawer(true)}><MenuIcon sx={{ fontSize: 30 }} /></Button>
              <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                <Box sx={{ width: 250 }} role="presentation">
                  <List>
                    <ListItem sx={{ bgcolor: '#ccc' }}>
                      <FormControlLabel
                        onChange={(e) => handleSwitchTheme(e)}
                        control={<MaterialUISwitch checked={theme == 'dark' ? true : false} />}
                        label="主题"
                      />
                    </ListItem>
                  </List>
                  <Divider />
                  <List>
                    {menuList.map((item, index) => (
                      <ListItem key={item.name} disablePadding onClick={() => handleMenuClick(item.path)}>
                        <ListItemButton sx={{ color: currentPath == item.path ? 'primary.main' : '' }}>
                          <ListItemIcon>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>

                </Box>
              </Drawer>
            </Box> : <Box sx={{ marginRight: '-1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FormControl sx={{ width: '130px', color: '#fff' }} size="small">
                <InputLabel id="demo-simple-select-label">BgStyle</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type"
                  sx={{ color: 'primary.light' }}
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
                control={<MaterialUISwitch checked={theme == 'dark' ? true : false} />}
                label=""
              />
            </Box>
          }
        </Box>

      </Box>
      <Box sx={{ position: 'fixed', right: Big ? 100 : Middle ? 80 : 30, bottom: 60, display: scrollDis > 200 ? 'block' : 'none', zIndex: 999 }} onClick={() => scrollTop()}>
        <IconButton aria-label="Example">
          <ArrowCircleUpIcon sx={{ width: Big ? 50 : 30, height: Big ? 50 : 40, color: 'primary.light' }} />
        </IconButton>
      </Box>

    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;