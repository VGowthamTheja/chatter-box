import { Box, Stack } from '@mui/material';
import React from 'react';
import Conversation from '../../components/Conversation';
import Chats from './Chats';
import { useTheme } from '@mui/material/styles';

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          minWidth: `calc(100vw - ${theme.spacing(50)})`,
          minHeight: '100%',
          backgroundColor:
            theme.palette.mode === 'light' ? '#e1eaf0' : theme.palette.background.default
        }}>
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
