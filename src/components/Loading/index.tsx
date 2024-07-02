import { Box, CircularProgress } from "@mui/material";


export default function Loading() {

  return <Box sx={{ position: 'fixed', zIndex: 10000, width: '100%', height: '100%', left: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress color="primary" />
  </Box>
}