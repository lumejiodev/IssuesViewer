import { h } from 'preact';
import styled from 'styled-components';
import Markdown from 'preact-markdown';
import { Calendar, User } from 'preact-feather';
import moment from 'moment';

const Comment = ({ item }) => {
	const { body, author, createdAt } = item;
	return (
		<CommentWrapper>
			<TopBar>
				<div>
					<User />
					<span>{author.login}</span>
				</div>
				<div>
					<Calendar />
					<span>{moment(createdAt).format('DD.MM.YYYY')}</span>
				</div>
			</TopBar>
			<Markdown markdown={body} />
		</CommentWrapper>
	);
};

export default Comment;

const CommentWrapper = styled.div`
	padding: 1.2em 1.5em .5em;
	border: 1px solid #ccc;
	border-radius: 2px;
	margin: 1.4em 0 1em;
	background: white;
`;

const TopBar = styled.div`
	display: flex;
	font-weight: bold;
	div {
		margin-right: 14px;
	}
	span {
		display: inline-block;
		vertical-align: top;
		margin: 2px 2px 2px 10px;
	}
`;
