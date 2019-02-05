import IssuesDetails from '../../../src/components/IssuesDetails';
import { shallow } from 'preact-render-spy';

const detailsMock = {
	number: 123,
	issue: {
		title: 'Issue title',
		body: 'Issue body',
		createdAt: '02/02',
		closed: true,
		author: {
			login: 'AuthorLogin'
		},
		labels: {
			nodes: []
		},
		comments: {}
	}
};

describe('IssuesDetails component', () => {
	it('renders without errors', () => {
		shallow(<IssuesDetails {...detailsMock} />);
	});
});
