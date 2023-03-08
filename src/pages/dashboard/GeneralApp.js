import { Box, Stack } from '@mui/material';
import React from 'react';
import Conversation from '../../components/Conversation';
import Chats from './Chats';
import { useTheme } from '@mui/material/styles';
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  const app = useSelector((store) => store.app);
  const { sidebar } = app;
  return (
    <Stack direction={'row'} sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          minWidth: `calc(100vw - ${theme.spacing(sidebar.open ? 90 : 50)})`,
          minHeight: '100%',
          backgroundColor:
            theme.palette.mode === 'light' ? '#e1eaf0' : theme.palette.background.default
        }}>
        <Conversation />
      </Box>
      {/* contact */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
