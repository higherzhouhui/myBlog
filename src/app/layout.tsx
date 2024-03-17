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
export default function RootLayout(props: { children: React.ReactNode }) {
  const StyledBox = styled(Box)(({ theme }) => ({
    fontSize: 16,
    height: 'calc(100vh - 100px)',
    display: 'flex',
    overflow: 'auto',
    bgcolor: '#FBFAFC',
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
            <Header />
            <StyledBox>
              <Box sx={{ flex: 1, height: '100%', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
                {props.children}
              </Box>
            </StyledBox>
            <BasicSpeedDial />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}