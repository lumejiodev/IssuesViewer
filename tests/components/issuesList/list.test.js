import IssuesList from '../../../src/components/IssuesList';
import { shallow } from 'preact-render-spy';

const listMock = {
	issues: [
		{
			node: {}
		}
	]
};

describe('IssuesList component', () => {
	it('renders without errors', () => {
		shallow(<IssuesList {...listMock} />);
	});
});
