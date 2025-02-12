"use client";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const menuList = [
  { name: "文章", path: "/blog" },
  { name: "技能", path: "/skill" },
  { name: "项目", path: "/work" },
  { name: "关于", path: "/about" },
  { name: "工具", path: "/tool" },
  { name: "机会", path: "/seekJob" },
  // { name: '相册', path: '/photo' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const text =
    "欢迎来到风中追风的Blog。我是一名全栈开发者，专注于构建高效、可扩展的Web应用。我的技术栈包括React、Node.js、Python和AWS，具备丰富的云计算和DevOps经验。我热爱技术分享，通过博客和开源项目帮助他人成长。目前，我正在探索人工智能和区块链领域，致力于将前沿技术应用于实际场景。";
  const handleMenuClick = (path: string) => {
    router.push(path);
  };
  const [tabList, setTabList] = useState([
    {
      icon: <ChatIcon color="primary" />,
      link: "",
      type: "modal",
      img: "/static/images/vx.png",
    },
    {
      icon: <TelegramIcon color="primary" />,
      link: "https://t.me/cloudljj",
    },
    {
      icon: <GitHubIcon color="primary" />,
      link: "https://github.com/higherzhouhui",
    },
    {
      icon: <BusinessIcon color="primary" />,
      link: "https://www.jizaoji.top",
    },
  ]);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typewriter
          text={text}
          style={{
            height: "30px",
            lineHeight: "30px",
            margin: "30px 0",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        />
        <img
          src={"/static/images/iwork.png"}
          alt="bg"
          style={{
            width: "750px",
            objectFit: "contain",
            maxWidth: "100%",
            borderRadius: "4px",
          }}
        />
        <Stack
          direction={"row"}
          sx={{ gap: 2, justifyContent: "center", mt: 4 }}
        >
          {tabList.map((item) => {
            return item.type ? (
              <Box
                onClick={() => setOpen(true)}
                key={item.link}
                sx={{ cursor: "pointer" }}
              >
                {item.icon}
              </Box>
            ) : (
              <a href={item.link} key={item.link} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </Stack>
        <ButtonGroup
          color="secondary"
          aria-label="Medium-sized button group"
          sx={{ mt: 4 }}
        >
          {menuList.map((item) => {
            return (
              <Button
                key={item.name}
                variant="contained"
                onClick={() => handleMenuClick(item.path)}
              >
                {item.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image
            src="/static/images/vx.png"
            width={375}
            height={450}
            alt="vx"
          />
        </Box>
      </Modal>
    </Box>
  );
}

const Typewriter = (props: any) => {
  const [typedText, setTypedText] = useState("");
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
        clearInterval(intervalRef.current);
        // currentTextIndex = 0
        // setTypedText('')
      }
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, [props.text]);

  return (
    <Typography color={"primary.dark"} style={{ ...props.style }}>
      {typedText}
    </Typography>
  );
};
