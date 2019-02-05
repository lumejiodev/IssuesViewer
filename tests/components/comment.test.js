import Comment from '../../src/components/UI/Comment';
import { deep } from 'preact-render-spy';

const itemMock = {
	body: 'body **bold**',
	author: {
		login: 'Mikhail'
	},
	createdAt: '01.12'
};

describe('Comment component', () => {
	const context = deep(<Comment item={itemMock} />);
	
	it('renders provided data', () => {
		expect(
			context
				.find('p')
				.at(0)
				.contains('Author: Mikhail'),
		).toBeTruthy();
		expect(
			context
				.find('p')
				.at(1)
				.contains('Created at: 01.12'),
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
