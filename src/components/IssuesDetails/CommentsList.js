import { h } from 'preact';
import { withHandlers } from 'recompose';
import {
	pipe,
	lensPath,
	view,
	set,
	over,
	concat
} from 'ramda';

import Comment from '../UI/Comment';
import Button from '../UI/Button';

const CommentsList = ({ comments, handleFetchMoreClick }) => {
	const {
		pageInfo: { hasNextPage }
	} = comments;
	return (
		<div>
			{comments.edges.map(({ node }) => (
				<Comment item={node} />
			))}
			{hasNextPage && (
				<Button onClick={handleFetchMoreClick} text="Fetch More" />
			)}
		</div>
	);
};

export default withHandlers({
	handleFetchMoreClick: ({
		comments,
		variables,
		fetchMore,
		commentsQuery
	}) => () => {
		const {
			pageInfo: { endCursor }
		} = comments;
		fetchMore({
			query: commentsQuery,
			variables: { ...variables, comments_after: endCursor },
			updateQuery: (previousResult, { fetchMoreResult }) => {
				const edgesLens = lensPath([
					'repository',
					'issue',
					'comments',
					'edges'
				]);
				const pageInfoLens = lensPath([
					'repository',
					'issue',
					'comments',
					'pageInfo'
				]);
				return pipe(
					result =>
					// Add new comments to existing ones
						over(
							edgesLens,
							prevEdges => concat(prevEdges, view(edgesLens, fetchMoreResult)),
							result,
						),
					result =>
					// Update pageInfo for comments
						set(
							pageInfoLens,
							view(pageInfoLens, fetchMoreResult),
							result,
						),
				)(previousResult);
			}
		});
	}
})(CommentsList);
