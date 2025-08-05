import { Metadata } from 'next'
import { generateSEOMetadata } from '@/utils/seo'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: '页面未找到 - 404错误',
  description: '您访问的页面不存在，请检查URL是否正确或返回首页继续浏览。',
  keywords: ['404', '页面未找到', '错误页面'],
  url: '/not-found'
})

export default function NotFound() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0' }}>
      <Typography color='error.light' sx={{ fontSize: 28 }}>Not Found</Typography>
      <img src='/static/images/notfound.png' style={{ width: 375, objectFit: 'contain' }} alt='notfound' />
      <Link href="/">
        <Button variant='contained' color='error' sx={{ fontSize: 18, mt: 2 }}>回到首页</Button>
      </Link>
    </Box>
  )
}