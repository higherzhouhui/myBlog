"use client";
import * as React from 'react';
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

export default function RootLayout(props: { children: React.ReactNode }) {
  const StyledBox = styled(Box)(({ theme }) => ({
    fontSize: 16,
    height: 'calc(100vh - 80px)',
    display: 'flex',
    overflow: 'auto',
    bgcolor: '#FBFAFC',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100%',
    backgroundPosition: 'center',
    position: 'relative',
  }));

  const StyledRoot = styled(Box)(({ theme }) => ({

    backgroundImage: 'url(/static/images/bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100%',
    backgroundPosition: 'center',
    position: 'relative',
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