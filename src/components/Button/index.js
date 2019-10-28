import React from 'react';
import styled from 'styled-components';

const Button = ({ label, link }) => (
  <a to={link} style={{ 'padding-top': '20px' }}>
    <ButtonWrapper type="button">{label}</ButtonWrapper>
  </a>
);

export default Button;

const ButtonWrapper = styled.button`
  min-width: 180px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  color: rgb(255, 255, 255);
  border-radius: 3em;
  overflow: hidden;
  padding: 13px 20px;
  text-decoration: none;
  background: #ff4785;
`;
