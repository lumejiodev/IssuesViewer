const GET_TEST = 'rta/GET_TEST';
const GET_TEST_SUCCESS = 'rta/GET_TEST_SUCCESS';
const GET_TEST_FAILURE = 'rta/GET_TEST_FAILURE';

export const requestTest = () => ({ type: GET_TEST });
export const receiveTest = locations => ({
	type: GET_TEST_SUCCESS,
	locations
});
export const receiveTestFail = error => ({
	type: GET_TEST_FAILURE,
	error
});

export const fetchTest = () => dispatch => {
	dispatch(requestTest());
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json(), err => dispatch(receiveTestFail(err)))
		.then(locations => dispatch(receiveTest(locations)));
};

const initialState = {
	items: [],
	isFetching: false,
	error: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TEST:
			return {
				...state,
				isFetching: true
			};
		case GET_TEST_SUCCESS:
			return {
				...state,
				locations: action.locations,
				isFetching: false
			};
		case GET_TEST_FAILURE:
			return {
				...state,
				error: action.error,
				isFetching: false
			};
		default:
			return state;
	}
};
