import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function SkillList() {
  return (
    <Box sx={{ width: '100%', maxHeight: 500, mt: 1, overflow: 'auto' }}>
      <Masonry columns={2} >
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{item.title}</Label>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://img1.baidu.com/it/u=4019741156,2911316540&fm=253&fmt=auto&app=138&f=JPEG?w=465&h=250',
    title: 'NEXTJS',
  },
  {
    img: 'https://tangjiusheng.com/d/file/image/20200715/1594806943103728.jpg',
    title: 'REACT',
  },
  {
    img: 'https://img2.baidu.com/it/u=4156493697,2172340222&fm=253&fmt=auto&app=138&f=PNG?w=1140&h=500',
    title: 'UNIAPP',
  },
  {
    img: 'https://img2.baidu.com/it/u=2710533458,3038757258&fm=253&fmt=auto&app=120&f=JPEG?w=608&h=342',
    title: 'ETHERJS',
  },
  {
    img: 'https://img0.baidu.com/it/u=1090108371,3076866252&fm=253&fmt=auto&app=120&f=JPEG?w=1015&h=346',
    title: 'WEB3JS',
  },
  {
    img: 'https://img1.baidu.com/it/u=4263240643,4286094117&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=300',
    title: 'SOLIDITY',
  },
  {
    img: 'https://nimg.ws.126.net/?url=https://dingyue.ws.126.net/t05yXMmqylsIrWAg5FGKKpuHPNpuqR=WXFA8QArA0E1SF1481421548188.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
    title: 'PRISMA',
  },
  {
    img: 'https://img0.baidu.com/it/u=23673982,1864664782&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500',
    title: 'VUE',
  },
  {
    img: 'https://img2.baidu.com/it/u=614681154,1359632257&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=478',
    title: 'ANGULAR',
  },
  {
    img: 'https://img.php.cn/upload/article/000/000/004/5d423f36370c1944.jpg',
    title: 'DJANGO',
  },

  {
    img: 'https://pic3.zhimg.com/v2-0462b4a856b7b1dd0b839f9fefb122cb_1440w.jpg?source=172ae18b',
    title: 'NUSTJS',
  },
  {
    img: 'https://img1.baidu.com/it/u=3217984915,1490281241&fm=253&fmt=auto&app=138&f=JPEG?w=706&h=422',
    title: 'NODEJS',
  },
  {
    img: 'https://pic1.zhimg.com/v2-e88f553a7a7ba98bae5b00021699800a_1440w.jpg?source=172ae18b',
    title: 'ANT-DESIGN',
  },
  {
    img: 'https://img2.baidu.com/it/u=1285684926,1468970170&fm=253&fmt=auto&app=138&f=JPEG?w=958&h=500',
    title: 'ELEMENT-UI',
  },
  {
    img: 'https://img0.baidu.com/it/u=788357210,2416683911&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475',
    title: 'MUI',
  },

  {
    img: 'https://img2.baidu.com/it/u=3026891135,2438780417&fm=253&fmt=auto&app=138&f=PNG?w=670&h=360',
    title: 'PWA',
  },
  {
    img: 'https://img2.baidu.com/it/u=2974394154,3841837690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=263',
    title: 'IONIC',
  },
  {
    img: 'https://img0.baidu.com/it/u=1094844079,3950295910&fm=253&fmt=auto&app=138&f=PNG?w=798&h=500',
    title: 'MYSQL',
  },
];
