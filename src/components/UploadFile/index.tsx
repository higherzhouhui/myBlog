import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, IconButton } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: '100%',
  opacity: 0,
});

export default function InputFileUpload() {
  return (
    <Box sx={{textAlign: 'center', marginRight: 2}}>
      <IconButton
        size='large'
        tabIndex={-1}
        sx={{ position: 'relative' }}
      >
        <CloudUploadIcon color="primary" fontSize='large' />
        <VisuallyHiddenInput type="file" />
      </IconButton>
      Avatar
    </Box>
  );
}
