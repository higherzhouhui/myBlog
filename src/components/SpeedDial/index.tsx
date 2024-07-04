import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import { AddCircle, CheckCircle, Edit, InfoRounded, Settings } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { copyUrlToClip } from '@/utils/common';

export default function BasicSpeedDial() {
  const router = useRouter()
  const path = usePathname()
  const [id, setId] = React.useState(0)
  const actions = [
    { icon: <Settings />, name: 'Manage', title: '管理' },
    { icon: <ShareIcon />, name: 'Share', title: '分享' },
    { icon: <Edit />, name: 'Edit', title: '修改' },
    // { icon: <SaveIcon />, name: 'Save', title: '保存', },
    { icon: <AddCircle />, name: 'AddSkill', title: '新增技能' },
    { icon: <AddCircle />, name: 'Add', title: '新增博客' },
  ];
  const handleClick = (type: string) => {
    let url = ''
    if (type == 'Add') {
      url = '/blogEdit'
      router.push(url)
    } else if (type == 'Share') {
      toast('复制成功', { icon: <CheckCircle />, style: { color: 'green' } })
      copyUrlToClip()
    } else if (type == 'Edit') {
      if (id) {
        if (path.includes('skillDetail')) {
          url = `/skillEdit?id=${id}`
        } else {
          url = `/blogEdit?id=${id}`
        }
        router.push(url)
      }
    } else if (type == 'Manage') {
      url = '/manage'
      router.push(url)
    } else if (type == 'AddSkill') {
      url = '/skillEdit'
      router.push(url)
    }
  }

  React.useEffect(() => {
    if (path.includes('/blogDetail') || path.includes('/skillDetail')) {
      const _pathArray = path.split('/')
      const id = _pathArray[2] as any
      setId(id)
    }
  }, [path])
  return (
    <SpeedDial
      ariaLabel="快捷工具"
      sx={{ position: 'fixed', bottom: 100, right: 100 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          onClick={() => handleClick(action.name)}
          key={action.title}
          icon={action.icon}
          tooltipTitle={action.title}
        />
      ))}
    </SpeedDial>
  );
}