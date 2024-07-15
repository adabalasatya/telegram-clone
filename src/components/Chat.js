import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageSender = styled.div`
  font-weight: bold;
`;

const MessageContent = styled.div`
  margin-top: 5px;
`;

const MessageTime = styled.div`
  color: #999;
  font-size: 12px;
  margin-top: 5px;
`;

const SendMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const SendMessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendMessageButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Chat = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((message, index) => (
          <MessageBubble key={index}>
            <MessageSender>{message.sender}</MessageSender>
            <MessageContent>{message.content}</MessageContent>
            <MessageTime>{message.time}</MessageTime>
          </MessageBubble>
        ))}
      </MessageContainer>
      <SendMessageContainer>
        <SendMessageInput
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleMessageChange}
        />
        <SendMessageButton onClick={handleSendMessage}>Send</SendMessageButton>
      </SendMessageContainer>
    </ChatContainer>
  );
};

export default Chat;
