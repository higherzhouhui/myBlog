import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/common';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 'yoghurt@gmail.com', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 'cream@gmail.com', 9.0, 37, 4.3),
  createData('Eclair', 'yoghurt@163.com', 16.0, 24, 6.0),
  createData('Cupcake', 'yoghurt@outlokk.com', 3.7, 67, 4.3),
  createData('Gingerbread', 'yoghurt@soft.com', 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: '#84818A', fontWeight: '600'}}>NAME</TableCell>
            <TableCell sx={{color: '#84818A', fontWeight: '600'}}>TEAM EMAIL</TableCell>
            <TableCell sx={{color: '#84818A', fontWeight: '600'}}>CREATE TIME</TableCell>
            <TableCell sx={{color: '#84818A', fontWeight: '600'}}>SCALE</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction={'row'}>
                <Avatar {...stringAvatar(row.name)} variant='square' />
                  <Stack sx={{ml: 2}}>
                    <Typography security="h2">{row.name}</Typography>
                    <Typography security="desc">{row.name}</Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography security="h2">{row.calories}</Typography>
                </TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell sx={{width: '80px'}}>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}