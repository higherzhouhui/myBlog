"use client"
import { useState } from "react";
import { TeamComplete } from "@/interface/common";
import { stringAvatar } from "@/utils/common";
import {
  Box, Typography, Stack, Avatar, IconButton,
  Tooltip, Drawer, DrawerProps, List, ListItemButton,
  ListItemIcon, ListItemText, Button, ToggleButton,
  ToggleButtonGroup, Paper, TextField, FormControl, InputLabel, MenuItem, Select
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
import DataTable from "./CrmTable";

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
      <Box sx={{ pt: 3, pl: 3, pb: 3, pr: 3, bgcolor: '#fff', ml: '2px' }}>
        <Typography security='h1'>
          CRM Panel
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
          <Stack direction={'row'}>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">Total users</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>10</Typography>
            </Stack>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">Adminstrators</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>2</Typography>
            </Stack>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">UE</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>1</Typography>
            </Stack>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">RD</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>7</Typography>
            </Stack>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">PM</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>1</Typography>
            </Stack>
            <Stack sx={{ textAlign: 'center', mr: 2, minWidth: '50px' }}>
              <Typography security="h2">QA</Typography>
              <Typography sx={{ color: '#5542F6', fontSize: '32px', fontWeight: 'bold' }}>1</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
              <Button startIcon={<AddIcon />} variant="contained" sx={{ textTransform: 'none', mr: 2 }}>Create</Button>
              <Button variant="outlined">
                <MoreHoriz />
              </Button>
            </Stack>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <FormControl sx={{ width: 100, mr: 2 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Role"
                  size="small"
                >
                  <MenuItem value={10}>UE</MenuItem>
                  <MenuItem value={20}>RD</MenuItem>
                  <MenuItem value={30}>PM</MenuItem>
                  <MenuItem value={30}>QA</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: 130, mr: 2 }}>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Position"
                  size="small"
                >
                  <MenuItem value={10}>AFEA</MenuItem>
                  <MenuItem value={20}>FEAWF</MenuItem>
                  <MenuItem value={30}>DGAGE</MenuItem>
                  <MenuItem value={30}>FEAFAEAE</MenuItem>
                </Select>
              </FormControl>
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

              </ToggleButtonGroup>
            </Box>
          </Stack>

        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <DataTable />
      </Box>
    </Box>
  );
}