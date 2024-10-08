'use client';
import React, { useContext, useEffect } from "react";
import { Alert, Box, Button, Divider, Grid, Modal, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import Image from 'next/image'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ChatIcon from '@mui/icons-material/Chat';
import SkillList from '@/components/SkillList'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MediaQueryContext } from "@/components/BaseLayout";
import 'swiper/css';
import Loading from "@/components/Loading";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const iframeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  Background: '#fff'
}


const GridStyles = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode == 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
}));

const imageList = [
  '/static/images/swiper/2.png',
  '/static/images/swiper/1.png',
  '/static/images/swiper/3.png',
  '/static/images/swiper/4.png',
  '/static/images/swiper/5.png',
  '/static/images/swiper/6.png',
  '/static/images/swiper/7.png',
]

export default function AboutComp() {
  const [open, setOpen] = useState(false)
  const [skillOpen, setSkillOpen] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)
  const [iframeSrc, setIframeSrc] = useState('')
  const [iframeLoading, setIframeLoading] = useState(true)
  const { Sm, width, height } = useContext(MediaQueryContext);
  const [tabList, setTabList] = useState([
    {
      icon: <ChatIcon color="primary" />, link: '', type: 'modal', img: '/static/images/vx.png',
    },
    {
      icon: <TelegramIcon color="primary" />, link: 'https://t.me/cloudljj',
    },
    {
      icon: <GitHubIcon color="primary" />, link: 'https://github.com/higherzhouhui',
    },
    {
      icon: <BusinessIcon color="primary" />, link: 'https://www.jizaoji.top',
    },
  ])
  const labelList = [
    'Web前端开发', '8年+经验', '日活10w+', 'WEB3.0', '数字游民', '网站设计/搭建', '区块链Dapp', '远程办公', 'UniApp', '微信小程序', '正规科班', '专业对口', '计算机专业', '项目整包', '多渠道结算', '快速高效', '全栈开发', '性价比超高',
  ]
  const skillList = [
    'React', 'Vue2', 'Vue3', 'Angular', 'JQuery', 'NextJs', 'NustJs', 'NodeJs', 'Ant-Design', 'Element-Ui', 'Element-Plus', 'Mysql', 'Prisma', 'Pwa', 'EtherJs', 'Web3Js', 'Solidity', 'Mui', 'Component-Styled'
  ]
  const colorList: any = [
    "primary", "success", "error", "warning", "info"
  ]
  const workList = [
    {
      time: '2016.4-2018.5',
      company: '上海博达数据通信有限公司',
      icon: <CellWifiIcon color="success" />,
      pos: '软件研发部->路由器应用组->软件开发',
      link: 'https://aiqicha.baidu.com/detail/compinfo?pid=35592857020426&rq=es&pd=ee&from=ps&query=%E4%B8%8A%E6%B5%B7%E5%8D%9A%E8%BE%BE%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1',
      content: [
        '路由器应用层管理页面更新迭代',
        '混合式开发(AngularJs/IONIC)路由器管理APP'
      ]
    },
    {
      time: '2018.5-2020.5',
      company: '上海红星美凯龙设计云设计云信息科技',
      icon: <DesignServicesIcon color="primary" />,
      pos: '软件研发部->BIM智能制造组->WEB初级算法工程师',
      link: 'https://aiqicha.baidu.com/company_detail_10106615640972',
      content: [
        '2D平面图户型构建以及UI库维护',
        '编写VSCODE插件以高亮、自动补齐、提示自创的一种描述非规则的3D模型',
        '使用webworker以处理复杂的3D模型生成计算'
      ]
    },
    {
      time: '2020.05-2022.03',
      company: '华夏云融航空信息科技',
      icon: <AirplanemodeActiveIcon color="info" />,
      pos: '地勤部-IT软件研发组->WEB前端开发',
      link: 'https://aiqicha.baidu.com/company_detail_25376865573705',
      content: [
        '订票微信小程序功能迭代，UI组件封装',
        '更新迭代官网',
        '各类中后台管理系统'
      ]
    },
    {
      time: '2022.03-2024.05',
      company: '重庆团望科技有限公司',
      icon: <AssuredWorkloadIcon color='action' />,
      pos: 'WEB项目组->中级前端开发',
      link: 'https://aiqicha.baidu.com/company_detail_92581425249205?t=0',
      content: [
        '新项目的技术栈选型与框架搭建，部署与自动化打包',
        `优化原有直播项目，从资源文件、接口响应流程判断、websocket实时推送修改redux数据流`,
        'web3项目虚拟钱包、合约交互',
        '使用uniapp进行混合式app开发并完成上线',
      ]
    },
    {
      time: '2022.10-now',
      company: '重庆极造极信息科技有限公司',
      icon: <CorporateFareIcon color='primary' />,
      pos: '研发部->全栈开发/合伙人',
      link: 'https://aiqicha.baidu.com/company_detail_86664768952542?t=0',
      content: [
        '新项目的技术栈选型与框架搭建，部署与自动化打包',
        `官网的设计与迭代`,
        '自媒体运营揽活/报价',
        '与甲方/产品经理确定需求',
      ]
    },
  ]
  const handleShowCompany = (link: string) => {
    setIframeSrc(link)
    setCompanyVisible(true)
    setIframeLoading(true)
  }
  useEffect(() => {
    if (companyVisible && iframeLoading && iframeSrc) {
      let iframe = document.getElementById('companyIframe');
      if (!iframe) {
        setTimeout(() => {
          iframe = document.getElementById('companyIframe')!;
          iframe.onload = function () {
            setIframeLoading(false)
          }
        }, 300)
      }
    }
  }, [companyVisible, iframeLoading, iframeSrc])

  useEffect(() => {

  }, [])
  return (
    <Grid container={Sm ? false : true} sx={{ padding: Sm ? '0 12px' : '12px 0' }}>
      <GridStyles sx={{ borderRadius: 2, p: 2 }} item xs={3.25}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Box sx={{ position: 'relative', height: 80, width: 80, margin: '0 auto', borderRadius: '50%', overflow: 'hidden', mb: 1 }}>
            <Image src='/static/images/avatar4.png' layout="fill" alt="bg" sizes="100" />
          </Box>
          <Typography color={'primary'}>风中追风</Typography>
        </Box>
        <Alert icon={false} severity="success">我曾踏足山巅，也曾进入低谷，二者都让我受益良多，攀登的过程虽然漫长，但巅峰的风景却是值得的，失败始终是最好的导师，掌控命运，否则命运将掌控你。</Alert>
        <Stack direction={'row'} sx={{ gap: 2, justifyContent: 'center', mt: 2 }}>
          {
            tabList.map(item => {
              return item.type ? <Box onClick={() => setOpen(true)} key={item.link} sx={{ cursor: 'pointer' }}>{item.icon}</Box> : <a href={item.link} key={item.link} target="_blank">{item.icon}</a>
            })
          }
        </Stack>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography component={'div'} sx={{ color: 'primary.dark', display: 'flex', alignItems: 'center', mb: 1 }}><SchoolIcon sx={{ mr: 1 }} />毕业院校(2013-2017)：</Typography>
          <Divider />
          <Typography sx={{ fontSize: 14, mt: 2, color: 'primary.light' }}>陕西科技大学 —— 计算机系 —— 物联网工程</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography component={'div'} sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 1, color: 'primary.dark', }}><SettingsAccessibilityIcon sx={{ mr: 1 }} />标签：</Typography>
          <Divider />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 2, justifyContent: 'space-between' }}>
            {
              labelList.map((item, index) => {
                return <Button variant={'contained'} color={colorList[Math.floor(Math.random() * 6)]} size="small" key={item}>{item}</Button>
              })
            }
          </Box>
          <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '135%' }} onClick={() => setSkillOpen(!skillOpen)}>
            <Image src='/static/images/skill.png' fill alt="skill" />
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography component={'div'} sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 1, color: 'primary.dark', }}><LaptopWindowsIcon sx={{ mr: 1 }} />技能：</Typography>
          <Divider />
          <SkillList />
          {/* <Box>
            {
              skillList.map(item => {
                return <Button variant={'contained'} color={colorList[Math.floor(Math.random() * 5)]} size="small" key={item} sx={{ mb: 1, mt: 1, mr: '3px' }}>{item}</Button>
              })
            }
          </Box> */}
        </Box>
      </GridStyles>
      <Grid item xs={0.25} sx={{ mb: Sm ? 2 : 0 }} />
      <GridStyles sx={{ borderRadius: 2, overflow: 'hidden' }} item xs={8.5}>
        <Box sx={{ position: 'relative', height: Sm ? 120 : 300 }}>
          <Swiper
            loop
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {imageList.map((item, index: number) => (
              <SwiperSlide key={index} style={{ width: '100%', height: Sm ? '150px' : '300px', position: 'relative' }}>
                <Image src={item} fill alt="bg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Timeline position={Sm ? 'right' : 'alternate-reverse'}>
          {
            workList.reverse().map(item => {
              return <TimelineItem key={item.time}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography>{item.time}</Typography>
                  <Typography sx={{ fontSize: 15, cursor: 'pointer' }} color={'primary.dark'} onClick={() => { handleShowCompany(item.link) }}>
                    {item.company}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    {
                      item.icon
                    }
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography color='primary' sx={{ fontSize: 15 }}>{item.pos}</Typography>
                  {
                    item.content.map((cList, index) => {
                      return <Typography color='secondary.dark' key={cList}>
                        {index + 1}、{cList}
                      </Typography>
                    })
                  }
                </TimelineContent>
              </TimelineItem>
            })
          }
        </Timeline>
        <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '47%' }}>
          <Image src={'/static/images/team.png'} layout="fill" alt="team" />
        </Box>
      </GridStyles>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src='/static/images/vx.png' width={375} height={450} alt="vx" />
        </Box>
      </Modal>
      <Modal
        open={skillOpen}
        onClose={() => setSkillOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src='/static/images/skill.png' width={Sm ? 375 : 500} height={Sm ? 450 : 650} alt="vx" />
        </Box>
      </Modal>
      <Modal open={companyVisible} onClose={() => setCompanyVisible(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
      >
        <Box sx={iframeStyle}>
          <iframe src={iframeSrc} width={width > 1100 ? 1100 : width} height={height > 700 ? 700 : height} id="companyIframe" />
          {
            iframeLoading ? <Loading /> : null
          }
        </Box>
      </Modal>
    </Grid >
  );
}
