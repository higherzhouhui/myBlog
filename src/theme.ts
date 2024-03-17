'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
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
          '.Mui-selected': {
            color: '#fff!important',
            fontWeight: 'bold',
            fontSize: '18px'
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