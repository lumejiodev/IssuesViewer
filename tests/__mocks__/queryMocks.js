import { ISSUES_QUERY } from '../../src/routes/Home/queries';
import { ISSUE_QUERY } from '../../src/routes/Details/queries';

const issuesEdgeResults = [
	{
		node: {
			title: 'Simultaneous key events in effect handled out of order',
			number: 14750,
			createdAt: '2019-02-03T02:57:23Z',
			author: {
				login: 'stuartkeith'
			},
			comments: {
				totalCount: 1
			},
			labels: {
				nodes: []
			},
			closed: false
		}
	},
	{
		node: {
			title: 'adding if directive ',
			number: 14749,
			createdAt: '2019-02-03T00:52:14Z',
			author: {
				login: 'yousefelgoharyx'
			},
			comments: {
				totalCount: 3
			},
			labels: {
				nodes: []
			},
			closed: false
		}
	}
];

const issuesQueryResult = {
	data: {
		repository: {
			issues: {
				pageInfo: {
					endCursor: 'Y3Vyc29yOnYyOpK5MjAxOS0wMS0yOVQyMjozNjo1MSswMzowMM4YG3jv',
					hasNextPage: true,
					hasPreviousPage: false,
					startCursor:
						'Y3Vyc29yOnYyOpK5MjAxOS0wMi0wM1QwNTo1NzoyMyswMzowMM4YM8fn'
				},
				totalCount: 6950,
				edges: issuesEdgeResults
			}
		}
	}
};

const issueDetailsResult = {
	data: {
		repository: {
			issue: {
				title: 'Simultaneous key events in effect handled out of order',
				body: '**Do you want to request a *feature* or report a *bug*?**',
				createdAt: '2019-02-03T02:57:23Z',
				closed: false,
				author: {
					login: 'stuartkeith'
				},
				labels: {
					nodes: [
						{
							color: 'c7def8',
							name: 'Type: Feature Request'
						}
					]
				},
				comments: {
					totalCount: 3,
					pageInfo: {
						endCursor: 'Y3Vyc29yOnYyOpHOG3FLCQ==',
						hasNextPage: false
					},
					edges: [
						{
							node: {
								author: {
									login: 'gaearon'
								},
								body:
									'I haven’t looked in detail yet but could it be because effects (unlike change pointers to React events, for example) are deferred until after paint? So they close over the stale value for a bit.\r\n\r\nI kind of think that for discrete events where previous state matters you should always use the updater form or go straight to useReducer.\r\n\r\nFor example two setKeys calls in the same tick wouldn’t work either because of batching. ',
								createdAt: '2019-02-03T09:59:15Z'
							}
						},
						{
							node: {
								author: {
									login: 'stuartkeith'
								},
								body:
									"Thanks for getting back to me.\r\n\r\nWhat's stumped me is the fact that adding a second dummy `setState` call below the first state fixes the issue completely. I can release eight keys at once and all reliably show up as expected. I've adapted the second example to be a bit clearer (https://codesandbox.io/s/0yo51n5wv). It's like this second `setState` call somehow flushes something out that ensures all the events are processed sequentially, stopping React from rushing ahead.\r\n\r\nMost problems I've encountered with stale state in effects have made sense - it's probably a rite of passage to try and optimise an effect by only running it once on mount, or improperly declaring inputs, or batching setState calls, as you point out. But this one doesn't seem intuitive at all.",
								createdAt: '2019-02-04T13:24:53Z'
							}
						}
					]
				}
			}
		}
	}
};

export const issuesMock = {
	request: {
		query: ISSUES_QUERY,
		variables: {
			states: null
		}
	},
	result: issuesQueryResult
};

export const issueMock = {
	request: {
		query: ISSUE_QUERY,
		variables: {
			number: 14750
		}
	},
	result: issueDetailsResult
};
