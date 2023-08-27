import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "./posts.types";

// export const POST_INITIAL_STATE = {
// 	data: [],
// 	loading: false,
// 	error: null,
// };

export const postsReducer = (posts = [], action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_ALL:
			return payload;
		case LIKE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case CREATE:
			return [...posts, action.payload];
		case UPDATE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case DELETE:
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};
