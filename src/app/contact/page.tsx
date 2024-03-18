import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Avatar, Box, Typography } from '@mui/material';

export default function SimpleAlert() {
  return (
    <Box sx={{ display: 'flex', background: '#fff', minHeight: 'calc(100vh - 80px)', p: 4, backgroundImage: 'url(/static/images/personal-center-bg.jpg)', backgroundSize: '100% 100%', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src='/static/images/header.jpg' style={{ width: 150, height: 150 }} variant='circular' />
        <Typography security='h1' color={'#fff'}>TEL:185-1601-0812</Typography>
        <Typography security='h1' color={'#fff'}>微信：P0refect</Typography>
        <Typography security='h1' color={'#fff'}>github：https://github.com/higherzhouhui</Typography>
        <Typography security='h1' color={'#fff'}>邮箱：782492184@qq.com</Typography>
        <Typography security='h1' color={'#fff'}>方式：全职远程-立即</Typography>
        <Typography security='h1' color={'#fff'}>期望薪资：&gt;11K</Typography>
      </Box>
    </Box>

  );
}