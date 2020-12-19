import { FETCH_MSGS,
		 SEARCH,
		 LOG_IN,
		 LOG_OUT } from "./actionTypeConstants";

// A tiny file containing all prototypes for different redux actions used
// in the program

export const fetchMsgs = msgs => ({
	type: FETCH_MSGS, 
	payload: { msgs }
});

export const search = searchString => ({
	type: SEARCH,
	payload: { search: searchString }
});

export const localLogIn = (user) => ({
	type: LOG_IN,
	payload: { username: user }
});

export const logOut = () => ({
	type: LOG_OUT,
	payload: {}
});