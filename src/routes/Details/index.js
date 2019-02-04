import { h } from 'preact';
import { Query } from 'react-apollo';
import { ISSUE_QUERY, ISSUE_COMMENTS_QUERY } from './queries';

import PageWrapper from '../../components/UI/PageWrapper';
import IssueDetails from '../../components/IssuesDetails';

const Details = ({ matches: { id } }) => (
	<PageWrapper>
		<Query query={ISSUE_QUERY} variables={{ number: Number(id) }}>
			{props => {
				const { loading, error, data } = props;
				if (loading) return <div>Loading...</div>;
				if (error) return <div>Error :(</div>;
				return (
					<IssueDetails
						number={id}
						issue={data.repository.issue}
						commentsQuery={ISSUE_COMMENTS_QUERY}
						{...props}
					/>
				);
			}}
		</Query>
	</PageWrapper>
);

export default Details;
