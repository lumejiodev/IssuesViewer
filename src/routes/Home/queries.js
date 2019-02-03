import { gql } from 'apollo-boost';

export const ISSUES_QUERY = gql`
	query FetchIssues($states: [IssueState!]) {
		repository(owner: "facebook", name: "react") {
			issues(last: 20, states: $states) {
				totalCount
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

export const ISSUES_SEARCH_QUERY = gql`
	query SearchIssues($query: String!) {
		search(type: ISSUE, query: $query, last: 20) {
			issueCount
			edges {
				node {
					... on Issue {
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
