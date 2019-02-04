import { h } from 'preact';
import Label from '../UI/Label';

const ListItem = ({ item }) => {
	const { author, closed, comments, createdAt, labels, number, title } = item;
	return (
		<div>
			{closed && <p>CLOSED</p>}
			<p>
				#{number}: {title}
			</p>
			<p>Author: {author.login}</p>
			<p>Created: {createdAt}</p>
			<p>Comments: {comments.totalCount}</p>
			{labels.nodes.map(({ color, name }) => (
				<Label color={color} name={name} />
			))}
			<a href={`/${number}`}>Details</a>
		</div>
	);
};

export default ListItem;
