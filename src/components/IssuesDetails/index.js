import { h } from 'preact';
import styled from 'styled-components';
import moment from 'moment';
import { Circle, XCircle, Hash, Calendar, User } from 'preact-feather';

import Label from '../UI/Label';
import CommentsList from './CommentsList';
import AuthorComment from './AuthorComment';

const Details = props => {
	const { number, issue } = props;
	const { title, body, createdAt, closed, author, labels, comments } = issue;
	return (
		<Wrapper data-qa-issues-list-details>
			<h3>{title}</h3>
			<TopBar>
				<div>
					<Hash />
					<span>{number}</span>
				</div>
				<div>
					{closed ? <XCircle /> : <Circle />}
					<span>{closed ? 'Closed' : 'Opened'}</span>
				</div>
				<div>
					<User />
					<span>{author.login}</span>
				</div>
				<div>
					<Calendar />
					<span>{moment(createdAt).format('DD.MM.YYYY')}</span>
				</div>
			</TopBar>
			<LabelsBar>
				{labels.nodes.map(({ color, name }) => (
					<Label color={color} name={name} />
				))}
			</LabelsBar>
			<AuthorComment createdAt={createdAt} body={body} author={author} />
			<CommentsList comments={comments} {...props} />
		</Wrapper>
	);
};

export default Details;

const Wrapper = styled.div`
	margin-top: 22px;
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

const LabelsBar = styled.div`
	:not(:empty) {
		margin-top: 1em;
	}
`;
