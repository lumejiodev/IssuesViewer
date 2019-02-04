import { h } from 'preact';

import Label from '../UI/Label';
import Comments from './IssuesComments';
import OwnerComment from './IssuesOwnerComment';

const Details = props => {
	const { number, issue } = props;
	const { title, body, createdAt, closed, author, labels, comments } = issue;
	return (
		<div>
			<a href="/">Back to list</a>
			{closed && <p>CLOSED</p>}
			<h3>
				#{number}:{title}
			</h3>
			<p>Created: {createdAt}</p>
			<p>Author: {author.login}</p>
			{labels.nodes.map(({ color, name }) => (
				<Label color={color} name={name} />
			))}
			<OwnerComment createdAt={createdAt} body={body} author={author} />
			<Comments comments={comments} {...props} />
		</div>
	);
};

export default Details;
