import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  padding: 10px;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChatDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatName = styled.div`
  font-weight: bold;
`;

const LastMessage = styled.div`
  color: #999;
`;

const ChatTime = styled.div`
  color: #999;
  font-size: 12px;
`;

const Sidebar = ({ chats, onSelectChat }) => {
  return (
    <SidebarContainer>
      {chats.map(chat => (
        <ChatItem key={chat.id} onClick={() => onSelectChat(chat)}>
          <Avatar src={chat.avatar} alt={`${chat.name}'s avatar`} />
          <ChatDetails>
            <ChatName>{chat.name}</ChatName>
            <LastMessage>{chat.lastMessage}</LastMessage>
          </ChatDetails>
          <ChatTime>{chat.time}</ChatTime>
        </ChatItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
