import Pagination from '../../src/components/common/Pagination';
import { deep } from 'preact-render-spy';

const pageInfoMock = {
	hasNextPage: true,
	hasPreviousPage: false
};

describe('Pagination component', () => {
	const context = deep(<Pagination pageInfo={pageInfoMock} />);

	it('renders next/prev buttons', () => {
		expect(context.find('button').length).toBe(1);
		expect(context.find('button').text()).toBe('Previous Page');
	});
});
