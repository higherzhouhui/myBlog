"use client"
import * as React from 'react';
import { Box, SxProps } from '@mui/material';
import Loading from '@/components/Loading';


export default function MediaCard() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const iframe = document.getElementById('myIframe')!;
    iframe.onload = function () {
      setLoading(false)
    }
  }, [])
  return (
    <Box sx={{ padding: '12px 0', height: 'calc(100vh - 130px)' }}>
      {
        loading ? <Loading /> : null
      }
      <iframe id='myIframe' src='https://www.runjs.cool/' width={'100%'} height={'100%'} />
    </Box>
  );
}