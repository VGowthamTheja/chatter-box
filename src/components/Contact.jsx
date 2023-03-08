import { faker } from '@faker-js/faker';
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/app';
import AntSwitch from './AntSwitch';

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ minWidth: 320, height: '100vh' }}>
      <Stack direction={'column'} sx={{ height: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper
          }}>
          <Stack
            direction={'row'}
            sx={{ height: '100%', p: 2 }}
            alignItems="center"
            justifyContent={'space-between'}
            spacing={3}>
            <Typography variant="subtitle2">Contact info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}>
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{ height: '100%', position: 'relative', flexGrow: 1, overflow: 'auto' }}
          p={3}
          spacing={3}>
          <Stack alignItems={'center'} direction="row" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                +91 729 2829 2992
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems="center" justifyContent={'space-evenly'}>
            <Stack alignItems={'center'} spacing={1}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack alignItems={'center'} spacing={1}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article" sx={{ textTransform: 'uppercase' }}>
              About
            </Typography>
            <Typography variant="body2">Hey there!! Living the life I guess!</Typography>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
            <Typography variant="subtitle" sx={{ textTransform: 'uppercase' }}>
              Media, Links & Docs
            </Typography>
            <Button endIcon={<CaretRight />}>401</Button>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems="center">
            {[1, 2, 3].map((item, index) => (
              <Box key={index}>
                <img src={faker.image.food()} alt={faker.name.firstName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
                starred messages
              </Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
                mute notifications
              </Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" fontWeight={600}>
                coding monk
              </Typography>
              <Typography variant="caption" fontWeight={600}>
                Owl, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems="center" spacing={2} justifyContent={'space-between'}>
            <Button fullWidth variant="outlined" startIcon={<Prohibit />}>
              Block
            </Button>
            <Button fullWidth variant="outlined" startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
