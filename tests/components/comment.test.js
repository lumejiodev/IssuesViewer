import Comment from '../../src/components/UI/Comment';
import { deep } from 'preact-render-spy';

const itemMock = {
	body: 'body **bold**',
	author: {
		login: 'Mikhail'
	},
	createdAt: '2019-04-01T12:00:00.000Z'
};

describe('Comment component', () => {
	const context = deep(<Comment item={itemMock} />);

	it('renders provided data', () => {
		expect(
			context
				.find('span')
				.at(0)
				.contains('Mikhail'),
		).toBeTruthy();
		expect(
			context
				.find('span')
				.at(1)
				.contains('01.04.2019'),
		).toBeTruthy();
	});

	it('renders markdowned body', () => {
		expect(
			context
				.find('.markup')
				.find('strong')
				.exists(),
		).toBeTruthy();
	});
});
