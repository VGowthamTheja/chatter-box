import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((msg) => {
          switch (msg.type) {
            case "divider":
              return <Timeline el={msg} />;
            case "msg":
              switch (msg.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={msg} />;
                case "doc":
                  // text msg
                  return <DocMsg el={msg} />;
                case "link":
                  // text msg
                  return <LinkMsg el={msg} />;
                case "reply":
                  // text msg
                  return <ReplyMsg el={msg} />;
                default:
                  // text msg
                  return <TextMsg el={msg} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
