import { CREATE_POST, DELETE_POST, FETCH_ALL, SET_CURRENT_ID, UPDATE_POST } from "./posts.types";

export const POST_INITIAL_STATE = {
	posts: [],
	isLoading: false,
	error: null,
	currentId: null,
};

export const postsReducer = (state = POST_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case SET_CURRENT_ID:
			return { ...state, currentId: payload };

		case FETCH_ALL:
			return {
				...state,
				isLoading: payload.isLoading,
				error: payload.error || null,
				posts: payload.data,
			};
		case CREATE_POST:
			return {
				...state,
				error: payload.error || null,
				posts: [...state.posts, payload.data],
			};
		case UPDATE_POST:
			// console.log(payload);
			return {
				...state,
				isLoading: payload.isLoading,
				error: payload.error || null,
				posts: state.posts.map((post) => (post._id === payload.data?._id ? payload.data : post)),
			};
		case DELETE_POST:
			// console.log(payload);
			return {
				...state,
				isLoading: payload.isLoading,
				error: payload.error || null,
				posts: state.posts.filter((post) => post._id !== payload.id),
			};

		default:
			return state;
	}
};
