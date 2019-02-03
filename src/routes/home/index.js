import { h } from 'preact';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const TEST_QUERY = gql`
	query {
		repository(owner: "facebook", name: "react") {
			issues(last: 20, states: CLOSED) {
				edges {
					node {
						title
						createdAt
						number
						state
						url
					}
				}
			}
		}
	}
`;

import PageWrapper from '../../components/UI/PageWrapper';

const Home = () => (
	<PageWrapper>
		<h1>Home</h1>
		<Query query={TEST_QUERY}>
			{({ loading, error, data }) => {
				if (loading) return <div>Loading...</div>;
				if (error) return <div>Error :(</div>;
				return (
					<ul>
						{data.repository.issues.edges.map(item => (
							<li>{item.node.title}</li>
						))}
					</ul>
				);
			}}
		</Query>
	</PageWrapper>
);

export default Home;
