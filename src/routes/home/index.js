import { h } from 'preact';
import { Query } from 'react-apollo';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { ISSUES_QUERY, ISSUES_SEARCH_QUERY } from './queries';

import PageWrapper from '../../components/UI/PageWrapper';
import renderList from './renderList';

const Home = ({ handleSearchInput, searchQuery }) => (
	<PageWrapper>
		<h1>Home</h1>
		
		<input type="search" onInput={handleSearchInput} />

		{searchQuery ? (
			<Query query={ISSUES_SEARCH_QUERY} variables={{ query: searchQuery }}>
				{renderList}
			</Query>
		) : (
			<Query query={ISSUES_QUERY}>
				{renderList}
			</Query>
		)}
	</PageWrapper>
);

export default compose(
	withStateHandlers(
		{
			QUERY_PREFIX: 'user:facebook repo:react ',
			searchQuery: '',
			timeout: null
		},
		{
			setSearchQuery: ({ QUERY_PREFIX }) => value => ({
				searchQuery: value ? QUERY_PREFIX + value : ''
			}),
			setStateTimeout: () => timeout => ({ timeout })
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
)(Home);
