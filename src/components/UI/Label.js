import { h } from 'preact';
import styled from 'styled-components';

const Label = ({ color, name }) => (
	<LabelWrapper color={color}>{name}</LabelWrapper>
);

export default Label;

const LabelWrapper = styled.div`
	display: inline-block;
	font-size: 14px;
	padding: 4px 7px;
	margin: 0 10px 0 0;
	border-radius: 2px;
	background: ${({ color }) => '#' + color};
	color: white;
`;
