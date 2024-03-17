'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.security === 'underLine' && {
            textDecoration: 'underline!important',
          }),
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: () => ({
          '.mui-177cjvx-MuiButtonBase-root-MuiTab-root': {
            color: '#f5f5f5',
            minWidth: '4px'
          },
          '.mui-177cjvx-MuiButtonBase-root-MuiTab-root.Mui-selected': {
            color: '#fff',
            fontWeight: 'bold'
          },
          '.mui-1aquho2-MuiTabs-indicator': {
            backgroundColor: '#fff'
          }
        }),
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: '#2E2C34',
          ...(ownerState.security === 'h1' && {
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '8px 0 16px 0'
          }),
          ...(ownerState.security === 'subTitle' && {
            fontSize: '16px',
            fontWeight: 'bold',
          }),
          ...(ownerState.security === 'h2' && {
            fontSize: '14px',
            fontWeight: 'bold'
          }),
          ...(ownerState.security === 'desc' && {
            fontSize: '14px',
            color: '#84818A'
          }),
        }),
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: () => ({
          color: '#f5f5f5',
        }),
      }
    },
  },
});

export default theme;