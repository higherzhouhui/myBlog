"use client"
import * as React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getSkillListReq } from '@/service/skill';
import { BlogListInterface } from '@/interface/common';

const MyGrid = styled('div')(({ theme }) =>
  theme.unstable_sx({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: 2,
    rowGap: 2,
    mt: 2,
    mb: 2,
  }),
);

const StyledMyCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  transition: 'all 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.01)'
  }
}));

export default function SkillPage() {
  const router = useRouter()
  const [list, setList] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const initData = async () => {
    setLoading(true)
    try {
      const res = await getSkillListReq({ id: null })
      setLoading(false)
      setList(res.data.list)
    } catch {

    }
  }
  const handleToDetail = (item: BlogListInterface) => {
    router.push(`/skilldetail/${item.id}/${item.title}`)
  }
  React.useEffect(() => {
    initData()
  }, [])
  return (
    <Box sx={{ minHeight: 'calc(100vh - 80px)' }}>
      <Box sx={{ backgroundImage: 'url(http://cn.bing.com/iod/1366/1024/201706221600)', height: 320, width: '100%' }}>
        <Typography sx={{ color: '#fff', fontSize: 32, pt: 6, ml: 4, letterSpacing: 4 }}>致力于技术分享与生活记录</Typography>
        <Typography sx={{ color: '#fff', fontSize: 16, mt: 4, ml: 4, letterSpacing: 2 }}>我原要昂扬独步天下，奈何却忍辱藏于污泥；我梦在叱咤风云，却无奈苦候时机；难道登峰造极，途中遍是荆棘……
        </Typography>
        <Typography sx={{ color: '#fff', fontSize: 16, mt: 4, ml: 4, letterSpacing: 2 }}>世界经济史是一部基于假象和谎言的连续剧。要获得财富，做法就是认清其假象，投入其中，然后在假象被公众认识之前退出游戏！
        </Typography>
      </Box>
      <MyGrid>
        {
          list.map((item: BlogListInterface, index) => {
            return <StyledMyCard key={index}>
              <CardMedia
                sx={{ height: '100%', width: 200, minWidth: 200 }}
                image={item.logo}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.subTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.abstract}
                </Typography>
                <Button sx={{ mt: 2 }} onClick={() => handleToDetail(item)}>阅读更多</Button>
              </CardContent>
            </StyledMyCard>
          })
        }
        {
          loading ? [...Array(6)].map((item, index: number) => {
            return <Box key={index} style={{ width: '100%' }}>
              <Skeleton variant="rectangular" height={220} />
            </Box>
          }) : null
        }
      </MyGrid>
    </Box>
  );
}