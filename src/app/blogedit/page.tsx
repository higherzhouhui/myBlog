"use client"
import MyEditor from "@/components/MyEditor";
import { BlogListInterface } from "@/interface/organization";
import { Error } from "@mui/icons-material";
import { TextField, Button, Box, Typography, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Dialog, Alert } from "@mui/material";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  'IONIC'
];
const typeList = ['rencetly', 'recommend']
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
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<BlogListInterface>({
    title: '',
    label: [],
    time: '',
    uptime: '',
    creator: '风中追风',
    type: 'rencetly',
    abstract: '',
    logo: '',
    content: '',
  })
  const onchangeText = (e: any, key: string) => {
    const value = e.target.value
    const _data = JSON.stringify(formData)
    const n_data = JSON.parse(_data)
    n_data[key] = value
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
  const hanleChangeEditor = (c: string) => {
    const _data = JSON.stringify(formData)
    const n_data = JSON.parse(_data)
    n_data.content = c
    setFormData(n_data)
  }
  const TheEditor = MyEditor(formData.content || '', hanleChangeEditor)
  function readLocalJsonFile(url: string, callback: (c: any) => void) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        callback(json);
      }
    };
    xhr.send(null);
  }
  const handleConfirm = () => {
    readLocalJsonFile('/mydata.json', function (e) {
      console.log(e)
    })


    if (formData.title && formData.content && formData.abstract && LabelName.length) {
      formData.label = LabelName;
      formData.uptime = moment().format('YYYY-DD-MM HH:mm:ss')
      if (!id) {
        formData.time = moment().format('YYYY-DD-MM HH:mm:ss')
        formData.id = Math.round(Math.random() * 100000000000000)
      }
      formData.lookNum = Math.round(Math.random() * 10000)
      formData.type = typeList[Math.floor(Math.random() * 2)]
    } else {
      setOpen(true)
    }
  }
  const router = useRouter()
  const handleCancel = () => {
    router.back()
  }
  useEffect(() => {
    setId(id)
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
          placeholder="请输入标题"
          sx={{ width: '100%', mt: 2 }}
          size="small"
          onChange={(e) => onchangeText(e, 'title')}
        />
        <TextField
          required
          label="摘要"
          placeholder="请输入摘要"
          sx={{ width: '100%', mt: 2 }}
          size="small"
          onChange={(e) => onchangeText(e, 'abstract')}
        />
        <FormControl sx={{ width: '100%', mt: 2 }} size="small" required>
          <InputLabel id="demo-multiple-checkbox-label">标签</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={LabelName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            placeholder="请选择所属标签"
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={LabelName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ fontSize: 18, mt: 2, mb: 2 }}>正文</Typography>
        </FormControl>
        {
          TheEditor
        }
        <Box sx={{ margin: '12px 0', display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" onClick={() => handleCancel()} sx={{ mr: 5 }}>取消</Button>
          <Button variant="contained" onClick={() => handleConfirm()}>保存</Button>
        </Box>
      </Box>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Alert icon={<Error fontSize="inherit" />} severity="error">
          请完善输入内容
        </Alert>
      </Dialog>
    </Box>
  );
}