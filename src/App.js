import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import configureStore from './redux/configureStore';

import Header from './components/header';

import Home from './routes/Home';
import Details from './routes/Details';

const App = () => (
	<Provider store={configureStore()}>
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Details path="/:id" />
			</Router>
		</div>
	</Provider>
);

export default App;
