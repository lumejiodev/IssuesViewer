import { h } from 'preact';
import styled from 'styled-components';

const Checkbox = ({ label, ...rest }) => (
	<Label>
		<Input type="checkbox" {...rest} />
		<LabelText>{label}</LabelText>
	</Label>
);

export default Checkbox;

const Input = styled.input`
	width: 18px;
	height: 18px;
	transition: opacity 0.4s;
	vertical-align: middle;

	:disabled,
	:disabled + span {
		opacity: 0.4;
	}
`;

const Label = styled.label`
	margin-left: 1em;
	vertical-align: middle;

	@media (max-width: 570px) {
		margin-left: 0;
		margin-right: 1em;
	}
`;

const LabelText = styled.span`
	vertical-align: middle;
	transition: opacity 0.4s;
`;
