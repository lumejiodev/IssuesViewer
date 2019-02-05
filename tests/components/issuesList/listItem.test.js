import ListItem from '../../../src/components/IssuesList/ListItem';
import { shallow } from 'preact-render-spy';

const itemMock = {
	number: 123,
	title: 'Issue title',
	createdAt: '2019-04-01T12:00:00.000Z',
	closed: true,
	author: {
		login: 'AuthorLogin'
	},
	labels: {
		nodes: []
	},
	comments: {}
};

describe('Issues ListItem component', () => {
	it('renders without errors', () => {
		shallow(<ListItem item={itemMock} />);
	});
});
