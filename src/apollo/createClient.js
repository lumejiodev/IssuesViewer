import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
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
