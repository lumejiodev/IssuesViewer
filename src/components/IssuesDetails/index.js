import { h } from 'preact';

import Label from '../UI/Label';
import OwnerComment from './IssuesOwnerComment';
import Comment from './IssuesComment';

const Details = ({ number, issue }) => {
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
			{labels.nodes.length > 0 &&
				labels.nodes.map(({ color, name }, index) => (
					<Label color={color} name={name} />
				))}
			<OwnerComment createdAt={createdAt} body={body} author={author} />
			{comments.edges.map(({ node }) => (
				<Comment item={node} />
			))}
		</div>
	);
};

export default Details;
