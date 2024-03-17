'use client';
import React from "react";
import { Box, Button, Divider, IconButton, MenuItem, Typography } from "@mui/material";
import { FC, memo, useState } from "react";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StyledMenu } from "./StyledMenu";
import { styled, alpha } from '@mui/material/styles';
import ActiveLastBreadcrumb from "./Bread";
import { useRouter } from "next/navigation";

export const Header: FC = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter()
  const handleToHome = () => {
    router.push('/')
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Box sx={{ height: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 35px', borderBottom: '1px solid #EBEAED' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} component='div' onClick={handleToHome}>
          <Image src="/static/images/logo.png" alt="logo" width={40} height={40} style={{ minWidth: '40px', minHeight: '40px' }} />
          <Typography component="div" sx={{ mr: 8, fontSize: '22px', fontWeight: 'bold' }}>
            Gera
          </Typography>
        </Typography>
        <ActiveLastBreadcrumb />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="disabled" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton>
          <Badge variant="dot" color="error">
            <NotificationsActive color="disabled" />
          </Badge>
        </IconButton>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ margin: '0 10px 0 20px' }} />
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="text"
          sx={{ color: '#2E2C34', textTransform: 'none', fontWeight: 'bold', fontSize: '16px' }}
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Max bart
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Team
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  )
})

Header.displayName = "Header"

export default Header;