"use client";
import * as React from 'react';
import { useEffect } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Header from '@/components/Header';
import { Box } from '@mui/material';
import './style.css'
import styled from '@emotion/styled';
import BasicSpeedDial from '@/components/SpeedDial';
import { Toaster } from 'react-hot-toast';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import { usePathname } from 'next/navigation';
export default function RootLayout(props: { children: React.ReactNode }) {
  const path = usePathname()
  NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
  });
  useEffect(() => {
    NProgress.start()
    // Router.events.on('routeChangeStart', () => NProgress.start());
    // Router.events.on('routeChangeComplete', () => NProgress.done());
    // Router.events.on('routeChangeError', () => NProgress.done());
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
    background: '#f5f5f5',
    minHeight: '100vh',
  }));

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <StyledRoot>
              <Header />
              <StyledBox>
                <Box sx={{ flex: 1, height: '100%', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
                  {props.children}
                </Box>
              </StyledBox>
            </StyledRoot>
            <BasicSpeedDial />
            <Toaster />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}