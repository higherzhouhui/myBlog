'use client';
import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { FC, memo, useState } from "react";
import { styled } from '@mui/material/styles';
import { useRouter, usePathname } from "next/navigation";

export const Header: FC = memo(() => {
  const [currentPath, setCurrentPath] = useState('/')
  const menuList = [
    { name: '首页', path: '/' },
    { name: '作品', path: '/work' },
    { name: 'divider', path: '' },
    { name: '简历', path: '/profile' },
    { name: '联系', path: '/contact' },
  ]
  const router = useRouter()
  const path = usePathname()
  const handleMenuClick = (path: string) => {
    router.push(path)
  }
  const StyledBoxBase = styled(Box)(({ theme }) => ({
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 12px',
    zIndex: 10,
    background: '#fff',
    position: 'fixed',
    top: 0,
    width: '100%',
    boxShadow: '3px 3px 0 #f5f5f5',
    '& .mui-oov0cx-MuiButtonBase-root-MuiButton-root:last-child': {
      marginRight: '0'
    }
  }));
  const StyledButtonBase = styled(Button)(({ theme }) => ({
    fontSize: 16,
  }));

  useEffect(() => {
    setCurrentPath(path)
  }, [path])
  return (
    <StyledBoxBase>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '500px', justifyContent: 'space-around' }}>
        {
          menuList.map((item, index) => {
            // eslint-disable-next-line @next/next/no-img-element
            return item.name == 'divider' ? <img key={index} style={{ width: '50px', objectFit: 'contain', borderRadius: '50%' }} src="/static/images/logo.jpg" alt="logo" /> :
              <StyledButtonBase variant={currentPath == item.path ? 'contained' : 'text'} key={index} onClick={() => handleMenuClick(item.path)}>
                {item.name}
              </StyledButtonBase>
          })
        }
      </Box>
    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;