import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import { AddCircle, Edit } from '@mui/icons-material';
import { useRouter } from 'next/navigation';


export default function BasicSpeedDial() {
  const router = useRouter()
  const actions = [
    { icon: <ShareIcon />, name: 'Share', title: '分享' },
    { icon: <Edit />, name: 'Edit', title: '修改' },
    // { icon: <SaveIcon />, name: 'Save', title: '保存', },
    { icon: <AddCircle />, name: 'Add', title: '新增' },
  ];
  const handleClick = (type: string) => {
    let url = ''
    if (type == 'Add') {
      url = '/blogedit'
    }
    router.push(url)
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 32, right: 100 }}
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