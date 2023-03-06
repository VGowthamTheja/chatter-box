import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  ArrowUUpLeft,
  ArrowUUpRight,
  DotsThreeVertical,
  DownloadSimple,
  Image
} from 'phosphor-react';
import { Message_options } from '../../data';

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}>
      <Divider sx={{ width: '46%' }} />
      <Typography variant={'caption'} color={theme.palette.text}>
        {el.text}
      </Typography>
      <Divider sx={{ width: '46%' }} />
    </Stack>
  );
};

const TextMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content'
        }}>
        <Typography variant={'body2'} color={el.incoming ? theme.palette.text : '#fff'}>
          {el.message}
        </Typography>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content'
        }}>
        <Stack spacing={1}>
          <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: 10 }} />
          <Typography variant="body2" color={el.incoming ? theme.palette.text : '#fff'}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content'
        }}>
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: 1
            }}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ width: '100%' }} variant="caption">
                {el.incoming ? <ArrowUUpRight size={12} /> : <ArrowUUpLeft size={12} />}
                reply
              </Typography>
              <Divider orientation="horizontal" flexItem />
            </Box>
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text : '#fff'}>
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const LinkMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content'
        }}>
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1
            }}>
            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: 10 }} />
            <Stack
              spacing={2}
              sx={{
                backgroundColor: theme.palette.background.default,
                height: '100%',
                borderRadius: 1,
                p: 2,
                width: '100%'
              }}
              alignItems="center">
              <Typography variant="subtitle2" color={theme.palette.text}>
                creating chat app
              </Typography>
              <Typography
                variant="subtitle2"
                color={theme.palette.text}
                sx={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: theme.palette.primary.main
                }}
                component={Link}
                href="https://www.youtube.com">
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              sx={{ marginTop: '10px !important', width: '100%' }}
              variant="body2"
              color={el.incoming ? theme.palette.text : '#fff'}>
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const DocMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content'
        }}>
        <Stack spacing={2} sx={{ backgroundColor: theme.palette.background.paper }}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: 1
            }}>
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple size={24} />
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : '#fff' }}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        size={20}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <Stack spacing={1} px={1}>
          {Message_options.map((option, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {option.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
