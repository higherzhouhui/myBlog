'use client';
import React, { useEffect, useRef } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const menuList = [
  { name: '文章', path: '/blog' },
  { name: '技能', path: '/skill' },
  { name: '项目', path: '/work' },
  { name: '关于', path: '/about' },
  { name: '工具', path: '/tool' },
  { name: '机会', path: '/seekJob' },
  // { name: '相册', path: '/photo' },
]


export default function Home() {
  const router = useRouter()
  const text = '欢迎来到风中追风的Blog！'
  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typewriter text={text} style={{ height: '30px', lineHeight: '30px', margin: '20px 0', fontSize: '22px', fontWeight: 'bold' }} />
        <img src={'/static/images/money.png'} alt="bg" style={{ width: '750px', objectFit: 'contain', maxWidth: '100%', borderRadius: '4px' }} />
        <ButtonGroup color="secondary" aria-label="Medium-sized button group" sx={{ mt: 4 }}>
          {
            menuList.map(item => {
              return <Button key={item.name} variant="contained" onClick={() => handleMenuClick(item.path)}>{item.name}</Button>
            })
          }
        </ButtonGroup>
      </Box>
    </Box >
  );
}


const Typewriter = (props: any) => {
  const [typedText, setTypedText] = useState('');
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const delay = 300; // 每个字符之间的延迟时间（毫秒）
    let currentTextIndex = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (currentTextIndex < props.text.length) {
        setTypedText(props.text.substring(0, currentTextIndex + 1));
        currentTextIndex++;
      } else {
        clearInterval(intervalRef.current)
        // currentTextIndex = 0
        // setTypedText('')
      }
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, [props.text]);

  return (
    <Typography color={'primary.dark'} style={{ ...props.style }}>{typedText}</Typography>
  );
};