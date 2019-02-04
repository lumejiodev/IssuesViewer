import { h } from 'preact';
import styled from 'styled-components';
import Markdown from 'preact-markdown';

const Comment = ({ item }) => {
	const { body, author, createdAt } = item;
	return (
		<CommentWrapper>
			<p>Author: {author.login}</p>
			<p>Created at: {createdAt}</p>
			<Markdown markdown={body} />
		</CommentWrapper>
	);
};

export default Comment;

const CommentWrapper = styled.div`
	padding: 1em;
	border: 1px solid #ccc;
	margin-bottom: 1em;
`;
