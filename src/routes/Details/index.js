import { h } from 'preact';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Markdown from 'preact-markdown';

import PageWrapper from '../../components/UI/PageWrapper';

const TEST_QUERY = gql`
	query Issue($number: Int!) {
		repository(owner: "facebook", name: "react") {
			issue(number: $number) {
				title
				body
				comments(last: 20) {
					edges {
						node {
							author {
								login
							}
							body
						}
					}
				}
			}
		}
	}
`;

const Details = ({ matches: { id } }) => (
	<PageWrapper>
		<p>ID: {id}</p>
		<Query query={TEST_QUERY} variables={{ number: Number(id) }}>
			{({ loading, error, data }) => {
				if (loading) return <div>Loading...</div>;
				if (error) return <div>Error :(</div>;
				const {
					repository: { issue }
				} = data;
				return (
					<div>
						<h3>{issue.title}</h3>
						<p>
							<Markdown markdown={issue.body} />
						</p>
						<ul>
							{issue.comments.edges.map(({ node }) => (
								<li>
									<Markdown markdown={node.body} />
								</li>
							))}
						</ul>
					</div>
				);
			}}
		</Query>
	</PageWrapper>
);

export default Details;
