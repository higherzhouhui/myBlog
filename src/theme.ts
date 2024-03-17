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
            minWidth: '4px'
          },
          '.mui-177cjvx-MuiButtonBase-root-MuiTab-root.Mui-selected': {
            color: '#000',
            fontWeight: 'bold'
          },
          '.mui-1aquho2-MuiTabs-indicator': {
            backgroundColor: '#5542F6'
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
  },
});

export default theme;