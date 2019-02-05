import AuthorComment from '../../../src/components/IssuesDetails/AuthorComment';
import { shallow } from 'preact-render-spy';

const commentMock = {
	body: 'Comment text',
	author: {
		login: 'AuthorLogin'
	},
	createdAt: '02/02'
};

describe('AuthorComment component', () => {
	it('renders without errors', () => {
		shallow(<AuthorComment {...commentMock} />);
	});
});
