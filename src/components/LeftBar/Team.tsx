import * as React from 'react'
import { Box, FormControl, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { FC, memo, useState, useEffect } from "react"
import { TeamComplete } from '@/interface/organization';
import Dashboard from '@mui/icons-material/Dashboard';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import { useRouter } from 'next/navigation';

export const TeamPaner: FC<any> = memo((props) => {
  const { id, path } = props
  const router = useRouter()
  const menuList = [
    {
      icon: <Dashboard />, title: 'Dashboard', activeIcon: <Dashboard color='primary' />, path: '/team'
    },
    {
      icon: <SupervisedUserCircle />, title: 'CRM Panel', activeIcon: <SupervisedUserCircle color='primary' />, path: '/crm'
    },
  ]
  const [currentMenu, setCurrentMenu] = useState(0)
  const handleListItemClick = (index: number) => {
    setCurrentMenu(index)
    // 获取teamid
    if (index == currentMenu) {
      return
    }
    router.push(menuList[index].path)
  }
  useEffect(() => {
    if (path) {
      if (path.includes('crm')) {
        setCurrentMenu(1)
      } else {
        setCurrentMenu(0)
      }
    }
  }, [path])
  const [teamList, setTeamList] = useState<TeamComplete[]>(
    [
      {
        id: 15451436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        totalMember: 4,
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154514236151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 40,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154351436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 14,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154451436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 884,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 15445143556151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 884,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
    ]
  )
  const [teamName, setTeamName] = useState<any>(teamList[0].id);

  const handleChange = (event: SelectChangeEvent) => {
    setTeamName(event.target.value as string);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teamName}
          label="Team Name"
          onChange={handleChange}
        >
          {
            teamList.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>{item.name}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <Typography component="div" sx={{ mt: 3, mb: 1 }}>
        Team management
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {
          menuList.map((item, index) => {
            return (
              <ListItemButton
                key={index}
                selected={currentMenu === index}
                onClick={(event) => handleListItemClick(index)}
              >
                <ListItemIcon sx={{minWidth: '34px'}}>
                  {
                    currentMenu === index ? item.activeIcon : item.icon
                  }
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '14px', color: '#2E2C34', fontWeight: '600' }}>{item.title}</span>} />
              </ListItemButton>
            )
          })
        }
      </List>
    </Box>
  )
})

TeamPaner.displayName = 'TeamPaner'

export default TeamPaner
