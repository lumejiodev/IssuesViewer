import { h } from 'preact';
import { compose, withHandlers } from 'recompose';
import Button from '../UI/Button';

const Pagination = ({
	pageInfo: { hasNextPage, hasPreviousPage },
	handleClickNext,
	handleClickPrevious
}) => (
	<div>
		{hasNextPage && <Button onClick={handleClickNext} text="Previous Page" />}
		{hasPreviousPage && (
			<Button onClick={handleClickPrevious} text="Next Page" />
		)}
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
