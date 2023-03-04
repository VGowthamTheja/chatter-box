import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { styled, useTheme } from "@mui/material/styles";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Message from "./Message";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "12px 0px",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant={"subtitle2"}>
                {faker.name.fullName()}
              </Typography>
              <Typography
                variant={"caption"}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                online
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} spacing={3}>
            <IconButton>
              <VideoCamera size={24} />
            </IconButton>
            <IconButton>
              <Phone size={24} />
            </IconButton>
            <IconButton>
              <MagnifyingGlass size={24} />
            </IconButton>
            <Divider
              orientation={"vertical"}
              flexItem
              sx={{ borderRightWidth: 3, color: "#777" }}
            />
            <IconButton>
              <CaretDown size={24} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* chat body */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          maxHeight: "100vh",
          overflow: "auto",
          "::-webkit-scrollbar": { width: 10, marginLeft: 10 },
          "::-webkit-scrollbar-track": {
            visibility: "hidden",
            background: (theme) =>
              theme.palette.mode === "dark" ? "#1e1e1e" : "#f1f1f1",
          },
          "::-webkit-scrollbar-thumb": {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#555" : "#888",
            borderRadius: 10,
            visibility: "hidden",
          },
          "::-webkit-scrollbar-thumb:hover": { background: "#555" },
          "&:hover": {
            "::-webkit-scrollbar-thumb": {
              visibility: "visible",
            },
            "::-webkit-scrollbar-track": {
              visibility: "visible",
            },
          },
        }}
      >
        <Message />
      </Box>
      {/* chat footer */}
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Write a message..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple size={24} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley size={24} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <IconButton>
                <PaperPlaneTilt size={24} color={"white"} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
