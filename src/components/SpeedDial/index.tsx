import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import { AddCircle, CheckCircle, Edit, InfoRounded, Settings } from '@mui/icons-material';
import { useRouter, useSearchParams } from 'next/navigation';
import toast, { Toast } from 'react-hot-toast';
import { copyUrlToClip } from '@/utils/common';

export default function BasicSpeedDial() {
  const router = useRouter()
  const id = useSearchParams().get('id')
  const actions = [
    { icon: <InfoRounded />, name: '', title: '如果是管理员则展示该按钮' },
    { icon: <Settings />, name: 'Manage', title: '管理' },
    { icon: <ShareIcon />, name: 'Share', title: '分享' },
    { icon: <Edit />, name: 'Edit', title: '修改' },
    // { icon: <SaveIcon />, name: 'Save', title: '保存', },
    { icon: <AddCircle />, name: 'Add', title: '新增' },
  ];
  const handleClick = (type: string) => {
    let url = ''
    if (type == 'Add') {
      url = '/blogedit'
      router.push(url)
    } else if (type == 'Share') {
      toast('复制成功', { icon: <CheckCircle />, style: { color: 'green' } })
      copyUrlToClip()
    } else if (type == 'Edit') {
      if (id) {
        url = `/blogedit?id=${id}`
        router.push(url)
      }
    } else if (type == 'Manage') {
      url = '/manage'
      router.push(url)
    }
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
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