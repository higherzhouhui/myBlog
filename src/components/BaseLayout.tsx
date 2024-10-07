"use client"
import BackGroundComp from '@/components/Background';
import { ReactNode, useState, useEffect, Suspense, useMemo, createContext, useRef } from 'react';
import { EventBus, EventTypes, switchTheme } from '@/utils/event';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '@/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import { Box, styled, useMediaQuery } from '@mui/material';
import BasicSpeedDial from '@/components/SpeedDial';
import { Toaster } from 'react-hot-toast';
import NProgress from "nprogress"
import { AppContextProps } from '@/interface/common'
import 'nprogress/nprogress.css' //这个样式必须引入
import '@/app/globals.css'
import './style.css'


export const MediaQueryContext = createContext<AppContextProps>({
  Sm: false,
  Middle: false,
  Big: false,
  width: 500,
  height: 500,
});

export default function BasicLayOut(props: { children: ReactNode }) {
  const Sm = useMediaQuery('(max-width: 1200px)')
  const Middle = useMediaQuery('(min-width: 1200px) and (max-width: 1440px)')
  const Big = useMediaQuery('(min-width: 1440px)')
  const [layoutScreen, setLayoutScreen] = useState({ width: 0, height: 0 })
  const timer = useRef<any>(null)
  const [isShowMange, setShowManage] = useState(false)
  const [themeMode, setThemeMode] = useState('dark')
  const [loadInit, setLoadInit] = useState(false)
  const StyledBox = styled(Box)(({ theme }) => ({
    fontSize: 16,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 80,
  }));

  const ThemeProps: any = useMemo(() => {
    let c = darkTheme
    if (loadInit) {
      if (themeMode == 'dark') {
        c = darkTheme
      } else {
        c = lightTheme
      }
    }
    return c
  }, [themeMode, loadInit])

  const StyledRoot = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode == 'dark' ? '#0b1120' : 'rgba(255,255,255,0.8)'
  }));

  useEffect(() => {
    const href = location.href
    if (href.includes('localhost')) {
      setShowManage(true)
    } else {
      setShowManage(false)
    }
    const storageTheme = localStorage.getItem('themeMode') || 'dark'
    setThemeMode(storageTheme)
    switchTheme({ theme: storageTheme })
    setLoadInit(true)
  }, [])

  useEffect(() => {
    setLayoutScreen({
      width: window.screen.availWidth,
      height: window.screen.availHeight
    })
  }, [Sm, Middle, Big])

  NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
  });

  const handleSwitchTheme = (e: any) => {
    const value = e.target.checked
    const themeData = value ? 'dark' : 'light'
    localStorage.setItem('themeMode', value ? 'dark' : 'light')
    setThemeMode(themeData)
    switchTheme({ theme: themeData })
  }

  useEffect(() => {
    if (timer && timer.current) {
      clearTimeout(timer.current)
    }
    const changeRoute = () => {
      NProgress.start()
      timer.current = setTimeout(() => {
        NProgress.done()
      }, 1000);
    }
    changeRoute()

    EventBus.addListener(EventTypes.ChangeRoute, changeRoute)
  }, [])
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={ThemeProps}>
        <BackGroundComp />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MediaQueryContext.Provider value={{ Sm, Middle, Big, width: layoutScreen.width, height: layoutScreen.height }}>
          {
            (Sm || Middle || Big) ? <StyledRoot>
              <Header theme={themeMode} handleSwitchTheme={handleSwitchTheme} />
              <StyledBox sx={{ minHeight: '100vh' }}>
                <Suspense fallback={<Loading />}>
                  <Box sx={{ flex: 1, maxWidth: Big ? 1400 : Middle ? 1160 : '100%', width: '100%', margin: '0 auto' }}>
                    {props.children}
                  </Box>
                  <Footer />
                </Suspense>
              </StyledBox>
            </StyledRoot> : <Loading />
          }
        </MediaQueryContext.Provider>
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