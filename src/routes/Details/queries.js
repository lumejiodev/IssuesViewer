import { gql } from 'apollo-boost';

export const ISSUE_QUERY = gql`
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
				labels(first: 20) {
					nodes {
						color
						name
					}
				}
				comments(first: 10) {
					totalCount
					pageInfo {
						endCursor
						hasNextPage
					}
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

export const ISSUE_COMMENTS_QUERY = gql`
	query Issue($number: Int!, $comments_after: String) {
		repository(owner: "facebook", name: "react") {
			issue(number: $number) {
				comments(first: 10, after: $comments_after) {
					pageInfo {
						endCursor
						hasNextPage
					}
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
