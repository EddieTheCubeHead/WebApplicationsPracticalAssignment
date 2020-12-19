import { FETCH_MSGS, SEARCH } from "../actionTypeConstants"

// A reducer handling state regarding messages

const initialState = {
	msgs: [],
	searchString: ""
}

function msgReducer(state=initialState, action) {

	switch (action.type) {
		
		case FETCH_MSGS: {
			return Object.assign({}, state, {
				msgs: action.payload.msgs
			});
		}
		
		case SEARCH: {
			return Object.assign({}, state, {
				searchString: action.payload.search
			});
		}
		
		default: {
			return state;
		}
	}
}

export default msgReducer;