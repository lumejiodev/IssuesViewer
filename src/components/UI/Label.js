import { h } from 'preact';

const Label = ({ color, name }) => (
	<p style={{ color: `#${color}` }}>
		Label: {name}
	</p>
);

export default Label;
