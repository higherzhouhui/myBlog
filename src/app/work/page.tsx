"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, SxProps } from '@mui/material';
import Modal from '@mui/material/Modal';
import { MediaQueryContext } from '@/components/BaseLayout';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const hoverStyle: SxProps = {
  '&:hover': {
    transform: 'scale(1.02)'
  },
};

export default function MediaCard() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const { Sm, Middle, Big } = React.useContext(MediaQueryContext);

  const [list, setList] = React.useState([
    { title: 'forkfrenpet链游', label: ['Nextjs', 'React', 'Pwa', 'SSR', 'TailwindCss', 'Etherjs', 'sol/web3'], link: 'https://www.forkfrenpet.com/', logo: '/static/images/fork.png' },
    { title: 'AI METASPACE DAO', label: ['web3.js', 'Nextjs', 'React', 'Pwa', 'SSR', 'TailwindCss'], link: 'https://insta-gilt-nu.vercel.app/', logo: '/static/images/metaspace.png' },
    { title: '简历在线生成器', label: ['Nextjs', 'React', 'SSR', 'TailwindCss'], link: 'https://resume-generation.vercel.app/', logo: '/static/images/resume.png' },
    { title: '上海博达数据通信有限公司官网', label: ['jquery', 'bootstrap', 'html5', 'css3', 'angular'], link: 'https://www.bdcom.com.cn/', logo: 'https://img1.baidu.com/it/u=757460992,874884504&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=326' },
    { title: '上海红星美凯龙设计云家居设计平台', label: ['REACT', 'ANT-DESIGN', 'THREE', 'TYPESCRIPT', 'CHROME-PLUGIN', 'WORKER', 'WEBGL'], link: 'https://www.mshejiyun.com/', logo: 'https://5b0988e595225.cdn.sohucs.com/images/20190407/41606f640b5744bebc67eea7bfac33c4.jpeg' },
    { title: '华夏云融航空科技官网', label: ['VUE2', 'ELEMENT-UI', 'NUST', 'SSR', 'SEO'], link: 'https://www.ceyat.net/#/', logo: 'https://gbres.dfcfw.com/Files/iimage/20240220/3FF797A80ADD30A79CB1B309043BAD94_w1269h841.png' },
    { title: 'mac动态壁纸官网', label: ['REACT', 'NEXTJS', 'PM2', 'SSR', 'MUI', 'CANVAS'], link: 'https://www.dynamicwallpaperengine.com/', logo: '/static/images/dynamic.png' },
    { title: '重庆jizaoji信息科技有限公司官网', label: ['NUST', 'VUE3', 'ELEMENT-PLUS', 'SSR'], link: 'https://www.jizaoji.top/', logo: 'https://www.jizaoji.top/static/img/develop.5ed8710.png' },
    { title: '生物医学工程文献检索引擎', label: ['REACT', 'STYLED-COMPONENTS', 'ANT-DESIGN', 'SEO', 'SSR'], link: 'https://pubmed.ncbi.nlm.nih.gov/', logo: 'https://pbs.twimg.com/profile_banners/106895787/1607541339/600x200' },
    { title: '在线商城小程序', label: ['VUE', 'T-DESIGN', '云开发'], link: '', logo: 'https://18963215.s21i.faimallusr.com/2/ABUIABACGAAg_IDuiAYogK3d4wYwhAc4-wI.jpg' },
    { title: '微医多端问卷调查', label: ['UNIAPP', 'VUE3', '云开发'], link: 'https://www.wedoctor.top/', logo: 'https://img0.baidu.com/it/u=2487525016,2845941083&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' },
    { title: '商城管理后台', label: ['REACT', 'ANT-DESIGN'], link: 'https://admin.xiaoeda.cn/', logo: 'https://img.zcool.cn/community/01frdt7qct1ywvua3saogh3832.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100' },
    { title: '问卷管理后台', label: ['VUE3', 'ELEMENT-PLUS'], link: ' http://admin.wedoctor.top', logo: 'https://img.zcool.cn/community/0134cd607d205c11013e87f445d30e.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100' },

  ])
  const lookMore = (e: any, href: string) => {
    e.stopPropagation()
    if (href) {
      window.open(href)
    } else {
      setOpen(true)
    }
  }
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: Big ? 'repeat(4, 1fr)' : Middle ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)', rowGap: Big ? 3 : 2, columnGap: Big ? 3 : 2, padding: Sm ? '0 12px' : '12px 0' }}>
      {
        list.map((item: any, index: number) => {
          return <Card key={index} sx={hoverStyle} style={{ transition: 'all 0.5s' }} onClick={(e) => lookMore(e, item.link)}>
            <CardMedia
              sx={{ height: 240 }}
              image={item.logo}
              title={item.title}

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {
                  item.label.map((clabel: string, cindex: number) => {
                    return <Button variant='contained' size='small' color={Math.random() > 0.5 ? 'error' : Math.random() > 0.5 ? 'success' : 'info'} key={cindex}>{clabel}</Button>
                  })
                }
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button size="large" variant='contained' color='success' onClick={(e) => lookMore(e, item.link)}>了解更多</Button>
            </CardActions>
          </Card>
        })
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src='/static/images/xcx.jpg' style={{ width: '300px', objectFit: 'contain' }} />
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
            扫码体验
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}