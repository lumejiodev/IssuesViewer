import Header from '../../src/components/UI/Header';
import { shallow } from 'preact-render-spy';

describe('Header component', () => {
	it('renders title', () => {
		const context = shallow(<Header title="Test title" />);
		expect(context.text()).toBe('Test title');
	});
});
