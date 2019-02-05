import { h } from 'preact';
import styled from 'styled-components';

const TotalCount = ({ totalCount }) => (
	<CountLabel>
		Total count: <strong>{totalCount}</strong>
	</CountLabel>
);

export default TotalCount;

const CountLabel = styled.p`
	margin-bottom: 1em;
`;
