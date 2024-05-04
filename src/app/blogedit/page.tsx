"use client"
import MyEditor from "@/components/MyEditor";
import { BlogListInterface } from "@/interface/common";
import { PostBlogListReq, getBlogListReq } from "@/service/common";
import { CheckCircle, Error } from "@mui/icons-material";
import { TextField, Button, Box, Typography, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
export const dynamic = 'force-dynamic'
const names = [
  'HTML5',
  'CSS',
  'JAVASCRIPT',
  'NEXTJS',
  'REACT',
  'VUE',
  'ANGULAR',
  'NUSTJS',
  'UNIAPP',
  'MUI',
  'STYLED-COMPONENT',
  'IONIC',
  '人生思考',
  '代码人生',
  '谁的青春不迷茫',
  '我的青葱岁月',
  'Prisma',
  'SSR',
];
const ITEM_HEIGHT = 42;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
    },
  },
};
export default function BlogEdit() {
  const queryId = useSearchParams().get('id')
  const [id, setId] = useState<string | null>('')
  const [content, setContent] = useState('')
  const [update, setUpdate] = useState(false)
  const [formData, setFormData] = useState<BlogListInterface>({
    title: '',
    label: [],
    time: '',
    uptime: '',
    creator: '风中追风',
    type: 'tech',
    abstract: '',
    logo: '',
    content: '',
  })
  const onchangeText = (e: any, key: string) => {
    const value = e.target.value
    const _data = JSON.stringify(formData)
    const n_data = JSON.parse(_data)
    n_data[key] = value
    console.log(n_data)
    setFormData(n_data)
  }
  const [LabelName, setLabelName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof LabelName>) => {
    const {
      target: { value },
    } = event;
    setLabelName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const hanleChangeEditor = (c: string): void => {
    setContent(c)
  }
  const handleConfirm = () => {
    console.log(LabelName, formData, content)
    if (formData.title && content && formData.abstract && LabelName.length && formData.logo) {
      formData.label = LabelName;
      formData.uptime = moment().format('YYYY-MM-DD HH:mm:ss')
      if (!id) {
        formData.time = moment().format('YYYY-MM-DD HH:mm:ss')
        formData.id = new Date().getTime()
      }
      formData.content = content
      formData.lookNum = Math.round(Math.random() * 10000)
      PostBlogListReq(formData).then((res: any) => {
        if (res.code == 200) {
          toast('操作成功!', { icon: <CheckCircle />, style: { color: 'green' } })
        } else {
          toast(res.msg, { icon: <Error />, style: { color: 'red' } })
        }
      })
    } else {
      toast('请完善输入内容!', { icon: <Error />, style: { color: 'red' } })
    }
  }
  const router = useRouter()
  const handleCancel = () => {
    router.push('/')
  }

  const initData = async (id: string | null) => {
    if (!id) {
      return
    }
    try {
      const res = await getBlogListReq({ id: id ? parseInt(id) : null })
      if (res.code == 200) {
        setFormData(res.data.list)
        setLabelName(res.data.list.label)
        setContent(res.data.list.content)
        setUpdate(true)
      }
    } catch {

    }
  }
  useEffect(() => {
    setId(queryId)
    initData(queryId)
  }, [queryId])
  return (
    <Box sx={{ background: 'rgba(255,255,255,0.9)', height: '100%', padding: 2, overflow: 'auto' }}>
      <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 'bold' }}>
        {
          id ? '修改文章' : '创建新文章'
        }
      </Typography>
      <Box>
        <TextField
          required
          label="标题"
          value={formData.title}
          placeholder="请输入标题"
          sx={{ width: '100%', mt: 2 }}
          size="small"
          onChange={(e) => onchangeText(e, 'title')}
        />
        <TextField
          required
          label="摘要"
          value={formData.abstract}
          placeholder="请输入摘要"
          sx={{ width: '100%', mt: 2 }}
          size="small"
          onChange={(e) => onchangeText(e, 'abstract')}
        />
        <TextField
          required
          label="封面"
          value={formData.logo}
          placeholder="请输入封面图片地址"
          sx={{ width: '100%', mt: 2 }}
          size="small"
          onChange={(e) => onchangeText(e, 'logo')}
        />
        <FormControl sx={{ width: '100%', mt: 2 }} size="small" required>
          <FormLabel id="demo-row-radio-buttons-group-label">类型</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={formData.type}
            onChange={(e) => onchangeText(e, 'type')}
          >
            <FormControlLabel value="tech" control={<Radio />} label="技术" />
            <FormControlLabel value="life" control={<Radio />} label="生活" />
            <FormControlLabel value="recommend" control={<Radio />} label="推荐" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 2 }} size="small" required>
          <InputLabel id="demo-multiple-checkbox-label">标签</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={LabelName || []}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            placeholder="请选择所属标签"
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={(LabelName || []).indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ fontSize: 18, mt: 2, mb: 2 }}>正文</Typography>
        </FormControl>
        <MyEditor content={content} onChangeContent={hanleChangeEditor} update={update} />
        <Box sx={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button variant="contained" color="error" onClick={() => handleCancel()} sx={{ mr: 5 }}>返回</Button>
          <Button variant="contained" onClick={() => handleConfirm()}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}