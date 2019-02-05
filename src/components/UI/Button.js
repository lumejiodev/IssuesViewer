import { h } from 'preact';
import styled, { css } from 'styled-components';

const Button = ({ text, ...rest }) => (
	<ButtonWrapper {...rest}>{text}</ButtonWrapper>
);

export const AnchorButton = ({ text, ...rest }) => (
	<AnchorButtonWrapper {...rest}>{text}</AnchorButtonWrapper>
);

export default Button;

const buttonStyles = css`
	font-size: 16px;
	padding: 0.5em 1em;
	margin-right: 1em;
	border: none;
	border-radius: 2px;
	background: #3273dc;
	color: white;
	cursor: pointer;
	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
	transition: 0.4s;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
	}
`;

const ButtonWrapper = styled.button`
	${buttonStyles}
`;

const AnchorButtonWrapper = styled.a`
	${buttonStyles}
	display: inline-block;
	text-decoration: inherit;
	background: #00d1b2;
`;
