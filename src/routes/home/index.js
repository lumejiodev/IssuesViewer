import { h } from 'preact';
import { Query } from 'react-apollo';
import { compose, withStateHandlers, withHandlers, withProps } from 'recompose';
import { ISSUES_QUERY, ISSUES_SEARCH_QUERY } from './queries';

import PageWrapper from '../../components/UI/PageWrapper';
import renderList from './renderList';

const Home = ({
	handleOpenInput,
	handleClosedInput,
	handleSearchInput,
	filterOpen,
	filterClosed,
	filterStates,
	filterSearch
}) => (
	<PageWrapper>
		<h1>Home</h1>

		<input type="search" onInput={handleSearchInput} />
		<label>
			<input
				type="checkbox"
				onInput={handleOpenInput}
				disabled={filterClosed}
			/>
			<span>Only open</span>
		</label>
		<label>
			<input
				type="checkbox"
				onInput={handleClosedInput}
				disabled={filterOpen}
			/>
			<span>Only closed</span>
		</label>

		{filterSearch ? (
			<Query query={ISSUES_SEARCH_QUERY} variables={{ query: filterSearch }}>
				{renderList}
			</Query>
		) : (
			<Query query={ISSUES_QUERY} variables={{ states: filterStates }}>
				{renderList}
			</Query>
		)}
	</PageWrapper>
);

export default compose(
	withStateHandlers(
		{
			timeout: null,
			searchQuery: '',
			filterOpen: false,
			filterClosed: false
		},
		{
			setStateTimeout: () => timeout => ({ timeout }),
			setSearchQuery: ({ QUERY_PREFIX }) => value => ({
				searchQuery: value
			}),
			handleOpenInput: () => ({ target: { checked } }) => ({
				filterOpen: checked
			}),
			handleClosedInput: () => ({ target: { checked } }) => ({
				filterClosed: checked
			})
		},
	),
	withHandlers({
		handleSearchInput: ({ timeout, setStateTimeout, setSearchQuery }) => ({
			target: { value }
		}) => {
			clearTimeout(timeout);
			setStateTimeout(setTimeout(() => setSearchQuery(value), 1000));
		}
	}),
	withProps(({ filterOpen, filterClosed, searchQuery }) => {
		const filterStates = filterOpen ? 'OPEN' : filterClosed ? 'CLOSED' : null;
		let filterSearch = '';
		if (searchQuery) {
			// I have to use search hooks here
			filterSearch = 'user:facebook repo:react ' + searchQuery;
			if (filterOpen) filterSearch += ' state:open';
			if (filterClosed) filterSearch += ' state:closed';
		}
		return {
			filterSearch,
			filterStates
		};
	}),
)(Home);
