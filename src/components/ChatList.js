import React from 'react';
import styled from 'styled-components';

const ChatListContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
`;

const ChatItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <ChatListContainer>
      {chats.map((chat, index) => (
        <ChatItem key={index} onClick={() => onSelectChat(chat)}>
          {chat}
        </ChatItem>
      ))}
    </ChatListContainer>
  );
};

export default ChatList;
