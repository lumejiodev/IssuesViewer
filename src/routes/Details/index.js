import { h } from 'preact';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PageWrapper from '../../components/UI/PageWrapper';
import IssueDetails from '../../components/IssuesDetails';

const ISSUE_QUERY = gql`
	query Issue($number: Int!) {
		repository(owner: "facebook", name: "react") {
			issue(number: $number) {
				title
				body
				createdAt
				closed
				author {
					login
				}
				labels(last: 20) {
					nodes {
						color
						name
					}
				}
				comments(last: 20) {
					totalCount
					edges {
						node {
							author {
								login
							}
							body
							createdAt
						}
					}
				}
			}
		}
	}
`;

const Details = ({ matches: { id } }) => (
	<PageWrapper>
		<Query query={ISSUE_QUERY} variables={{ number: Number(id) }}>
			{({ loading, error, data }) => {
				if (loading) return <div>Loading...</div>;
				if (error) return <div>Error :(</div>;
				return <IssueDetails number={id} issue={data.repository.issue} />;
			}}
		</Query>
	</PageWrapper>
);

export default Details;
