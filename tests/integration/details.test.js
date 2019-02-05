import wait from 'waait';
import { deep } from 'preact-render-spy';
import { MockedProvider } from 'react-apollo/test-utils';
import { issueMock } from '../__mocks__/queryMocks';
import Details from '../../src/routes/Details';

const issueId = issueMock.request.variables.number;

describe('Issue Details page', () => {
	const context = deep(
		<MockedProvider mocks={[issueMock]} addTypename={false}>
			<Details matches={{ id: issueId }} />
		</MockedProvider>,
	);

	it('renders issue card', async () => {
		await wait(0); // wait for response
		expect(context.find('[data-qa-issues-list-details]').exists()).toBeTruthy();
	});
});
