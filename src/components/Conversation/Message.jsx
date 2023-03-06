import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((msg, index) => {
          switch (msg.type) {
            case 'divider':
              return <Timeline key={index} el={msg} />;
            case 'msg':
              switch (msg.subtype) {
                case 'img':
                  // img msg
                  return <MediaMsg key={index} el={msg} />;
                case 'doc':
                  // text msg
                  return <DocMsg key={index} el={msg} />;
                case 'link':
                  // text msg
                  return <LinkMsg key={index} el={msg} />;
                case 'reply':
                  // text msg
                  return <ReplyMsg key={index} el={msg} />;
                default:
                  // text msg
                  return <TextMsg key={index} el={msg} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
