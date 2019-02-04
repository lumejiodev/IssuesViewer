import { h } from 'preact';
import { Router } from 'preact-router';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo/createClient';

import Header from './components/UI/header';

import Home from './routes/Home';
import Details from './routes/Details';

const App = () => (
	<ApolloProvider client={apolloClient}>
		<div id="app">
			<Header title="GitHub Issues Viewer" />
			<Router>
				<Home path="/" />
				<Details path="/:id" />
			</Router>
		</div>
	</ApolloProvider>
);

export default App;
