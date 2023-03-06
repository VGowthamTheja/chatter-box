import { Box, Button, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { ChatList } from '../../data';
import ChatElement from './ChatElement';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

const Chats = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: '320px',
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed size={24} />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" size={24} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} color={'#8fb4ff'} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          direction={'column'}
          spacing={3}
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            height: '100%',
            '::-webkit-scrollbar': { width: 10, marginLeft: 10 },
            '::-webkit-scrollbar-track': {
              visibility: 'hidden',
              background: (theme) => (theme.palette.mode === 'dark' ? '#1e1e1e' : '#f1f1f1')
            },
            '::-webkit-scrollbar-thumb': {
              background: (theme) => (theme.palette.mode === 'dark' ? '#555' : '#888'),
              borderRadius: 10,
              visibility: 'hidden'
            },
            '::-webkit-scrollbar-thumb:hover': { background: '#555' },
            '&:hover': {
              '::-webkit-scrollbar-thumb': {
                visibility: 'visible'
              },
              '::-webkit-scrollbar-track': {
                visibility: 'visible'
              }
            }
          }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: '#676767', textTransform: 'uppercase' }}>
              pinned
            </Typography>
            {ChatList.filter((chat) => chat.pinned).map((chat) => (
              <ChatElement key={chat.id} {...chat} />
            ))}
          </Stack>
          <Divider />
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: '#676767', textTransform: 'uppercase' }}>
              all chats
            </Typography>
            {ChatList.filter((chat) => !chat.pinned).map((chat) => (
              <ChatElement key={chat.id} {...chat} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
