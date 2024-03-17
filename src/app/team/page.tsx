
"use client"
import { useState } from "react";
import { TeamComplete } from "@/interface/organization";
import { stringAvatar } from "@/utils/common";
import {
  Box, Typography, Stack, Avatar, IconButton,
  Tooltip, Drawer, DrawerProps, List, ListItemButton,
  ListItemIcon, ListItemText, Button, ToggleButton,
  ToggleButtonGroup, Paper, TextField
} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import SubjectIcon from "@mui/icons-material/Subject";
import Close from "@mui/icons-material/Close";
import { styled } from '@mui/material/styles';
import { blue } from "@mui/material/colors";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import CustomModal from "@/components/CustomModal";

export default function Login() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [modalVisible, setModalVisible] = useState(false)
  const handleClose = (status?: boolean) => {
    setModalVisible(status || false)
  }
  const StyledDraw = styled((props: DrawerProps) => (
    <Drawer
      sx={{ width: '350px' }}
      variant="persistent"
      {...props} />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      border: 'none',
      top: '200px',
      height: 'calc(100vh - 200px)'
    },
  }));
  const [alignment, setAlignment] = useState<string | null>('normal');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
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
      }
    ]
  )
  const panels = [
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
    {
      name: 'About this board', list: [
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
        { title: 'this is a good story', members: ['lao wang', 'mak jone'], createAt: '2024-02-28T13:00:00Z' },
      ]
    },
  ]
  return (
    <Box>
      <Box sx={{ pt: 3, pl: 3, pb: 3, mb: 2, pr: 3, bgcolor: '#fff', ml: '2px' }}>
        <Typography security='h1'>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction={'row'}>
            <Typography component={'div'} security="desc" sx={{ fontSize: 14, mr: 1 }}>
              Team ID: 219300154584
            </Typography>
            <Typography sx={{ fontSize: 14, color: '#666' }}>
              A team dedicated to developing new and innova
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Stack direction="row" component={'div'} onClick={toggleDrawer(!open)}>
              {
                teamList[0].members.map((member, cindex) => {
                  return (
                    cindex > 4 ? null :
                      <Tooltip title={member.userId} key={cindex}>
                        <Box sx={{ marginRight: '-2px' }}>
                          <Avatar {...stringAvatar((member.userId).toString(), 'middle')} />
                        </Box>
                      </Tooltip>
                  )
                })
              }
            </Stack>
            <IconButton sx={{ ml: 2 }}>
              <AddCircle sx={{ width: '24px', height: '24px' }} color="disabled" />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Stack direction={'row'}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleClose(true)}>
              Create
            </Button>
          </Stack>
          <ToggleButtonGroup
            size="small"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="normal" aria-label="left aligned">
              <ViewWeekIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="centered">
              <ListIcon />
            </ToggleButton>
            <ToggleButton value="time" aria-label="right aligned">
              <SubjectIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', overflow: 'auto', pl: 3 }}>
        {
          panels.map((item, index) => {
            return <Box key={index} sx={{ mb: 2, background: '#F4F3F5', width: '260px', minWidth: '260px', height: 'auto', maxHeight: '800px', borderRadius: 1, mr: 4, overflow: 'auto' }}>
              <Typography security="subTitle" sx={{ pt: 2, pl: 2, pb: 2, pr: 1, position: 'sticky', zIndex: 1, top: 0, background: '#F4F3F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {item.name}
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Typography>
              {
                item.list.map((clist, cindex) => {
                  return (
                    <Paper key={cindex} sx={{ padding: 1, mb: 2, boxShadow: 3, ml: 1, mr: 1 }}>
                      <Typography component={'div'} security="h2">{clist.title}</Typography>
                      <Stack direction={'row'} sx={{ mt: 2, mb: 2 }}>
                        {
                          clist.members.map((cmember, mindex) => {
                            return <Tooltip title={cmember} key={mindex}>
                              <Box sx={{ marginRight: '4px' }}>
                                <Avatar {...stringAvatar((cmember).toString(), 'middle')} />
                              </Box>
                            </Tooltip>
                          })
                        }
                      </Stack>
                      <Typography security="desc" sx={{ fontSize: 13, mt: 2 }}>Creat Time:{clist.createAt}</Typography>
                    </Paper>
                  )
                })
              }
            </Box>
          })
        }
      </Box>
      <StyledDraw open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={{ width: '350px', bgcolor: '#fff', height: '100%', pl: 2, pb: 4, pr: 2, overflow: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 2, pt: 2 }}>
            <Typography security="subTitle">
              All Members
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <Close sx={{ width: '24px', height: '24px' }} />
            </IconButton>
          </Box>
          <List component="nav" aria-label="main mailbox folders" sx={{ overflow: 'auto' }}>
            {
              teamList[0].members.map((item, index) => {
                return (
                  <ListItemButton
                    key={index}
                  >
                    <ListItemIcon sx={{ minWidth: '38px' }}>
                      <Avatar {...stringAvatar(item.userId.toString(), 'middle')} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography component={'div'} sx={{ fontSize: '14px', fontWeight: 'bold', color: '#2E2C34' }}>
                      {item.userId}
                      <Typography color={blue['500']}>{item.role}</Typography>
                    </Typography>} />
                  </ListItemButton>
                )
              })
            }
          </List>
        </Box>
      </StyledDraw>
      <CustomModal open={modalVisible} handleClose={() => handleClose()} title="Create a panel">
        <Box component="form" sx={{mt: 4}}>
          <TextField
            required
            id="outlined-required"
            label="Panel Name"
            placeholder="Please enter the Panel name"
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
          <Button sx={{mt: 8}} variant="contained" fullWidth onClick={() => handleClose()}>Create</Button>
        </Box>
      </CustomModal>
    </Box>
  );
}