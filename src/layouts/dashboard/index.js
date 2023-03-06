import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box'
  }
}));

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = React.useState(0);

  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        height: '100vh',
        width: 100,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Stack
        direction={'column'}
        alignItems={'center'}
        sx={{ width: '100%' }}
        spacing={3}
        height={'100%'}
        justifyContent={'space-between'}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.contrastText,
              height: 64,
              width: 64,
              borderRadius: 1.5,
              border: `1px solid ${theme.palette.primary.main}`
            }}
          >
            <img src={logo} alt="Logo" />
          </Box>
          <Stack sx={{ width: 'max-content' }} direction="column" alignItems={'center'} spacing={3}>
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5
                  }}
                  key={el.index}
                >
                  <IconButton key={el.index} sx={{ width: 'max-content', color: '#fff' }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(el.index)}
                  key={el.index}
                  sx={{
                    width: 'max-content',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ borderBottomWidth: 5, color: '#777' }}
            />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5
                }}
              >
                <IconButton
                  sx={{
                    width: 'max-content',
                    color: '#fff'
                  }}
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{
                  width: 'max-content',
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <AntSwitch defaultChecked onChange={onToggleMode} />
          <Avatar sx={{ width: 40, height: 40 }} src={faker.image.avatar()} />
        </Stack>
      </Stack>
      <Outlet />
    </Box>
  );
};

export default DashboardLayout;
