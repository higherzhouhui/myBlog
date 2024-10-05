import { Box, CircularProgress } from "@mui/material";


export default function Loading() {

  return <Box sx={{ position: 'fixed', zIndex: 92, width: '100%', height: '100%', left: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="loading" style={{ color: '#1976d2' }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Box>
}