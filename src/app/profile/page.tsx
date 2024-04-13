"use client"
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Avatar, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter()
  return (
    <Box sx={{ display: 'flex', background: '#fff', minHeight: 'calc(100vh - 80px)', p: 4, backgroundImage: 'url(/static/images/login-bg.jpg)', backgroundSize: '100% 100%', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', mr: 10, cursor: 'pointer' }} onClick={() => router.push('/contact')}>
        <Avatar src='/static/images/header.jpg' style={{ width: 150, height: 150 }} variant='circular' />
        <Typography security='h1' color={'#fff'}>风中追风</Typography>
      </Box>
      <Box>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          1、从2014年接触web前端开发（计算机专业），熟练掌握前端三要素（HTML/JS/CSS），能快速上手任一前端框架；
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          2、主要的技术栈为React、Vue、Angular及其衍生框架NextJS、NustJS、Uniapp、Ionic；
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          3、有开发过微信小程序线上商城、Uniapp跨端开发生活服务类APP经验；
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          4、参与过几个WEB3区块链DAPP项目；能熟练使用WEB3JS/ETHERJS唤醒虚拟钱包以及与合约交互；
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          5、有全栈开发经验，从沟通需求（画产品图）、UI图（蓝湖和PhotoShop）、数据库设计（mysql）、页面开发（Nextjs），前后端交互（nodejs）、项目部署（阿里云服务器、域名购买、短信服务、宝塔管理、nginx）能独立完成；
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
          6、做过北美的前端外包项目，主要使用NextJS、TailwindCSS、Styled-components、Mui技术，能够高度还原设计稿；
        </Alert>
      </Box>
    </Box>

  );
}