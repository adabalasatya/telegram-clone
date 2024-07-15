import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from '../components/SideBar';
import Chat from '../components/Chat';
import Header from '../components/Header';

import avatarAlice from '../assets/alice.png';
import avatarBen from '../assets/ben.png';
import avatarClara from '../assets/clara.png';
import avatarDavid from '../assets/david.png';
import avatarEva from '../assets/eva.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
`;

const ContentContainer = styled.div`
  flex: 3;
  display: flex;
`;

const Home = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({});
  const [selectedChatId, setSelectedChatId] = useState(null);

  const defaultChats = [
    { id: 1, name: 'Alice', lastMessage: 'Message 1', time: '16:15', avatar: avatarAlice },
    { id: 2, name: 'Ben', lastMessage: 'Message 1', time: '15:29', avatar: avatarBen },
    { id: 3, name: 'Clara', lastMessage: 'Message 1', time: '14:31', avatar: avatarClara },
    { id: 4, name: 'David', lastMessage: 'Message 1', time: '10:44', avatar: avatarDavid },
    { id: 5, name: 'Eva', lastMessage: 'Message 1', time: '09:59', avatar: avatarEva },
  ];

  
  const defaultMessages = {
    1: [
      { id: 1, sender: 'Alice', content: 'Hello!', time: '16:15' },
      { id: 2, sender: 'Me', content: 'Hi Alice!', time: '16:16' },
      { id: 3, sender: 'Alice', content: 'How are you?', time: '16:17' },
    ],
    2: [
      { id: 1, sender: 'Ben', content: 'Hey there!', time: '15:29' },
      { id: 2, sender: 'Me', content: 'Hi Ben!', time: '15:30' },
    ],
    3: [
      { id: 1, sender: 'Clara', content: 'Hi!', time: '14:31' },
    ],
    4: [
      { id: 1, sender: 'David', content: 'Hello!', time: '10:44' },
    ],
    5: [
      { id: 1, sender: 'Eva', content: 'Good morning!', time: '09:59' },
    ],
  };

  useEffect(() => {
    axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => {
        console.log('API response:', response.data);
        const chatData = response.data.chats || defaultChats;
        setChats(chatData);

        
        const initialMessages = chatData.reduce((acc, chat) => {
          acc[chat.id] = defaultMessages[chat.id] || [];
          return acc;
        }, {});
        setMessages(initialMessages);

       
        if (chatData.length > 0) {
          setSelectedChatId(chatData[0].id);
        }
      })
      .catch(error => {
        console.error('Error fetching chats:', error);
        setChats(defaultChats);

        
        const initialMessages = defaultChats.reduce((acc, chat) => {
          acc[chat.id] = defaultMessages[chat.id] || [];
          return acc;
        }, {});
        setMessages(initialMessages);

       
        setSelectedChatId(defaultChats[0].id);
      });
  }, []);

  const handleSelectChat = (chat) => {
    console.log('Selected chat:', chat);
    setSelectedChatId(chat.id);
  };

  const handleSendMessage = (newMessage) => {
    if (!selectedChatId) return;

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChatId]: [
        ...prevMessages[selectedChatId],
        { id: prevMessages[selectedChatId].length + 1, sender: 'Me', content: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ],
    }));
  };

  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        <Sidebar chats={chats} onSelectChat={handleSelectChat} />
        <ContentContainer>
          {selectedChatId && (
            <Chat messages={messages[selectedChatId]} onSendMessage={handleSendMessage} />
          )}
        </ContentContainer>
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
