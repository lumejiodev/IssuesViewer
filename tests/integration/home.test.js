import wait from 'waait';
import { deep } from 'preact-render-spy';
import { MockedProvider } from 'react-apollo/test-utils';
import { issuesMock } from '../__mocks__/queryMocks';
import Home from '../../src/routes/Home';

describe('Home page', () => {
	const context = deep(
		<MockedProvider mocks={[issuesMock]} addTypename={false}>
			<Home />
		</MockedProvider>,
	);

	it('renders all issues items', async () => {
		await wait(0); // wait for response
		expect(
			context.find('[data-qa-issues-list-item]').filter('div').length,
		).toBe(2);
	});

	it('should have a link to issue details', async () => {
		expect(
			context
				.find('a')
				.at(0)
				.attr('href'),
		).toBe('/14750');
	});
});
