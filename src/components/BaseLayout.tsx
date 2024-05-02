"use client"
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import BasicSpeedDial from '@/components/SpeedDial';
import { Toaster } from 'react-hot-toast';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { usePathname } from 'next/navigation';
import './style.css'
import BackGroundComp from '@/components/Background';

export default function BasicLayOut(props: { children: React.ReactNode }) {
  const path = usePathname()
  const [isShowMange, setShowManage] = React.useState(false)
  NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
  });
  React.useEffect(() => {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    }, 500);

  }, [path])

  const StyledBox = styled(Box)(({ theme }) => ({
    paddingTop: 80,
    fontSize: 16,
    position: 'relative',
  }));

  const StyledRoot = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }));
  React.useEffect(() => {
    const href = location.href
    if (href.includes('localhost')) {
      setShowManage(true)
    } else {
      setShowManage(false)
    }
  }, [])


  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <BackGroundComp />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <StyledRoot>
          <Header />
          <StyledBox>
            <React.Suspense>
              <Box sx={{ flex: 1, height: '100%', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
                {props.children}
                <Footer />
              </Box>
            </React.Suspense>
          </StyledBox>
        </StyledRoot>
        {
          isShowMange ? <React.Suspense>
            <BasicSpeedDial />
          </React.Suspense> : null
        }
        <Toaster />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}