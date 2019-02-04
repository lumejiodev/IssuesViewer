import { gql } from 'apollo-boost';

export const ISSUES_QUERY = gql`
	query FetchIssues($states: [IssueState!], $before: String, $after: String) {
		repository(owner: "facebook", name: "react") {
			issues(
				first: 20
				orderBy: { field: CREATED_AT, direction: DESC }
				states: $states
				before: $before
				after: $after
			) {
				totalCount
				pageInfo {
					startCursor
					endCursor
					hasNextPage
					hasPreviousPage
				}
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
						labels(first: 20) {
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
	query SearchIssues($query: String!, $before: String, $after: String) {
		search(
			type: ISSUE
			first: 20
			query: $query
			before: $before
			after: $after
		) {
			issueCount
			pageInfo {
				startCursor
				endCursor
				hasNextPage
				hasPreviousPage
			}
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
						labels(first: 20) {
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
