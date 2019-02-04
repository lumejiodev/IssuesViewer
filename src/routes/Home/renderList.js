import { h } from 'preact';
import { filter } from 'ramda';

import IssuesList from '../../components/IssuesList';
import Pagination from '../../components/Pagination';

const renderList = (props) => {
	const { loading, error, data } = props;
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error :(</div>;
	const issues = data.search || data.repository.issues;
	const edges = filter(x => x.node.number, issues.edges);
	const totalCount = issues.totalCount || issues.issueCount;
	return (
		<div>
			<p>Total count: {totalCount}</p>
			<IssuesList issues={edges} />
			<Pagination pageInfo={issues.pageInfo} {...props} />
		</div>
	);
};

export default renderList;
