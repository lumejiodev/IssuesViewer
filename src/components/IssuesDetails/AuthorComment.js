import { h } from 'preact';
import Comment from '../UI/Comment';

const AuthorComment = ({ body, author, createdAt }) => {
	const item = { body, author, createdAt };
	return <Comment item={item} />;
};

export default AuthorComment;
