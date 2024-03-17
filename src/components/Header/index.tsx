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
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 12px',
    zIndex: 10,
    background: '#fff',
    '& .mui-oov0cx-MuiButtonBase-root-MuiButton-root:last-child': {
      marginRight: '0'
    }
  }));
  const StyledButtonBase = styled(Button)(({ theme }) => ({
    marginRight: 30,
    fontSize: 16,
  }));

  useEffect(() => {
    setCurrentPath(path)
  }, [path])
  return (
    <StyledBoxBase>
      {
        menuList.map((item, index) => {
          // eslint-disable-next-line @next/next/no-img-element
          return item.name == 'divider' ? <img key={index} style={{ width: '50px', objectFit: 'contain', borderRadius: '50%', marginRight: '30px' }} src="/static/images/logo.jpg" alt="logo" /> :
            <StyledButtonBase variant={currentPath == item.path ? 'contained' : 'text'} key={index} onClick={() => handleMenuClick(item.path)}>
              {item.name}
            </StyledButtonBase>
        })
      }
    </StyledBoxBase>
  )
})

Header.displayName = "Header"

export default Header;