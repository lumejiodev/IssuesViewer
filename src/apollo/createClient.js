import ApolloClient from 'apollo-boost';
import {
	IntrospectionFragmentMatcher,
	InMemoryCache
} from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
	introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
	cache,
	uri: 'https://api.github.com/graphql',
	request: async operation => {
		const token = process.env.PREACT_APP_GITHUB_TOKEN;
		operation.setContext({
			headers: {
				Authorization: `bearer ${token}`
			}
		});
	}
});

export default client;
