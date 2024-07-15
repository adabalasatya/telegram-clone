import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #77d1ed;
  color: Balck;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 40px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Telegram Web</Logo>
      <Menu>
        <MenuItem>Contacts</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
