import { fetchMsgs, localLogIn } from "./actions";

// A file containing all thunk middleware async functions
// used for fetching data from the server

export async function fetchAll(dispatch, getState) {
	const response = await fetch("http://localhost:9000/msgs")
		.then(res => res.json())
		
	if (response.success) {
			dispatch(fetchMsgs(response.msgs));
	}
}

export function deleteMsg(id) {
	return async function deleteMsgThunk(dispatch, getState) {
		const data = {msg_id: id}
		const response = await fetch('http://localhost:9000/msgs/del', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json());

		if (response.success) {
			dispatch(fetchMsgs(response.msgs));
		}
	}
}

export function createMsg(user, content) {
	return async function createMsgThunk(dispatch, getState) {
		const data = {user: user, content: content}
		const response = await fetch('http://localhost:9000/msgs/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json());
		if (response.success) {
			dispatch(fetchMsgs(response.msgs));
		}
	}
}

export function logIn(user, pass) {
	return async function logInThunk(dispatch, getState) {
		const data = {username: user, password: pass}
		const response = await fetch('http://localhost:9000/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json());

		switch(response.state) {
			case "SUCCESS": {
				dispatch(localLogIn(user));
				break;
			}
			case "NO_USER": {
				alert("Invalid login: user '" + user + "' does not exist.");
				break;
			}
			case "WRONG_PASS": {
				alert("Invalid login: wrong password for user '" + user + "'");
				break;
			}
			default: {
				console.log("Invalid response from login. faulty state: " + response.state);
			}
		}
	}
}

export function createUser(user, pass) {
	return async function createUserThunk(dispatch, getState) {
		const data = {username: user, password: pass}
		const response = await fetch('http://localhost:9000/users/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json());
		switch(response.state) {
			case "SUCCESS": {
				dispatch(localLogIn(user));
				break;
			}
			case "NAME_TAKEN": {
				alert("Could not create user: user '" + user + "' already exists.");
				break;
			}
			default: {
				console.log("Invalid response from user creation. faulty state: " + response.state);
			}
		}
	}
}