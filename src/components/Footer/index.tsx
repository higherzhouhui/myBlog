'use client';
import React from "react";
import { Box } from "@mui/material";
import { FC, memo } from "react";

export const Footer: FC = memo(() => {

  return (
    <Box sx={{ color: '#fff', textAlign: 'center', lineHeight: 3 }}>
      CopyRight@2014-2028
    </Box>
  )
})

Footer.displayName = "Footer"

export default Footer;