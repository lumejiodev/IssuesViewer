import { h } from 'preact';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ issues }) => (
	<ListUL>
		{issues.map(({ node }) => (
			<ListLI>
				<ListItem item={node} />
			</ListLI>
		))}
	</ListUL>
);

export default List;

const ListUL = styled.ul`
	padding: 0;
`;

const ListLI = styled.li`
	display: block;
`;
