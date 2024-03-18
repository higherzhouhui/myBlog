"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function MediaCard() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [list, setList] = React.useState([
    { title: '上海博达数据通信有限公司官网', label: ['jquery', 'bootstrap', 'html5', 'css3', 'angular'], link: 'https://www.bdcom.com.cn/', logo: 'https://img1.baidu.com/it/u=757460992,874884504&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=326' },
    { title: '上海红星美凯龙设计云家居设计平台', label: ['REACT', 'ANT-DESIGN', 'THREE', 'TYPESCRIPT', 'CHROME-PLUGIN', 'WORKER', 'WEBGL'], link: 'https://www.mshejiyun.com/', logo: 'https://5b0988e595225.cdn.sohucs.com/images/20190407/41606f640b5744bebc67eea7bfac33c4.jpeg' },
    { title: '华夏云融航空科技官网', label: ['VUE2', 'ELEMENT-UI', 'NUST', 'SSR', 'SEO'], link: 'https://www.ceyat.net/#/', logo: 'https://gbres.dfcfw.com/Files/iimage/20240220/3FF797A80ADD30A79CB1B309043BAD94_w1269h841.png' },
    { title: 'mac动态壁纸官网', label: ['REACT', 'NEXTJS', 'PM2', 'SSR', 'MUI', 'CANVAS'], link: 'https://www.dynamicwallpaperengine.com/', logo: 'https://www.dynamicwallpaperengine.com/_next/image?url=%2Fstatic%2Fimage%2Fzh%2F1.png&w=1920&q=75' },
    { title: '重庆jizaoji信息科技有限公司官网', label: ['NUST', 'VUE3', 'ELEMENT-PLUS', 'SSR'], link: 'https://www.jizaoji.top/', logo: 'https://www.jizaoji.top/static/img/develop.5ed8710.png' },
    { title: '生物医学工程文献检索引擎', label: ['REACT', 'STYLED-COMPONENTS', 'ANT-DESIGN', 'SEO', 'SSR'], link: 'https://pubmed.ncbi.nlm.nih.gov/', logo: 'https://pbs.twimg.com/profile_banners/106895787/1607541339/600x200' },
    { title: '在线商城小程序', label: ['VUE', 'T-DESIGN', '云开发'], link: '', logo: 'https://18963215.s21i.faimallusr.com/2/ABUIABACGAAg_IDuiAYogK3d4wYwhAc4-wI.jpg' },
    { title: '微医多端问卷调查', label: ['UNIAPP', 'VUE3', '云开发'], link: 'https://www.wedoctor.top/', logo: 'https://img0.baidu.com/it/u=2487525016,2845941083&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' },
    { title: '商城管理后台', label: ['REACT', 'ANT-DESIGN'], link: 'https://admin.xiaoeda.cn/', logo: 'https://img.zcool.cn/community/01frdt7qct1ywvua3saogh3832.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100' },
    { title: '问卷管理后台', label: ['VUE3', 'ELEMENT-PLUS'], link: 'http://admin.wedoctor.top/', logo: 'https://img.zcool.cn/community/0134cd607d205c11013e87f445d30e.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100' },

  ])
  const lookMore = (href: string) => {
    if (href) {
      window.open(href)
    } else {
      setOpen(true)
    }
  }
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 5, columnGap: 5, pt: 2, pb: 2 }}>
      {
        list.map((item: any, index: number) => {
          return <Card key={index}>
            <CardMedia
              sx={{ height: 240 }}
              image={item.logo}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Box>
                {
                  item.label.map((clabel: string, cindex: number) => {
                    return <Button variant='contained' size='small' sx={{ mr: 1, mt: 1 }} color={Math.random() > 0.5 ? 'error' : 'success'} key={cindex}>{clabel}</Button>
                  })
                }
              </Box>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={() => lookMore(item.link)}>了解更多</Button>
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