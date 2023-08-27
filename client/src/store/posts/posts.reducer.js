import { POSTS_ACTION_TYPES } from "./posts.types";

export const POST_INITIAL_STATE = {
	data: [],
	loading: false,
	error: null,
};

export const postsReducer = (state = POST_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		// LIST API RESULT
		case POSTS_ACTION_TYPES.FETCH_DATA_START:
			return {
				...state,
				loading: true,
			};
		case POSTS_ACTION_TYPES.FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: payload.posts,
			};
		case POSTS_ACTION_TYPES.FETCH_DATA_FAILED:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
};
