import { h } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { fetchTest } from '../../redux/ducks/issuesList.duck';

import PageWrapper from '../../components/UI/PageWrapper';

const Home = ({ fetchTest }) => (
	<PageWrapper>
		<h1>Home</h1>
		<p onClick={fetchTest}>This is the Home component.</p>
	</PageWrapper>
);

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchTest }, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(Home);
