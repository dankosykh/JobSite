import React from 'react';
import styled from 'styled-components';
import schema from './constants.jsx';

const NavBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: left;
  width: 100vw;
  height: 6vh;
  background: #fff;
  margin: -8px 0 0 0;
  border-bottom: 1px solid #e0e0e0;
  color: ${schema.tertiary};
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    justify-content: left;
  }
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0 1vw 0 5vw;
  font-size: 2.5rem;
  color: ${schema.primary};
  @media (min-width: 768px) {
    padding: 0 1vw 0 5vw;
    font-size: 3rem;
  }
`;

const Slogan = styled.p`
  display: none;
  @media (min-width: 900px) {
    display: inline;
    font-size: 1rem;
    margin: 0 0 7px 0;
    font-style: italic;
  }
`;

const NavBar = () => (
  <NavBarWrapper>
    <Logo>{schema.title}</Logo>
    <Slogan>{schema.slogan}</Slogan>
  </NavBarWrapper>
);

export default NavBar;
