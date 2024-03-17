import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/common';

const columns: GridColDef[] = [
  {
    field: 'name', headerName: 'NAME', flex: 1, sortable: false,
    renderCell: (params) => {
      return <Stack direction={'row'} sx={{alignItems: 'center'}}>
        <Avatar {...stringAvatar(params.value, 'middle')} />
        <Stack sx={{ ml: 2 }}>
          <Typography security="h2">{params.value}</Typography>
          <Typography security="desc">{params.id}</Typography>
        </Stack>
      </Stack>
    }
  },
  { field: 'email', headerName: 'EMAIL', flex: 1, sortable: false, },
  { field: 'role', headerName: 'ROLE', flex: 1, sortable: false, },
  { field: 'job', headerName: 'JOB', flex: 1, sortable: false, },

  {
    field: 'time',
    headerName: 'TIME',
    sortable: false,
    flex: 1,
  },
  {
    field: 'option',
    headerName: '',
    width: 80,
    renderCell: (params) => {
      console.log(params)
      return <IconButton>
        <MoreHoriz />
      </IconButton>
    }
  },
];

const rows = [
  { id: 10, name: 'JONE', time: 1, email: 'Snow', role: 'Jon', job: 35 },
  { id: 41, name: 'DAN JA', time: 1, email: 'Lannister', role: 'Cersei', job: 42 },
  { id: 15, name: 'JAMES MAK', time: 1, email: 'Lannister', role: 'Jaime', job: 45 },
  { id: 16, name: 'JORDAN HAH', time: 1, email: 'Stark', role: 'Arya', job: 16 },
  { id: 31, name: 'KOBI BYANETN', time: 1, email: 'Targaryen', role: 'Daenerys', job: 'DESIGN' },
  { id: 144, name: 'MAN BA', time: 1, email: 'Melisandre', role: 'jone', job: 150 },
  { id: 21, name: 'KA TE', time: 1, email: 'Clifford', role: 'Ferrara', job: 44 },
  { id: 12, name: 'BAO LUO', time: 1, email: 'Frances', role: 'Rossini', job: 36 },
  { id: 1111, name: 'HAR DEN', time: 1, email: 'Roxie', role: 'Harvey', job: 65 },
  { id: 544, name: 'WEIS TEBO BOOK', time: 1, email: 'Roxie', role: 'Harvey', job: 65 },
];

export default function DataTable() {
  return (
    <div style={{ width: '100%', background: '#fff' }}>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}