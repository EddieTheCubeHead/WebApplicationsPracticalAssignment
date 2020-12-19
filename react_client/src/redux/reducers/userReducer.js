import { LOG_IN, LOG_OUT } from "../actionTypeConstants";

// A reducer handling state regarding users

const initialState = {
	user: null
}

function userReducer(state=initialState, action) {
	switch (action.type) {
		case LOG_IN: {
			return Object.assign({}, state, {
				user: action.payload.username,
			});
		}
		
		case LOG_OUT: {
			return Object.assign({}, state, {
				user: null
			});
		}
		
		 default: {
			 return state;
		 }
	}
}

export default userReducer;