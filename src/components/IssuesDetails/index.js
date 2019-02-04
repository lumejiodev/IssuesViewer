import { h } from 'preact';

import Label from '../UI/Label';
import CommentsList from './CommentsList';
import AuthorComment from './AuthorComment';

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
			<AuthorComment createdAt={createdAt} body={body} author={author} />
			<CommentsList comments={comments} {...props} />
		</div>
	);
};

export default Details;
