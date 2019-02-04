import { h } from 'preact';
import { compose, withHandlers } from 'recompose';

const Pagination = ({
	pageInfo: { hasNextPage, hasPreviousPage },
	handleClickNext,
	handleClickPrevious
}) => (
	<div>
		{hasNextPage && (
			<button onClick={handleClickNext}>Previous Page</button>
		)}
		{hasPreviousPage && <button onClick={handleClickPrevious}>Next Page</button>}
	</div>
);

export default compose(
	withHandlers({
		changePage: ({
			pageInfo: { startCursor, endCursor },
			variables,
			fetchMore
		}) => prev => {
			const extraVariables = prev
				? { before: startCursor }
				: { after: endCursor };
			fetchMore({
				variables: { ...variables, ...extraVariables },
				updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult
			});
		}
	}),
	withHandlers({
		handleClickPrevious: ({ changePage }) => () => changePage(true),
		handleClickNext: ({ changePage }) => () => changePage(false)
	}),
)(Pagination);
