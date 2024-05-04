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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageList = [
    { cover: 'eng.png', list: ['eng1.png', 'eng2.png'], title: '英国大峡谷' },
    { cover: 'adyy.png', list: ['adyy1.png', 'adyy2.png'], title: '澳大利亚' },
    { cover: 'flb1.png', list: ['flb1.png', 'flb2.png'], title: '菲律宾海滩' },
    { cover: 'lsj.png', list: ['lsj1.png', 'lsj2.png'], title: '美国洛杉矶' },
    { cover: 'hsd.png', list: ['hsd1.png', 'hsd2.png'], title: '华盛顿' },
    { cover: 'tg.png', list: ['eng1.png', 'eng2.png'], title: '泰国' },
    { cover: 'db.png', list: ['eng1.png', 'eng2.png'], title: '迪拜' },
    { cover: 'dg.png', list: ['eng1.png', 'eng2.png'], title: '德国' },
    { cover: 'xjp.png', list: ['eng1.png', 'eng2.png'], title: '新加坡' },
    { cover: 'ml1.png', list: ['eng1.png', 'eng2.png'], title: '秘鲁' },
  ]
  const lookMore = (href: string) => {
    if (href) {
      window.open(href)
    } else {
      setOpen(true)
    }
  }
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 3, columnGap: 3, pt: 2, pb: 2 }}>
      {
        imageList.map((item: any, index: number) => {
          return <Card key={index} sx={hoverStyle} style={{ transition: 'all 0.5s' }}>
            <CardMedia
              sx={{ height: 240 }}
              image={`/static/images/photo/${item.cover}`}
              title={item.title}

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>

            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button variant='contained' color='success' onClick={() => lookMore(item.link)}>查看更多</Button>
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
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
            暂未开放
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}