import { h } from 'preact';
import { filter } from 'ramda';

import IssuesList from '../../components/IssuesList';

const renderList = ({ loading, error, data }) => {
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error :(</div>;
	const issues = data.search || data.repository.issues;
	const edges = filter(x => x.node.number, issues.edges);
	const totalCount = issues.totalCount || issues.issueCount;
	return (
		<div>
			<p>Total count: {totalCount}</p>
			<IssuesList issues={edges} />
		</div>
	);
};

export default renderList;
