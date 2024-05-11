'use client';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
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
            fontWeight: 'bold',
            fontSize: '18px',
          },
        }),
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: () => ({
          '.MuiFormLabel-root': {
            color: '#06f'
          },
        }),
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
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
          }),
        }),
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: () => ({
          color: '#333',
        }),
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: () => ({
          '.MuiMenu-paper': {
            boxShadow: '1px 1px 3px #999'
          },
        }),
      }
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
            fontWeight: 'bold',
            fontSize: '18px',
          },
        }),
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
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
          }),
        }),
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: () => ({
          color: '#333',
        }),
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: () => ({
          '.MuiMenu-paper': {
            boxShadow: '1px 1px 3px #999'
          },
        }),
      }
    }
  },
});

