import { h } from 'preact';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PageWrapper from '../../components/UI/PageWrapper';
import IssuesList from '../../components/IssuesList';

const ISSUES_QUERY = gql`
	query {
		repository(owner: "facebook", name: "react") {
			issues(last: 20) {
				edges {
					node {
						title
						number
						createdAt
						author {
							login
						}
						comments {
							totalCount
						}
						labels(last: 20) {
							nodes {
								color
								name
							}
						}
						closed
					}
				}
			}
		}
	}
`;

const Home = () => (
	<PageWrapper>
		<h1>Home</h1>
		<Query query={ISSUES_QUERY}>
			{({ loading, error, data }) => {
				if (loading) return <div>Loading...</div>;
				if (error) return <div>Error :(</div>;
				return <IssuesList issues={data.repository.issues.edges} />;
			}}
		</Query>
	</PageWrapper>
);

export default Home;
