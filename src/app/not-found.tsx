import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

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