import { h } from 'preact';
import { filter } from 'ramda';

import IssuesList from '../../components/IssuesList';
import Pagination from '../../components/common/Pagination';
import TotalCount from '../../components/common/TotalCount';
import Preloader from '../../components/common/Preloader';

const renderList = props => {
	const { loading, error, data } = props;
	if (loading) return <Preloader />;
	if (error) return <div>Error :(</div>;
	const issues = data.search || data.repository.issues;
	// Search query sometimes returns empty edges
	// so I have to filter them here
	const edges = filter(x => x.node.number, issues.edges);
	const totalCount = issues.totalCount || issues.issueCount;
	return (
		<div>
			<TotalCount totalCount={totalCount} />
			<IssuesList issues={edges} />
			<Pagination pageInfo={issues.pageInfo} {...props} />
		</div>
	);
};

export default renderList;
