import { h } from 'preact';
import styled from 'styled-components';

const Header = ({ title }) => (
	<AppHeaderWrapper>
		<AppHeader>{title}</AppHeader>
	</AppHeaderWrapper>
);

export default Header;

const AppHeaderWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 56px;
	padding: 0;
	background: #00d1b2;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	z-index: 50;
`;

const AppHeader = styled.h1`
  width: 94%;
  max-width: 920px;
	margin: 0 auto;
	padding: 0 15px;
	font-size: 24px;
	line-height: 56px;
	font-weight: 400;
	color: #fff;
`;
