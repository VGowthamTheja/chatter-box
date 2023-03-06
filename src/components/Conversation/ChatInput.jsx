import React from 'react';
import { styled } from '@mui/material/styles';
import { Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material';
import { LinkSimple, Smiley, User, File, Camera, Image, Sticker } from 'phosphor-react';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: '12px 0px'
  }
}));

const Actions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo/Video'
  },
  {
    color: '#1b8cfe',
    icon: <Sticker size={24} />,
    y: 172,
    title: 'Stickers'
  },
  {
    color: '#1072e4',
    icon: <Camera size={24} />,
    y: 242,
    title: 'Image'
  },
  {
    color: '#0159b2',
    icon: <File size={24} />,
    y: 312,
    title: 'Document'
  },
  {
    color: '#013f7f',
    icon: <User size={24} />,
    y: 382,
    title: 'Contact'
  }
];

const ChatInput = ({ setOpenPicker }) => {
  const [openAction, setOpenAction] = React.useState(false);
  const handleOpenActions = () => {
    setOpenAction((prev) => !prev);
  };
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            <Stack
              sx={{
                position: 'relative',
                display: openAction ? 'inline-block' : 'none'
              }}>
              {Actions.map((action, index) => (
                <Tooltip key={index} title={action.title} placement="right">
                  <Fab
                    sx={{
                      position: 'absolute',
                      top: -action.y,
                      backgroundColor: action.color
                    }}>
                    {action.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={handleOpenActions}>
                <LinkSimple size={24} />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
              <Smiley size={24} />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default ChatInput;
