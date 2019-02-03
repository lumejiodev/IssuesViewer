import { h } from 'preact';
import ListItem from './IssuesListItem';

const List = ({ issues }) => (
	<ul>
		{issues.map(({ node }) => (
			<li>
				<ListItem item={node} />
			</li>
		))}
	</ul>
);

export default List;
