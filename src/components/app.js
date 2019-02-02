import { h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';

import Home from '../routes/Home';
import Details from '../routes/Details';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Details path="/:id" />
		</Router>
	</div>
);

export default App;
