import { h } from 'preact';
import styled from 'styled-components';

const Button = ({ text, ...rest }) => (
	<ButtonWrapper {...rest}>{text}</ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.button`
  font-size: 16px;
  padding: .5em 1em;
	margin-right: 1em;
	border: none;
  border-radius: 2px;
  background: #00d1b2;
  color: white;
  cursor: pointer;
  box-shadow: 1px 2px 5px rgba(0,0,0,0.1);
  transition: .4s;
  
  &:hover {
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
  }
`;
