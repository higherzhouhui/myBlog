"use client"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '@/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, styled } from '@mui/material';
import BasicSpeedDial from '@/components/SpeedDial';
import { Toaster } from 'react-hot-toast';
import NProgress from "nprogress"
import 'nprogress/nprogress.css' //这个样式必须引入

import '@/app/globals.css'
import './style.css'

import BackGroundComp from '@/components/Background';
import { ReactNode, useState, useEffect, Suspense, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { EventBus, EventTypes } from '@/utils/event';

export default function BasicLayOut(props: { children: ReactNode }) {
  const [isShowMange, setShowManage] = useState(false)
  const [themeStyle, setThemeStyle] = useState('dark')

  const path = usePathname()
  const StyledBox = styled(Box)(({ theme }) => ({
    paddingTop: 80,
    fontSize: 16,
    position: 'relative',
  }));

  const ThemeProps: any = useMemo(() => {
    let c = darkTheme
    if (themeStyle == 'dark') {
      c = darkTheme
    } else {
      c = lightTheme
    }
    return c
  }, [themeStyle])

  const StyledRoot = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.mode == 'dark' ? '#0b1120' : 'rgba(255,255,255,0.8)'
  }));
  useEffect(() => {
    const href = location.href
    if (href.includes('localhost')) {
      setShowManage(true)
    } else {
      setShowManage(false)
    }
    const listenThemeSwitch = (data: any) => {
      setThemeStyle(data.theme)
    }
    EventBus.addListener(EventTypes.SwitchTheme, listenThemeSwitch)
  }, [])

  NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
  });

  useEffect(() => {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    }, 500);

  }, [path])
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={ThemeProps}>
        <BackGroundComp />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <StyledRoot>
          <Header />
          <StyledBox>
            <Suspense>
              <Box sx={{ flex: 1, height: '100%', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
                {props.children}
                <Footer />
              </Box>
            </Suspense>
          </StyledBox>
        </StyledRoot>
        {
          isShowMange ? <Suspense>
            <BasicSpeedDial />
          </Suspense> : null
        }
        <Toaster />
        {/* <Box sx={{ position: 'fixed', right: 0, top: 0, zIndex: 9999 }}>
          <iframe frameBorder="no" width="300" height="86" src="//music.163.com/outchain/player?type=2&id=2061978961&auto=1&height=66"></iframe>
        </Box> */}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}