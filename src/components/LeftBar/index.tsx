'use client';
import React, { useEffect } from "react";
import { Avatar, Box, Button, List, ListItemButton, ListItemIcon, ListItemText, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FC, memo, useState } from "react";
import { UserOrganization } from '@/interface/organization'
import { stringAvatar } from '@/utils/common'
import CustomModal from "../CustomModal";
import InputFileUpload from "../UploadFile";
import { useRouter, usePathname } from 'next/navigation';
import TeamPaner from "./Team";

export const LeftBar: FC = memo(() => {
  const router = useRouter()
  const path = usePathname()
  const [currentType, setCurrentType] = useState('Organztion')
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const teamList = ['team', 'crm']
  useEffect(() => {
    let flag = false
    teamList.map(item => {
      if (path.includes(item)) {
        flag = true
      }
    })
    if (flag) {
      setCurrentType('Team')
    } else {
      setCurrentType('Organztion')
    }
  }, [path])
  const [orList, setOrList] = useState<UserOrganization[]>([
    {
      "id": 1,
      "name": "Debate Corporation",
      "avatar": "https://example.com/images/acme-avatar.png",
      "description": "An innovative tech company focused on building",
      "ownerId": 123,
      "createdAt": "2024-02-27T15:00:00Z",
      "updatedAt": "2024-02-27T15:00:00Z",
      "status": "active",
      "teamIds": [10, 11, 12],
      "memberIds": [123, 124, 125, 126],
      teams: []
    },
    {
      "id": 2,
      "name": "Outdoors Club",
      "avatar": "https://example.com/images/acme-avatar.png",
      "description": "An innovative tech company focused on building",
      "ownerId": 123,
      "createdAt": "2024-02-27T15:00:00Z",
      "updatedAt": "2024-02-27T15:00:00Z",
      "status": "active",
      "teamIds": [10, 11, 12],
      "memberIds": [123, 124, 125, 126],
      teams: []
    },
    {
      "id": 3,
      "name": "Robotics Corporation",
      "avatar": "https://example.com/images/acme-avatar.png",
      "description": "An innovative tech company focused on building",
      "ownerId": 123,
      "createdAt": "2024-02-27T15:00:00Z",
      "updatedAt": "2024-02-27T15:00:00Z",
      "status": "active",
      "teamIds": [10, 11, 12],
      "memberIds": [123, 124, 125, 126],
      teams: []
    },
    {
      "id": 4,
      "name": "James Club",
      "avatar": "https://example.com/images/acme-avatar.png",
      "description": "An innovative tech company focused on building",
      "ownerId": 123,
      "createdAt": "2024-02-27T15:00:00Z",
      "updatedAt": "2024-02-27T15:00:00Z",
      "status": "active",
      "teamIds": [10, 11, 12],
      "memberIds": [123, 124, 125, 126],
      teams: []
    }
  ])
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ height: '100%', width: '250px', minWidth: '250px', overflow: 'auto', padding: 2, pt: 4 }}>
      {
        currentType == 'Organztion' ?
          <Box>
            <Button variant="text" security="underLine" sx={{ fontWeight: 'bold', fontSize: '14px', margin: '0 0 10px 8px', textTransform: 'none', color: '#5542F6' }} onClick={handleOpen}>Create Organization</Button>
            <List component="nav" aria-label="main mailbox folders">
              {
                orList.map((item, index) => {
                  return (
                    <ListItemButton
                      key={index}
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemIcon sx={{minWidth: '34px'}}>
                        <Avatar {...stringAvatar(item.name, 'small')} variant='square' />
                      </ListItemIcon>
                      <ListItemText primary={<span style={{ fontSize: '14px', color: '#2E2C34', fontWeight: '600' }}>{item.name}</span>} />
                    </ListItemButton>
                  )
                })
              }
            </List>
            <CustomModal open={open} handleClose={handleClose} title='Create a Organization'>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 8, mt: 4 }}>
                <InputFileUpload />
                <Box component="form">
                  <TextField
                    required
                    id="outlined-required"
                    label="Organziation Name"
                    placeholder="Please enter the organization name"
                    fullWidth
                    sx={{ mb: 4 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    placeholder="Please enter the description"
                    fullWidth
                  />
                </Box>
              </Box>
              <Button variant="contained" fullWidth onClick={handleClose}>Create</Button>
            </CustomModal>
          </Box> : <TeamPaner id={'111'} path={path} />
      }
    </Box>
  )
})

LeftBar.displayName = "LeftBar"

export default LeftBar;