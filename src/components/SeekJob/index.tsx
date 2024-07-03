'use client'
import { Avatar, Box, Button, Skeleton, Stack, Typography, styled, Badge, BadgeProps, Rating, Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MediaQueryContext } from "../BaseLayout";
import { getJobListReq } from "@/service/job";
import { JobListInterface } from "@/interface/job";
import { calculateTimeAgo } from "@/utils/common";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useSearchParams, useRouter } from "next/navigation";

const BoxStyles = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode == 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
  padding: 12,
}));

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function SeekJobComp() {
  const { Sm, width, height } = useContext(MediaQueryContext);
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(searchParams.get('page') ? searchParams.get('page') as any * 1 : 1)
  const [dataList, setDataList] = useState<JobListInterface[]>([])
  const [backObj, setBackObj] = useState<any>({})
  const getInitData = async (cPage: number) => {
    setLoading(true)
    const res = await getJobListReq({ page: cPage })
    setLoading(false)
    if (res.code == 200) {
      setDataList(res.data.list)
      setBackObj(res.data.backObj)
    }
  }

  const handleExpand = (index: number) => {
    const list = JSON.parse(JSON.stringify(dataList))
    list[index].expand = !list[index].expand
    setDataList(list)
  }
  const handlePage = (page: number) => {
    setPage(page)
    router.push(`/seekjob?page=${page}`)
  }

  useEffect(() => {
    getInitData(page)
  }, [page])

  return <Box sx={{ padding: Sm ? '0 12px' : '12px 0' }}>
    <BoxStyles>
      {
        loading ? <SkeletonList /> : <JobListItem list={dataList} total={backObj.total_count} handleExpand={handleExpand} Sm={Sm} />
      }
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination onChange={(e, page) => handlePage(page)} count={backObj.total_pages} color="primary" page={page} />
      </Box>
    </BoxStyles>
  </Box>
}

function JobListItem(props: { list: JobListInterface[], total: number, handleExpand: (index: number) => void, Sm: boolean }) {
  const { list, total, handleExpand, Sm } = props
  const handleToDetail = (id: string) => {
    window.open(`https://eleduck.com/posts/${id}`)
  }
  return (
    <Box>
      <Stack direction="row" sx={{ mb: 2 }}>
        <Typography color='secondary.light'>共{total}个帖子</Typography>
      </Stack>
      {
        list.map((item, index) => {
          return <Stack direction="row" key={item.id} sx={{ display: 'flex', padding: 1, alignItems: 'top', borderTop: '1px solid #999', justifyContent: 'space-between' }}>
            <Stack direction="row" sx={{ alignItems: 'center' }} spacing={Sm ? 0 : 2}>
              <Avatar src={item.user.avatar_url} sx={{ height: 50, width: 50, display: Sm ? 'none' : 'block' }} />
              <Stack>
                <StyledBadge badgeContent={item.marks_count} color="info" sx={{ width: 'fit-content' }}>
                  <Button sx={{ pl: 0, wordBreak: 'break-all', textAlign: 'left' }} variant="text" size="large" onClick={() => handleToDetail(item.id)}>{item.title}</Button>
                </StyledBadge>
                <Typography security='desc' color={'GrayText'} sx={{ transition: 'all 0.3s', maxHeight: item.expand ? 300 : 0, overflow: 'hidden', wordBreak: 'break-all' }}>{item.summary}...</Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 1, alignItems: 'center', flexWrap: 'wrap', }}>
                  <Button color={getCateColor(item.category.id)} variant="contained" size="small">
                    {item.category.name}
                  </Button>
                  <Typography color='primary.light'>{item.user.nickname}</Typography>
                  <Typography security='desc' color={'GrayText'}>发布于{calculateTimeAgo(item.published_at)}</Typography>
                  {
                    item.last_comment ? <>
                      <Typography color='primary.light'>{item.last_comment?.user?.nickname}</Typography>
                      <Typography security='desc' color={'GrayText'}>{calculateTimeAgo(item.last_comment_at)}回复</Typography>
                    </> : null
                  }
                  {
                    item.marks_count ? <Rating
                      name="simple-controlled"
                      readOnly
                      value={getRatingValue(item.marks_count)}
                    /> : null
                  }

                </Stack>
              </Stack>
            </Stack>
            {
              Sm ? null : <Button variant="outlined" startIcon={item.expand ? <ExpandLessIcon /> : <ExpandMoreIcon />} sx={{ height: 'fit-content', minWidth: 'fit-content', ml: 2 }} onClick={() => handleExpand(index)}>
                {
                  item.expand ? '收起' : '展开'
                }
              </Button>
            }
          </Stack>
        })
      }
    </Box>
  )
}

function SkeletonList() {
  return (
    [...Array(6)].map((item, index) => {
      return <Skeleton sx={{ bgcolor: 'primary.light', mb: 1 }} variant="rectangular" height={150} key={index} />
    })
  )
}


function getCateColor(type: number): "inherit" | "info" | "primary" | "secondary" | "error" | "warning" | "success" {
  let color: any = 'info'
  if (type == 22 || type == 24 || type == 26) {
    color = 'primary'
  }
  if (type == 14) {
    color = 'secondary'
  }
  if (type == 15) {
    color = 'error'
  }
  if (type == 10 || type == 25 || type == 19 || type == 3) {
    color = 'warning'
  }
  if (type == 1 || type == 2 || type == 4) {
    color = 'info'
  }
  if (type == 5) {
    color = 'error'
  }
  return color
}

function getRatingValue(count: number) {
  let value = 0
  if (count == 1) {
    value = 1
  }
  if (count > 1 && count < 5) {
    value = 2
  }
  if (count >= 5 && count < 10) {
    value = 3
  }
  if (count >= 10 && count < 20) {
    value = 4
  }
  if (count >= 20) {
    value = 5
  }
  return value
}