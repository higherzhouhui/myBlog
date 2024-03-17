import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: 1
};


export const CustomModal: React.FC<any> = React.memo((props: any) => {
  const { open, handleClose, title, width } = props
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, width: width || 500}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
            <Typography id="modal-modal-title" sx={{fontWeight: 'bold', fontSize: '22px'}}>
              {title || 'Create a organiztion'}
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          {props.children}
        </Box>
      </Modal>
    </div>
  );
})

CustomModal.displayName = 'CustomModal'

export default CustomModal