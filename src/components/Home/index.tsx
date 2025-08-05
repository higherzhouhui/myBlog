"use client";
import React, { useEffect, useRef, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
  useTheme,
  Fade,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Image from "next/image";
import { MediaQueryContext } from "@/components/BaseLayout";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
};

const menuList = [
  { 
    name: "文章", 
    path: "/blog", 
    icon: <ArticleIcon />,
    description: "技术分享与思考",
    color: "#1976d2"
  },
  { 
    name: "技能", 
    path: "/skill", 
    icon: <CodeIcon />,
    description: "专业技能展示",
    color: "#ed6c02"
  },
  { 
    name: "项目", 
    path: "/work", 
    icon: <WorkIcon />,
    description: "精选作品集",
    color: "#2e7d32"
  },
  { 
    name: "关于", 
    path: "/about", 
    icon: <PersonIcon />,
    description: "个人简介",
    color: "#9c27b0"
  },
  { 
    name: "工具", 
    path: "/tool", 
    icon: <BuildIcon />,
    description: "实用工具箱",
    color: "#d32f2f"
  },
  { 
    name: "机会", 
    path: "/seekJob", 
    icon: <BusinessCenterIcon />,
    description: "求职信息",
    color: "#0288d1"
  },
];

const socialLinks = [
  {
    icon: <ChatIcon />,
    label: "微信",
    type: "modal",
    img: "/static/images/vx.png",
  },
  {
    icon: <TelegramIcon />,
    label: "Telegram",
    link: "https://t.me/cloudljj",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    link: "https://github.com/higherzhouhui",
  },
  {
    icon: <BusinessIcon />,
    label: "网站",
    link: "https://www.jizaoji.top",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Python", "AWS", "Docker", "MongoDB"
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const { Sm, Middle, Big } = useContext(MediaQueryContext);

  const introText = 
    "欢迎来到风中追风的Blog。我是一名全栈开发者，专注于构建高效、可扩展的Web应用。我的技术栈包括React、Node.js、Python和AWS，具备丰富的云计算和DevOps经验。我热爱技术分享，通过博客和开源项目帮助他人成长。目前，我正在探索人工智能和区块链领域，致力于将前沿技术应用于实际场景。";

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Fade in={isLoaded} timeout={1000}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          {/* Avatar and Introduction */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                mb: 3,
                boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                border: `3px solid ${theme.palette.primary.main}`,
              }}
            >
              <Image
                src="/static/images/avatar.png"
                alt="风中追风"
                width={160}
                height={160}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            
            <Typography
              variant={Sm ? "h4" : "h2"}
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              风中追风
            </Typography>
            
            <Typography
              variant={Sm ? "h6" : "h5"}
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontWeight: 300,
              }}
            >
              全栈开发者 • 技术分享者 • 终身学习者
            </Typography>

            {/* Skills Tags */}
            <Box sx={{ mb: 4 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  size="small"
                  sx={{
                    m: 0.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Typewriter Text */}
          <Box sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
            <Typewriter
              text={introText}
              style={{
                fontSize: Sm ? "16px" : "18px",
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                fontWeight: 400,
              }}
            />
          </Box>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            {socialLinks.map((item, index) => (
              <IconButton
                key={index}
                onClick={() => item.type === "modal" ? setOpen(true) : window.open(item.link, "_blank")}
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.1)' 
                    : 'rgba(0,0,0,0.05)',
                  color: theme.palette.primary.main,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Fade>

      {/* Navigation Cards */}
      <Fade in={isLoaded} timeout={1500}>
        <Grid container spacing={3}>
          {menuList.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  height: "100%",
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.9)',
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.1)' 
                    : 'rgba(0,0,0,0.1)'}`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' 
                      ? 'rgba(255,255,255,0.1)' 
                      : 'rgba(0,0,0,0.15)'}`,
                    "& .nav-icon": {
                      color: item.color,
                      transform: "scale(1.1)",
                    },
                    "& .nav-arrow": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
                onClick={() => handleMenuClick(item.path)}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Box
                    className="nav-icon"
                    sx={{
                      fontSize: 48,
                      color: theme.palette.text.secondary,
                      mb: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.name}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.palette.primary.main,
                    }}
                  >
                    <Typography variant="body2" sx={{ mr: 1 }}>
                      探索更多
                    </Typography>
                    <ArrowForwardIcon
                      className="nav-arrow"
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fade>

      {/* WeChat QR Code Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open}>
          <Paper
            sx={{
              ...modalStyle,
              p: 3,
              borderRadius: 4,
              textAlign: "center",
              outline: "none",
              boxShadow: theme.shadows[24],
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              微信联系方式
            </Typography>
            <Image
              src="/static/images/vx.png"
              width={300}
              height={360}
              alt="微信二维码"
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
}

const Typewriter = ({ text, style }: { text: string; style: any }) => {
  const [typedText, setTypedText] = useState("");
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const delay = 50; // 加快打字速度
    let currentTextIndex = 0;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      if (currentTextIndex < text.length) {
        setTypedText(text.substring(0, currentTextIndex + 1));
        currentTextIndex++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text]);

  return (
    <Typography
      component="div"
      sx={{
        ...style,
        "&::after": {
          content: '"|"',
          animation: "blink 1s infinite",
        },
        "@keyframes blink": {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
      }}
    >
      {typedText}
    </Typography>
  );
};
