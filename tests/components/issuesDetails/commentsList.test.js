import CommentsList from '../../../src/components/IssuesDetails/CommentsList';
import { shallow } from 'preact-render-spy';

const commentsMock = {
	pageInfo: {
		hasNextPage: true
	},
	edges: [
		{
			node: {}
		}
	]
};

describe('CommentsList component', () => {
	it('renders without errors', () => {
		shallow(<CommentsList comments={commentsMock} />);
	});
});
