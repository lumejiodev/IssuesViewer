import { h } from 'preact';
import styled from 'styled-components';
import { Circle, XCircle, MessageCircle } from 'preact-feather';
import moment from 'moment';
import Label from '../UI/Label';

const ListItem = ({ item }) => {
	const { author, closed, comments, createdAt, labels, number, title } = item;
	return (
		<ItemWrapper data-qa-issues-list-item>
			<TopBar>
				<div>
					{closed ? <XCircle /> : <Circle />}
					<span>#{number}</span>
				</div>
				{comments.totalCount > 0 && (
					<div>
						<MessageCircle />
						<span>{comments.totalCount}</span>
					</div>
				)}
			</TopBar>
			<Header>
				<a href={`/${number}`}>{title}</a>
			</Header>
			<BottomBar>
				Created {moment(createdAt).format('DD.MM.YYYY')} by {author.login}
			</BottomBar>
			<LabelsBar>
				{labels.nodes.map(({ color, name }) => (
					<Label color={color} name={name} />
				))}
			</LabelsBar>
		</ItemWrapper>
	);
};

export default ListItem;

const ItemWrapper = styled.div`
	padding: 1em;
	border: 1px solid #ccc;
	border-radius: 2px;
	margin: 1em 0 1.5em;
	background: white;
	box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
	transition: 0.4s;

	&:hover {
		box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
	}
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

const Header = styled.h4`
	margin: 10px 0;
`;

const BottomBar = styled.div`
	margin: 1em 0 6px;
`;

const LabelsBar = styled.div`
	:not(:empty) {
		margin-top: 14px;
	}
`;
