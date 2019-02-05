import AuthorComment from '../../../src/components/IssuesDetails/AuthorComment';
import { shallow } from 'preact-render-spy';

const commentMock = {
	body: 'Comment text',
	author: {
		login: 'AuthorLogin'
	},
	createdAt: '2019-04-01T12:00:00.000Z'
};

describe('AuthorComment component', () => {
	it('renders without errors', () => {
		shallow(<AuthorComment {...commentMock} />);
	});
});
